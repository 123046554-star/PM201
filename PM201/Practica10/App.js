//Zona 1: Importación de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import MenuScreens from './Screens/MenuScreens';


//import { Component } from 'react';


//Zona 2: Main Lugar donde estan los componentes del screen
export default function App() {
  return (
  <MenuScreens></MenuScreens>
  );
}

//Zona 3: estilos y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',



  },
});
