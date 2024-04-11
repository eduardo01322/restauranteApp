import React, { useState } from "react";
import { Image, ImageBackground, ScrollView, StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import { Text, TextInput } from "react-native-paper";
import axios from "axios";

const Cliente: React.FC = () => {
    const [clientes, setClientes] = useState<ClienteAtv[]>([]);
    const [nome, setNome] = useState<string>('');
    const [telefone, setTelefone] = useState<string>('');
    const [endereco, setEndereco] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cpf, setCpf] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [foto, setFoto] = useState<any>('');
    const[errors, setErrors]=useState<any>("");

    const cadastrarCliente = async () => {
        try{
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('telefone', telefone);
        formData.append('endereco', endereco);
        formData.append('email', email);
        formData.append('cpf', cpf);
        formData.append('password', password);
        formData.append('foto', {uri: foto, 
            type: 'foto/jpeg', name: new Date() + '.jpg'
        });

        const response = await axios.post('http://10.137.11.213:8000/api/clientes/restaurante', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }            
        });
    }  catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                console.log(error);
            }
        }
    }

    const renderError = (name: string) => {
        if (errors[name]) {
            return (
                <Text style={styles.textError}>{errors[name][0]}</Text>
            );
        }
        return null;
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
            <ScrollView>
            <View style={styles.header}>
            <ImageBackground source={require('../assets/images/headerFundo.jpg')} 
        style={styles.ImageBackgroundHeader}/>
            <Image source={require('../assets/images/logo.png')} 
            style={styles.Logo}/>
                <Text style={styles.headerText}>Cadastro Cliente</Text>
            </View>

            <ImageBackground source={require('../assets/images/fundo2.jpg')} 
            style={styles.ImageBackground}>

            <View style={styles.alinhamentoFotoSelecionada}>
            <TouchableOpacity style={styles.fotoButton} onPress={abrirCamera}>
            <Image source={require('../assets/images/userAdd.png')}
            style={styles.icon}/>
                    {foto ? <Image source={{ uri: foto }} style={styles.fotoSelecionada} /> : null} 

            </TouchableOpacity>
            {renderError('foto')}
            <TouchableOpacity style={styles.fotoButton} onPress={selecionarImagem}>
                    <Text style={styles.fotoButtonText}>selecionar imagem</Text>
                </TouchableOpacity>
                {renderError('foto')}
            </View>

            <View style={styles.input}>
                <TextInput style={styles.input2} placeholder="nome"
                value={nome} onChangeText={setNome}/> 
                {renderError('nome')}
                </View>

                <View style={styles.input}>
                <TextInput style={styles.input2} placeholder="telefone"
                value={telefone} onChangeText={setTelefone}/> 
                {renderError('telefone')}
                </View>
                
                <View style={styles.input}>
                <TextInput style={styles.input2} placeholder="endereco"
                value={endereco} onChangeText={setEndereco} /> 
                {renderError('endereco')}
                </View>
                
                <View style={styles.input}>
                <TextInput style={styles.input2} placeholder="email"
                value={email} onChangeText={setEmail} /> 
                {renderError('email')}
                </View>
                
                <View style={styles.input}>
                <TextInput style={styles.input2} placeholder="cpf"
                value={cpf} onChangeText={setCpf} /> 
                {renderError('cpf')}
                </View>

                <View style={styles.input}>
                <TextInput style={styles.input2} placeholder="senha"
                value={password} onChangeText={setPassword} /> 
                {renderError('password')}
                </View>

                <TouchableOpacity style={styles.button} onPress={cadastrarCliente}>
                    <Text style={styles.buttonText}>Cadastrar cliente</Text>
                </TouchableOpacity>
            </ImageBackground>
            </ScrollView>
        </View>
    );
}
    const styles = StyleSheet.create({
        container: {
            flex: 1
        },
        ImageBackgroundHeader: {
            flex: 1,
            width: 413, 
            height: 300,
            marginTop: -30
        },
        ImageBackground: {
            flex: 1,
            width: 393, 
            height: 750,
            marginVertical: -20,
            marginTop: 150,
        },
        Logo: {
            height: 100,
            width: 100,
            marginTop: 20,
        },
        header: {
            alignItems: 'center',
            height: 10,
        },
        headerText: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
            marginTop: -15
        },
        input: {
            backgroundColor: "white",
            height: 40,
            paddingVertical: 10,
            marginBottom: 15,
            paddingHorizontal: 4,
            borderRadius: 20,
            marginTop: 5
        },
        input2: {
            backgroundColor: "white",
            height: 30,
            marginBottom: 10,
            paddingHorizontal: 10,
            borderRadius: 20,
            marginTop: -1
        },
        fotoButton: {
            alignItems: 'center',
            marginTop: -30,
        },
        fotoButtonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        fotoSelecionada: {
            marginTop: -158,
            width: 115,
            height: 115,
            borderRadius: 200,
            marginBottom: 30,
        },
        alinhamentoFotoSelecionada: {
            alignItems: 'center',
            marginBottom: 15
        },
        button: {
            backgroundColor: 'red',
            padding: 10,
            borderRadius: 20,
            alignItems: 'center'
        },
        buttonText: {
            color: 'white',
            fontWeight: 'bold'
        },
        icon: {
            width: 140,
            height: 140,
            alignItems: 'center',
            resizeMode: 'cover',
            borderRadius: 200,
            marginBottom: 20,
        },
        textError: {
            color: 'red',
            marginLeft: 15,
            marginVertical: 10,
            fontSize: 15,
        },
    });

export default Cliente;