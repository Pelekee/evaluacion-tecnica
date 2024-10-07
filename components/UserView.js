import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default function UserView() {
  
    return (
      <View style={styles.menuContainer}>
        <Text>VISTA DE USUARIO</Text>
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
})