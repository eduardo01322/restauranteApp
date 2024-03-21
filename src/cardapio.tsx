import React from "react";
import {FlatList, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface ItensCardapio {
    id: string;
    nome: string;
    preco: string;
    ingredientes: string;
    image: any;
}

const dados: ItensCardapio[] = [
    {id: "1", nome: "Salada de frutos do mar", preco: "100.00", ingredientes: "Salada com frutos do mar, como camarão, lula e polvo, servida com molho vinagrete.", image: require('./assets/images/SaladaDeFrutosDoMar.jpg')},
    {id: "2", nome: "Bife ao molho de vinho", preco: "69.50", ingredientes: "Bife grelhado servido com um molho de vinho tinto encorpado, acompanhado de legumes grelhados.", image: require('./assets/images/BifeaAoMolhoDeVinho.jpg')},
    {id: "3", nome: "Macarrão à carbonara", preco: "24.99", ingredientes: "Macarrão servido com molho à base de creme de leite, queijo parmesão, bacon e ovos, finalizado com pimenta preta moída.", image: require('./assets/images/MacarrãoÀCarbonara.jpg')},
    {id: "4", nome: "Risoto de cogumelos", preco: "20.00", ingredientes: "Risoto cremoso feito com cogumelos frescos, vinho branco, caldo de legumes e finalizado com queijo parmesão ralado.", image: require('./assets/images/RisotoDeCogumelos.jpg')},
    {id: "5", nome: "Curry de legumes", preco: "19.99", ingredientes: "Curry de legumes com abóbora, batata, cenoura e ervilha, servido com arroz branco e pão naan.", image: require('./assets/images/CurryDeLegumes.jpg')},
    {id: "6", nome: "Quiche de espinafre com queijo feta", preco: "10.00", ingredientes: "Quiche salgada feita com massa crocante e recheada com espinafre, queijo feta e ovos, servida com salada.", image: require('./assets/images/QuicheDeEspinafreComQueijoFeta.jpg')},
    {id: "7", nome: "Filé mignon grelhado com batatas fritas", preco: "25.00", ingredientes: "Bife de filé mignon grelhado no ponto desejado, servido com batatas fritas crocantes e molho chimichurri.", image: require('./assets/images/FiléMignonGrelhadoComBatatasFritas.jpg')},
    {id: "8", nome: "Steak frites", preco: "15.00", ingredientes: "Consiste em um bife suculento servido com batatas fritas crocantes e temperadas.", image: require('./assets/images/Steakfrites.jpg')},
    {id: "9", nome: "Salmão grelhado", preco: "27.99", ingredientes: "O salmão grelhado é uma excelente escolha. Muitos bistrôs servem o peixe com legumes da estação e uma salada verde fresca.", image: require('./assets/images/SalmãoGrelhado.jpg')},
    {id: "10", nome: "Coq au vin", preco: "35.00", ingredientes: "É um guisado de frango com vinho tinto, bacon, cogumelos e ervas aromáticas.", image: require('./assets/images/CoqAuVin.jpg')},
    {id: "11", nome: "Cassoulet", preco: "60.00", ingredientes: "É um ensopado rico e substancioso com feijão branco, carne de porco, linguiça e confit de pato.", image: require('./assets/images/Cassoulet.jpg')},
    {id: "12", nome: "Tarte tatin", preco: "11.00", ingredientes: "Para a sobremesa, uma torta de maçãs caramelizadas com massa folhada crocante. É frequentemente servida com creme de leite fresco ou sorvete de baunilha.", image: require('./assets/images/TarteTatin.jpg')},
    {id: "13", nome: "Estrogonofe", preco: "16.00", ingredientes: "O estrogonofe é um prato que pode ser feito de camarão, frango ou carne bovina.", image: require('./assets/images/Estrogonofe.jpg')},
    {id: "14", nome: "Frango xadrez", preco: "13.00", ingredientes: "Feito com filé de frango, pimentões, cebola, amendoim e molho shoyu, é salteado na wok.", image: require('./assets/images/FrangoXadrez.jpg')},
    {id: "15", nome: "Costelinha de porco na panela de pressão", preco: "27.00", ingredientes: "Feita com costelinha de porco, cebola, alho e molho de tomate, é cozida na panela de pressão", image: require('./assets/images/CostelinhaDePorcoNaPanelaDePressão.jpg')},

];

const renderItem = ({item}: {item: ItensCardapio}) => (
        <View style={styles.itensCardapio}>
        <Image source={item.image} style={styles.images}/>
        <Text style={styles.nameText}>{item.nome}</Text>
        <Text style={styles.itensText}>{item.ingredientes}</Text>
        <Text style={styles.precoText}>R$: {item.preco}</Text>
        <TouchableOpacity>
        <Image source={require('./assets/images/cart.png')} style={styles.cartImage}/>
        </TouchableOpacity>
        </View>
);

function Cardapio(): React.JSX.Element {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>saveurs du monde</Text>
            <Image source={require('./assets/images/logoCerto.png')} 
            style={styles.Logo}/>
        </View>
        <ImageBackground source={require('./assets/images/fundo.jpg')} 
        style={styles.ImageBackground}/>
        <FlatList showsVerticalScrollIndicator={false} data={dados} 
        renderItem={renderItem} keyExtractor={(item) => item.id}/>
         
        <View style={styles.footer}>
            <TouchableOpacity>
                <Image source={require('./assets/images/home.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/pedido.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/profile.png')}
                style={styles.footerIcon}/>
            </TouchableOpacity>

            <TouchableOpacity>
                <Image source={require('./assets/images/menu.jpg')}
                style={styles.footerIcon}/>
            </TouchableOpacity>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itensCardapio: {
        backgroundColor: '#2d5e86',
        padding: 10,
        marginVertical: 16,
        marginHorizontal: 16,
        flexDirection: 'column',
        borderRadius: 20,
    },
    ImageBackground: {
        flex: 1,
        width: 393, 
        height: 590,
    },
    Logo: {
        height: 100,
        width: 100,
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
        marginTop: -25
    },
    header: {
        backgroundColor: 'white',
        alignItems: 'center',
        height: 100,
        paddingVertical: 5
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    nameText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        marginStart: 110,
        marginTop: -105
    },
    itensText: {
        fontSize: 15,
        fontWeight: '500',
        color: 'black',
        textAlign: 'left',
        marginStart: 110
    },
    precoText: {
        fontSize: 20,
        fontWeight: 'normal',
        color: 'black',
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
        width: 30,
        height: 30
    }
})

export default Cardapio;