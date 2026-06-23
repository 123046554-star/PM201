import React from 'react';
import ActivityIndicatorDemo from '../components/ActivityIndicatorDemo';
import KeyboardAvoidingDemo from '../components/KeyboardAvoidingDemo';
import {
  ScrollView,
  StyleSheet
} from 'react-native';



export default function ComponentesNativosScreen() {

  return (
    <ScrollView style={styles.container}>

      <ActivityIndicatorDemo />

      <KeyboardAvoidingDemo/>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});