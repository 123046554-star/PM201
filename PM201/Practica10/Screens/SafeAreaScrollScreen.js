import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, Text, Button } from 'react-native';

export default function App() {

  //estado de almacena la lissta de tareas
  const [tareas, setTareas] = useState([
    'Ir al gimnasio',
    'Asistir a clases',
    'Pasar lista en el charlees',
    'Ver a la novia',
    'Dormir temprano'
  ]);

  //Agregar una nueva tarea
  const agregarTarea = () => {
    setTareas([ ...tareas, `Nueva tarea ${tareas.length + 1}`]);
  };

  return (

    //Mantiene el contenido dentro de su area de la pantalla
    <SafeAreaView style={{ flex: 1 }}>

      <Button title="Agregar tarea" onPress={agregarTarea} />
      {/* Permite desplazarse cuando el contenido es mayor que la pantalla */}
      <ScrollView contentContainerStyle={{ padding: 30}}>
        {/* Recorre el arreglo de tareas y las muestra en pantalla */}
        {tareas.map((tarea, index) => (
          <View key={index} style={{ marginBottom: 10, padding: 15, backgroundColor: '#ddd'}}>
            <Text>{tarea}</Text>
          </View>
        ))}
      </ScrollView>

    </SafeAreaView>
  );
}