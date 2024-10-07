import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import React, { Component } from 'react'
import LoginForm from './LoginForm'
import menu from '@/app/menu'
import AdminView from './AdminView'

export default function UserView() {
  

    return (
      <View style={styles.menuContainer}>
         
        <TouchableOpacity style={styles.cuadroIcono}>

            
                <Image source={require("@/assets/images/evaluation.png")} style={styles.icono} />
            

        <Text style={styles.texto}>Evaluacion en terreno</Text>
        </TouchableOpacity> 
        
      </View>
    )
  }


const styles = StyleSheet.create({
    menuContainer:{
        margin:20,
        marginTop: 40,
        backgroundColor:"white",
        borderRadius:20,
        width:"90%",
        height:"90%",
        padding:20,
        shadowColor:"#000",
        shadowOffset:{
            width:0,
            height:2,
        }
    },
    cuadroIcono:{
        
        width: "33%",  
        alignItems: "center",
        
        
    },
    icono:{
        
        marginTop: 20,
        marginLeft: 20,
        width: 60,
        height: 60,
        alignItems: "center",
        verticalAlign: "top",

        
    },
    texto:{
        
        textAlign: "center",
        width: "70%",
        marginLeft: 10,
    
    },

    opacity: {
        
    }

    
})