import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState,useRef } from 'react';
import { Animated,View, Text,StyleSheet,Image,ScrollView,TouchableOpacity,TextInput,Alert } from 'react-native';
var firebase = require("firebase/app");
require("firebase/auth");
require("firebase/database");
import {auth} from '@react-native-firebase/auth';

export default function Cadastrar({navigation}){
    console.disableYellowBox = true;


    const [email, setEmail] = useState('');
    const [nome, setNome] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setconfirmarSenha] = useState('');
    
    const fadeAnim = useRef(new Animated.Value(0)).current;
    
    
    /*
    const login = ()=> {
        auth.signInWithEmailAndPassword(email,senha).then(function(val){
            console.log(val);
        }).catch(function(error){
            alert(error.message)
        })
        //Fazer chamada no back-end para cadastro
    } */   

    const cadastrar = ()=> {
        if(nome !== '' && email !== '' && senha !== '' ){
            auth().
            createUserWithEmailAndPassword(email,senha)
            .then(() => {
                Alert.alert('Informação','Usuário cadastrado com sucesso.');
            })
            .catch(() => {});
        }else{
            Alert.alert('Erro','Por favor, digite email e senha.');
        }
        
        //Fazer chamada no back-end para cadastro
    };    

    useEffect(()=>{

        Animated.timing(fadeAnim, {
            toValue:1,
            duration: 5000,
        }).start();

        /*
        let timeout = setTimeout(function(){
            Animated.timing(fadeAnim, {
                toValue:0,
                duration: 5000,
            }).start();
        },7000)
        */ 
    },[])
    
    
    return(
        <View style={styles.container}>
            <StatusBar hidden/>
            <Animated.View
                style={[
                {
                    alignItems: 'center',
                    justifyContent:'center',
                    width:'100%',
                    opacity: fadeAnim,
                }
            ]}>
            <Image style={styles.logo} source={{uri:'https://fgtp.com.br/public/uploads/clubes/m/lgootipo_5b76e0c85f7e6.png'}}/>
            <TextInput placeholder= 'Seu nome...'style={styles.TextInput} onChangeText={text=>setNome(text)} />
            <TextInput placeholder= 'Seu e-mail...' style={styles.TextInput} onChangeText={text=>setEmail(text)} />
            <TextInput secureTextEntry={true} placeholder= 'Sua senha...' style={styles.TextInput} onChangeText={text=>setSenha(text)} />

            <TouchableOpacity style={styles.btnCadastro}onPress={()=>cadastrar()}>
                <Text style={{color:'white',textAlign:'center'}}>CADASTRAR!</Text>
            </TouchableOpacity>
            </Animated.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#27282D',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
    },
    TextInput:{
        width:'100%',
        height:40,
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:10,
        marginBottom:10
    },
    btnCadastro:{
        width:'100%',
        height:40,
        backgroundColor:'#7b42f5',
        borderRadius:20,
        justifyContent:'center',
    },
    logo:{
        width:100,
        height:130,
        marginBottom:10
    }

});