import React from "react";
import { Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native'

export default function LoginForm() {
    return (
      <View style={styles.padre}>
           <View>
                <Image source={require("@/assets/images/logo-placeholder-image.png")} style={styles.profile}/>
            </View>

            <View style={styles.tarjeta}>

            <View style={styles.cajaTexto}>
                <TextInput placeholder="correo@gmail.com" style={{paddingHorizontal:15}}/>
                </View>

                <View style={styles.cajaTexto}>
                <TextInput placeholder="Contraseña" style={{paddingHorizontal:15}}/>
                </View>

                <View>

                    <TouchableOpacity style={{alignItems: 'center'}}>
                        <Text> Conectarse </Text>
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
    }
});
