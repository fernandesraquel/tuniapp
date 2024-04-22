import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#4051b2' }}>
        <Appbar.Content title="Perfil do Usuário" />
      </Appbar.Header>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Conteúdo da tela de Perfil</Text>
    </View>
  );
};

export default ProfileScreen;