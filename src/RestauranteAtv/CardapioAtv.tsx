import axios from "axios";
import React, { useEffect, useState } from "react";
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";



function CardapioAtv(): React.JSX.Element {
    const [produto, setProduto] = useState<Produtos[]>([]);
    const [erro, setErro] = useState<string>("");
    const [count, setCount] = useState(0)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://10.137.11.213/api/produtos/listagem');
              
                if(true === response.data.status){
                    setProduto(response.data.data)
                }
            } catch (error) {
                setErro("Ocorreu um erro");
                console.log(error);
            }
        }
    
        fetchData();
    }, []);
        
const renderItem = ({item}: {item: Produtos}) => (
        <View style={styles.itensCardapio}>
        <Image source={item.image} style={styles.images}/>
        <Text style={styles.nameText}>{item.nome}</Text>
        <Text style={styles.itensText}>{item.ingredientes}</Text>
        <Text style={styles.precoText}>R$: {item.preco}</Text>
        <TouchableOpacity onPress={() => setCount(count + 1)}> 
        <Image source={require('../assets/images/Carrinho.png')} style={styles.cartImage}/>
        </TouchableOpacity>
        </View>

);

    return (
        
      <View style={styles.container}>
        <View style={styles.header}>
        <ImageBackground source={require('../assets/images/headerFundo.jpg')} 
        style={styles.ImageBackgroundHeader}/>
            <Image source={require('../assets/images/logo.png')} 
            style={styles.Logo}/>
            <Text style={styles.headerText}>Cardapio</Text>
        </View>
        <ImageBackground source={require('../assets/images/fundo2.jpg')} 
        style={styles.ImageBackground}/>
        
        
        <FlatList showsVerticalScrollIndicator={false} data={produto} 
        renderItem={renderItem} keyExtractor={(produto) => produto.id}/>
        
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('../assets/images/home.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/images/pedido.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/images/profile.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('../assets/images/menu.jpg')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setCount(count * 0)}>
                <Image source={require('../assets/images/cartA.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>
            <Text style={styles.countText}>{count}</Text> 
        </View>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itensCardapio: {
        padding: 10,
        marginVertical: 16,
        marginHorizontal: 16,
        flexDirection: 'column',
        borderRadius: 20,
    
    },
    ImageBackground: {
        flex: 1,
        width: 393, 
        height: 516,
        marginVertical: -20,
        marginTop: 100,
        
    },
    ImageBackgroundHeader: {
        flex: 1,
        width: 413, 
        height: 170,
    },
    Logo: {
        height: 150,
        width: 150,
        marginTop: -15,
    },
    images: {
        width: 100,
        height: 100,
        marginRight: 'auto',
        borderRadius: 20,
    },
    
    cartImage: {
        width: 45,
        height: 45,
        marginLeft: 280,
        marginTop: -25,
    },
    header: {
        alignItems: 'center',
        height: 70,
        
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#bdbdbd',
        marginTop: -20,
    },
    nameText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'left',
        marginStart: 110,
        marginTop: -105
    },
    countText: {
        backgroundColor: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        left: -23,
        width: 17,
        height: 17,
        borderRadius: 100,
        marginTop: -23        
    },
    itensText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'white',
        textAlign: 'left',
        marginStart: 110
    },
    precoText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        marginStart: -35
    },
    footer: {
        borderTopWidth: 0.2,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 21
    },
    footerIcon: {
        left: 30,
        width: 30,
        height: 30
    }
})

export default CardapioAtv;