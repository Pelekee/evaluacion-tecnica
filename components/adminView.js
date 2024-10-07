import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'
import { Link } from '@react-navigation/native';

export default function AdminView() {
  
    return (
      <View style={styles.menuContainer}>
        <View style={styles.cuadroIcono}>
            <Image source={require("@/assets/images/Gestion-de-usuarios.png")} style={styles.icono} />
            <Text style={styles.texto}>Gestion de usuarios</Text>
            
        </View>  
        
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
        width: "30%",

    },
    icono:{
        marginTop: 20,
        marginLeft: 20,
        width: 60,
        height: 60,
        
    },
    texto:{
        
        textAlign: "center",
    }
});