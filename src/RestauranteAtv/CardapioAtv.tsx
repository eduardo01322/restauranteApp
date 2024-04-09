import React, { useState } from "react";
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface Itens {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    image: any;
}


const dados: Itens[] = [
    {id: "1", nome: "𝓢𝓪𝓵𝓪𝓭𝓪 𝓭𝓮 𝓯𝓻𝓾𝓽𝓸𝓼 𝓭𝓸 𝓶𝓪𝓻", preco: "100.00", ingredientes: "Salada com frutos do mar, como camarão, lula e polvo, servida com molho vinagrete.", image: require('../assets/images/SaladaDeFrutosDoMar.jpg')},
    {id: "2", nome: "𝓑𝓲𝓯𝓮 𝓪𝓸 𝓶𝓸𝓵𝓱𝓸 𝓭𝓮 𝓿𝓲𝓷𝓱𝓸", preco: "69.50", ingredientes: "Bife grelhado servido com um molho de vinho tinto encorpado, acompanhado de legumes grelhados.", image: require('../assets/images/BifeaAoMolhoDeVinho.jpg')},
    {id: "3", nome: "𝓜𝓪𝓬𝓪𝓻𝓻ã𝓸 à 𝓬𝓪𝓻𝓫𝓸𝓷𝓪𝓻𝓪", preco: "24.99", ingredientes: "Macarrão servido com molho à base de creme de leite, queijo parmesão, bacon e ovos, finalizado com pimenta preta moída.", image: require('../assets/images/MacarrãoÀCarbonara.jpg')},
    {id: "4", nome: "𝓡𝓲𝓼𝓸𝓽𝓸 𝓭𝓮 𝓬𝓸𝓰𝓾𝓶𝓮𝓵𝓸𝓼", preco: "20.00", ingredientes: "Risoto cremoso feito com cogumelos frescos, vinho branco, caldo de legumes e finalizado com queijo parmesão ralado.", image: require('../assets/images/RisotoDeCogumelos.jpg')},
    {id: "5", nome: "𝓒𝓾𝓻𝓻𝔂 𝓭𝓮 𝓵𝓮𝓰𝓾𝓶𝓮𝓼", preco: "19.99", ingredientes: "Curry de legumes com abóbora, batata, cenoura e ervilha, servido com arroz branco e pão naan.", image: require('../assets/images/CurryDeLegumes.jpg')},
    {id: "6", nome: "𝓠𝓾𝓲𝓬𝓱𝓮 𝓭𝓮 𝓮𝓼𝓹𝓲𝓷𝓪𝓯𝓻𝓮 𝓬𝓸𝓶 𝓺𝓾𝓮𝓲𝓳𝓸 𝓯𝓮𝓽𝓪", preco: "10.00", ingredientes: "Quiche salgada feita com massa crocante e recheada com espinafre, queijo feta e ovos, servida com salada.", image: require('../assets/images/QuicheDeEspinafreComQueijoFeta.jpg')},
    {id: "7", nome: "𝓕𝓲𝓵é 𝓶𝓲𝓰𝓷𝓸𝓷 𝓰𝓻𝓮𝓵𝓱𝓪𝓭𝓸 𝓬𝓸𝓶 𝓫𝓪𝓽𝓪𝓽𝓪𝓼 𝓯𝓻𝓲𝓽𝓪𝓼", preco: "25.00", ingredientes: "Bife de filé mignon grelhado no ponto desejado, servido com batatas fritas crocantes e molho chimichurri.", image: require('../assets/images/FiléMignonGrelhadoComBatatasFritas.jpg')}
];
function CardapioAtv(): React.JSX.Element {
    const [count, setCount] = useState(0)
const renderItem = ({item}: {item: Itens}) => (
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
        <FlatList showsVerticalScrollIndicator={false} data={dados} 
        renderItem={renderItem} keyExtractor={(item) => item.id}/>
         
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
        borderRadius: 20
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