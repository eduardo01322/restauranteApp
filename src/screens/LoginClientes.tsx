import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Text, TextInput } from "react-native-paper";
import axios from "axios";

const CadastroCliente: React.FC = () => {
    const [clientes, setClientes] = useState<Cliente[]>([]);
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [foto, setFoto] = useState<any>('');

    const cadastrarProduto = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('endereco', endereco);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('foto', {uri: foto, 
            type: 'foto/jpeg', name: new Date() + '.jpg'
        });

        const response = await axios.post('http://10.137.11.213:8000/api/clientes', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }            
        });
    } catch(error) {
        console.log(error);
    }
    }

    const abrirCamera = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight:  2000,
            maxWidth: 2000
        };

        launchCamera(options, response => {
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            } else if(response.error){
                console.log('erro ao abrir a camera');
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                setFoto(imageUri);
                console.log(imageUri);
            }
            
        });
    }

    const selecionarImagem = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight:  2000,
            maxWidth: 2000
        };

        launchImageLibrary(options, (response)=>{
            if(response.didCancel){
                console.log('cancelado pelo usuario');
            } else if(response.error){
                console.log('erro ao abrir a galeria');
            } else {
                let fotoUri = response.uri || response.assets?.[0]?.uri;
                setFoto(fotoUri);
                
            }
        })
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black" barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.headerText}>Cadastro Cliente</Text>
            </View>
            <Image source={require('../assets/imagesCadastro/perfil.png')}
            style={styles.Logo}/>
            <View style={styles.form}>
            <View style={styles.alinhamentoFotoSelecionada}>
                    {foto ? <Image source={{ uri: foto }} style={styles.fotoSelecionada} /> : null}
                </View>

                <TextInput style={styles.input} placeholder="nome"
                value={nome} onChangeText={setNome}/>

                <TextInput style={styles.input} placeholder="telefone"
                value={telefone} onChangeText={setTelefone}/>

                <TextInput style={styles.input} placeholder="endereco"
                value={endereco} onChangeText={setEndereco} />

                <TextInput style={styles.input} placeholder="email"
                value={email} onChangeText={setEmail} />

                <TextInput style={styles.input} placeholder="senha"
                value={password} onChangeText={setPassword} />

                <TouchableOpacity style={styles.fotoButton} onPress={selecionarImagem}>
                    <Text style={styles.fotoButtonText}>selecionar imagem</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.fotoButton} onPress={abrirCamera}>
                    <Text style={styles.fotoButtonText}>Tirar foto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={cadastrarProduto}>
                    <Text style={styles.buttonText}>Cadastrar cliente</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        header: {
            backgroundColor: 'red',
            paddingVertical: 10,
            alignItems: 'center'
        },
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
        },
        form: {
            padding: 10,
            backgroundColor: '#f0f0f0',
            marginBottom: 10
        },
        input: {
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 10
        },
        fotoButton: {
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
            marginBottom: 10
        },
        fotoButtonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        fotoSelecionada: {
            width: 150,
            height: 150,
            resizeMode: 'cover',
            borderRadius: 200,
            marginBottom: 20,
        },
        alinhamentoFotoSelecionada: {
            alignItems: 'center'
        },
        button: {
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center'
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        Logo: {
            width: 150,
            height: 150,
            resizeMode: 'cover',
            borderRadius: 200,
            marginBottom: 20,
        },
    });

export default CadastroCliente;