import React, { useState } from "react";
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RadioButton } from "react-native-paper";




function Carrinho(): React.JSX.Element {
    const [pedido, setPedido] = useState<Pedido[]>([]);
    const [checked, setChecked] = React.useState('first');
    const [count, setCount] = useState(9)

const renderItem = ({item}: {item: Produtos}) => (
        <View style={styles.itensCardapio}>
        <Image source={item.image} style={styles.images}/>
        <Text style={styles.nameText}>{item.nome}</Text>
        <Text style={styles.itensText}>{item.ingredientes}</Text>
        <Text style={styles.precoText}>R$: {item.preco}</Text>
        <TouchableOpacity onPress={() => setCount(count - 1 )}> 
        <Image source={require('../assets/images/lixo1.png')} style={styles.lixoImage}/>
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
            <Text style={styles.headerText}>Carrinho</Text>
        </View>
        <ImageBackground source={require('../assets/images/fundo2.jpg')} 
        style={styles.ImageBackground}/>
        
        <FlatList showsVerticalScrollIndicator={false}   data={pedido} 
        renderItem={renderItem}/> 
         
        <Text style={styles.pagamento}>Forma de pagamento:</Text>
         <View style={styles.RadioButton}>
         <RadioButton
        value="Pix"
        status={ checked === 'first' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('first')} />
        <Text style={styles.textRadioButton}>PIX</Text>
        </View>

        <View style={styles.RadioButton}>
        <RadioButton
        value="Cartao"
        status={ checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('second')} />
        <Text style={styles.textRadioButton}>Cartao</Text>
        </View> 
    
        <View style={styles.RadioButton}>
        <RadioButton
        value="dinheiro fisico"
        status={ checked === 'third' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('third')} />
        <Text style={styles.textRadioButton}>Dinheiro Fisico</Text>
         </View> 

         
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

            <TouchableOpacity >
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
        borderRadius: 20
    },
    lixoImage: {
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
    },
    RadioButton: {
        flexDirection: 'row',
    
    },
    textRadioButton: {
        color: 'white',
        width: 70,
        marginTop: 5,
        fontSize: 15
    },
    pagamento: {
        color: 'white',
        fontSize: 20,
        marginTop: 10
    }
})

export default Carrinho;