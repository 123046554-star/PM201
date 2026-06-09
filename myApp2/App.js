//Zona 1: Importación de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {Saludo} from './components/Saludo';
import {Saludos2} from './components/Saludos2';

//import { Component } from 'react';


//Zona 2: Main Lugar donde estan los componentes del screen
export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/wave.png')}/>

      <Saludo/>
      <Text>---------------------------</Text>
      <Text>Hola Mundo React Native</Text>
      <Text>---------------------------</Text>
      <Saludos2/>
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
    justifyContent: 'center',
  },
});
