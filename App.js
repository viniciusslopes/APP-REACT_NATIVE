import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';
import Title from './src/components/Title/title';
import Form from './src/components/Form/form'

export default function App() {
  return (
    <SafeAreaView style={styles.container}> 
      <View>
        <Title></Title>
        <Form></Form>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FA9A',
    paddingTop:50,
  },
});
