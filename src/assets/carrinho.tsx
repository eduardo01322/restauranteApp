import React, { useState } from "react";
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


interface ItensCarrinho {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    image: any;
}


const dados: ItensCarrinho[] = [
    {id: "1", nome: "𝓢𝓪𝓵𝓪𝓭𝓪 𝓭𝓮 𝓯𝓻𝓾𝓽𝓸𝓼 𝓭𝓸 𝓶𝓪𝓻", preco: "100.00", ingredientes: "Salada com frutos do mar, como camarão, lula e polvo, servida com molho vinagrete.", image: require('./images/SaladaDeFrutosDoMar.jpg')},
    {id: "2", nome: "𝓑𝓲𝓯𝓮 𝓪𝓸 𝓶𝓸𝓵𝓱𝓸 𝓭𝓮 𝓿𝓲𝓷𝓱𝓸", preco: "69.50", ingredientes: "Bife grelhado servido com um molho de vinho tinto encorpado, acompanhado de legumes grelhados.", image: require('./images/BifeaAoMolhoDeVinho.jpg')},
    {id: "3", nome: "𝓜𝓪𝓬𝓪𝓻𝓻ã𝓸 à 𝓬𝓪𝓻𝓫𝓸𝓷𝓪𝓻𝓪", preco: "24.99", ingredientes: "Macarrão servido com molho à base de creme de leite, queijo parmesão, bacon e ovos, finalizado com pimenta preta moída.", image: require('./images/MacarrãoÀCarbonara.jpg')},
    {id: "4", nome: "𝓡𝓲𝓼𝓸𝓽𝓸 𝓭𝓮 𝓬𝓸𝓰𝓾𝓶𝓮𝓵𝓸𝓼", preco: "20.00", ingredientes: "Risoto cremoso feito com cogumelos frescos, vinho branco, caldo de legumes e finalizado com queijo parmesão ralado.", image: require('./images/RisotoDeCogumelos.jpg')},
    {id: "11", nome: "𝓒𝓪𝓼𝓼𝓸𝓾𝓵𝓮𝓽", preco: "60.00", ingredientes: "É um ensopado rico e substancioso com feijão branco, carne de porco, linguiça e confit de pato.", image: require('./images/Cassoulet.jpg')},
    {id: "12", nome: "𝓣𝓪𝓻𝓽𝓮 𝓽𝓪𝓽𝓲𝓷", preco: "11.00", ingredientes: "Para a sobremesa, uma torta de maçãs caramelizadas com massa folhada crocante. É frequentemente servida com creme de leite fresco ou sorvete de baunilha.", image: require('./images/TarteTatin.jpg')},
    {id: "13", nome: "𝓔𝓼𝓽𝓻𝓸𝓰𝓸𝓷𝓸𝓯𝓮", preco: "16.00", ingredientes: "O estrogonofe é um prato que pode ser feito de camarão, frango ou carne bovina.", image: require('./images/Estrogonofe.jpg')},
    {id: "14", nome: "𝓕𝓻𝓪𝓷𝓰𝓸 𝔁𝓪𝓭𝓻𝓮𝔃", preco: "13.00", ingredientes: "Feito com filé de frango, pimentões, cebola, amendoim e molho shoyu, é salteado na wok.", image: require('./images/FrangoXadrez.jpg')},
    {id: "15", nome: "𝓒𝓸𝓼𝓽𝓮𝓵𝓲𝓷𝓱𝓪 𝓭𝓮 𝓹𝓸𝓻𝓬𝓸 𝓷𝓪 𝓹𝓪𝓷𝓮𝓵𝓪 𝓭𝓮 𝓹𝓻𝓮𝓼𝓼ã𝓸", preco: "27.00", ingredientes: "Feita com costelinha de porco, cebola, alho e molho de tomate, é cozida na panela de pressão", image: require('./images/CostelinhaDePorcoNaPanelaDePressão.jpg')},

];


function Carrinho(): React.JSX.Element {
    const [count, setCount] = useState(9)
const renderItem = ({item}: {item: ItensCarrinho}) => (
        <View style={styles.itensCardapio}>
        <Image source={item.image} style={styles.images}/>
        <Text style={styles.nameText}>{item.nome}</Text>
        <Text style={styles.itensText}>{item.ingredientes}</Text>
        <Text style={styles.precoText}>R$: {item.preco}</Text>
        <TouchableOpacity onPress={() => setCount(count - 1)}> 
        <Image source={require('./images/lixo1.png')} style={styles.cartImage}/>
        </TouchableOpacity>
        </View>
        
);

    return (
        
      <View style={styles.container}>
        <View style={styles.header}>
        <ImageBackground source={require('./images/headerFundo.jpg')} 
        style={styles.ImageBackgroundHeader}/>
            <Image source={require('./images/logo.png')} 
            style={styles.Logo}/>
            <Text style={styles.headerText}>Carrinho</Text>
        </View>
        <ImageBackground source={require('./images/fundo2.jpg')} 
        style={styles.ImageBackground}/>
        <FlatList showsVerticalScrollIndicator={false} data={dados} 
        renderItem={renderItem} keyExtractor={(item) => item.id}/>
         
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('./images/home.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./images/pedido.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./images/profile.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./images/menu.jpg')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity >
                <Image source={require('./images/cartA.png')}
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
        fontSize: 10,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        left: -13,
        width: 15,
        height: 15,
        borderRadius: 100,
        marginTop: -20        
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
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingVertical: 10
    },
    footerIcon: {
        left: 30,
        width: 30,
        height: 30
    }
})

export default Carrinho;