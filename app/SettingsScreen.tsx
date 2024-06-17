import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Configurações</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',  // Adicionando uma cor de fundo para garantir visibilidade
  },
  text: {
    fontSize: 20,
    color: '#000',  // Adicionando uma cor para o texto
  },
});
