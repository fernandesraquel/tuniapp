import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Appbar } from 'react-native-paper';

const ChatScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header style={{ backgroundColor: '#4051b2' }} >
        <Appbar.Content title="Chat" />
      </Appbar.Header>
      <Text style={{ textAlign: 'center', marginTop: 20 }}>Conteúdo da tela de Chat</Text>
    </View>
  );
};

export default ChatScreen;