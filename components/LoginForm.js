import React, { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import appFirebase from "../credenciales";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {router} from "expo-router"
import { getReactNativePersistence } from '@firebase/auth/dist/rn/index.js';
import { Platform } from 'react-native';

const auth = getAuth(appFirebase);


export default function LoginForm(props) {

    //Variables de estado

    const [email, setEmail] = useState()
    const [password, setPassword] = useState();

    const login = async()=>{
        try{
            await signInWithEmailAndPassword(auth, email, password)
            
            if (Platform.OS == 'web'){

                window.alert("Iniciando sesion", "Accediendo...")
            
            }else{
                Alert.alert("Iniciando sesion", "Accediendo...")
            } 

            router.push("menu")   
                       
        } catch (error){
           
        
            console.log(error)
            
            if (Platform.OS == 'web'){
                
                window.alert("El usuario o la contraseña son incorrectos")
            
            }else{
                Alert.alert("Error","El usuario o la contraseña son incorrectos")
            } 
            
           
        }
    }
    

    
    return (
      <View style={styles.padre}>
           <View>
                <Image source={require("@/assets/images/logo-placeholder-image.png")} style={styles.profile}/>
            </View>

            <View style={styles.tarjeta}>

            <View style={styles.cajaTexto}>
                <TextInput placeholder="correo@gmail.com" style={{paddingHorizontal:15}}
                onChangeText={(text)=>setEmail(text)}/>
                </View>

                <View style={styles.cajaTexto}>
                <TextInput placeholder="Contraseña" style={{paddingHorizontal:15}} secureTextEntry={true}
                onChangeText={(text)=>setPassword(text)}/>
                </View>

                <View style={styles.padreBoton}>

                    <TouchableOpacity style={styles.cajaBoton} onPress={login}>
                        <Text style={styles.textoBoton}> Conectarse </Text>
                    </TouchableOpacity>

                </View>
            </View>
      </View>
    )

    
}

const styles = StyleSheet.create({
    padre:{
        flex:1,
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "white"
    },
    
    profile:{  
        width:150,
        height:150,
        borderRadius:50,
        borderColor: "white"
    },
    tarjeta:{
        margin:20,
        backgroundColor:"white",
        borderRadius:20,
        width:"90%",
        padding:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5,
    },

    cajaTexto:{
        paddingVertical:20,
        backgroundColor:"#cccccc40",
        borderRadius:30,
        marginVertical:10
    },

    padreBoton:{
        alignItems: "center"
    },

    cajaBoton:{
        backgroundColor:"#a533ff",
        borderRadius: 30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },

    textoBoton:{
        textAlign: "center",
        color:"white"
    }

});
