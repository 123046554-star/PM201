//Zona 1: Importación de archivos y Componentes
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React, {useState} from 'react';
import TarjetasScreen from './TarjetasScreens';
import { Componente1 } from './Componente1';
import ComponentesNativosScreen from './ComponentesNativosScreens';
import SafeAreaScrollScreen from './SafeAreaScrollScreen';


//import { Component } from 'react';


//Zona 2: Main Lugar donde estan los componentes del screen
export default function App() {
    const [screen, setScreen]=useState('menu');
    switch (screen){
        case 'tarjetas':
            return <TarjetasScreen/>;
        case 'componente1':
            return <Componente1/>;
        case 'componentesNativos':
            return <ComponentesNativosScreen />;
        case 'safearea':
            return <SafeAreaScrollScreen />;
        case 'menu':
        default:
            return(
                <View>
                    <Text>Menu Practica</Text>
                    <Button title="practica Tarjetas" onPress={()=>setScreen('tarjetas')}/>
                    <Button title="practica Componente1" onPress={()=>setScreen('componente1')}/>
                    <Button title="Practica Componentes Nativos" onPress={() => setScreen('componentesNativos')}/>
                    <Button title="Practica SafeAreaView y ScrollView" onPress={() => setScreen('safearea')}/>
                </View>
            );
    } //switch
} //función

//Zona 3: estilos y posicionamiento 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center - row',
  },
});