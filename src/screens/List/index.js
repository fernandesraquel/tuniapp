import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Appbar, Avatar } from 'react-native-paper';

export default function HomeScreen() {
  const navigation = useNavigation();

  const userName = 'Raquel Lima';
  const userPhotoUrl = 'https://i.pinimg.com/564x/ce/f9/ee/cef9ee14c1dd58e973bf42a19720d5f4.jpg';

  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#4051b2' }}>
        
        <View style={{ flexDirection: 'row', alignItems: 'center'}}>
          <Avatar.Image size={40} source={{ uri: userPhotoUrl }} />
          <Text style={{ marginLeft: 10, color: '#fff' }}>{userName}</Text>
        </View>

        
        <View style={{ position: 'absolute', right: 0 }}>
          <Appbar.Action
            icon={({ size }) => (
              <MaterialCommunityIcons name="calendar" color='#fff' size={size} />
            )}
            onPress={() => {
              
              console.log('Ícone do calendário pressionado');
            }}
          />
        </View>
      </Appbar.Header>

      {/* Conteúdo da tela Home */}
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Conteúdo da tela Home</Text>
    </View>
  );
}
