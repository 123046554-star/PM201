//Zona 1: Importación de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Perfil} from '../components/Perfil';

//import { Component } from 'react';


//Zona 2: Main Lugar donde estan los componentes del screen
export default function App() {
  return (
    <View style={styles.container}>

      <Perfil style={styles.tarjetaVerde} nombre= "Dulce" carrera="Sistemas" materia =" Movil" cuatri="9"/>
      <Perfil style={styles.tarjetaRoja} nombre= "mmmm" carrera="Sistemas" materia =" Movil" cuatri="9"/>
      <Perfil style={styles.tarjetaRoja} nombre= "mmmm" carrera="Sistemas" materia =" Movil" cuatri="9"/>

      <StatusBar style="auto" /> 

    </View>
  );
}

//Zona 3: estilos y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',



    // Actividad
    justifyContent: 'space-evenly',
    flexDirection: 'row',


  },
  tarjetaVerde:{backgroundColor:'#6BCB77'},
  tarjetaRoja:{backgroundColor:'#FF6B6B'},
});
