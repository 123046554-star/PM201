import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

export default function ActivityIndicatorDemo() {

  const [loading, setLoading] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        ActivityIndicator
      </Text>

      <Button
        title="Mostrar/Ocultar Spinner"
        onPress={() => setLoading(!loading)}
      />

      <ActivityIndicator
        size="large"
        color="blue"
        animating={loading}
      />

      <Text>
        Estado actual: {loading ? 'Cargando' : 'Detenido'}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:20,
    alignItems:'center'
  },
  titulo:{
    fontSize:20,
    marginBottom:20
  }
});