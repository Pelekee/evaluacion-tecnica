import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Link } from '@react-navigation/native';

export default function AdminView() {
  
//ARREGLAR ESTILOS EN DIFERENTES SISTEMAS.

    return (

        
                        
                    
      <View style={styles.menuContainer}>
        <View style={styles.cuadroIcono}>
            <TouchableOpacity /*onPress={GESTION_USUARIOS}*/ >
                <Image source={require("@/assets/images/Gestion-de-usuarios.png")} style={styles.icono} />
            </TouchableOpacity>
            <Text style={styles.texto}>Gestion de usuarios</Text>
        </View>  

        <View style={styles.cuadroIcono}>

            <TouchableOpacity /*onPress={EVALUACION_TERRENO}*/>
                <Image source={require("@/assets/images/evaluation.png")} style={styles.icono} />
            </TouchableOpacity>
            <Text style={styles.texto}>Evaluacion en terreno</Text>
            
        </View> 

        
      </View>
    )
  }


const styles = StyleSheet.create({
    menuContainer:{
        /*Platform.select({
            ios: {
              backgroundColor: 'red',
            },
            android: {
              backgroundColor: 'green',
            },
            default: {
              // other platforms, web for example
              backgroundColor: 'blue',
            },
          }),*/
        flexDirection: "row",
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
    
    }
});