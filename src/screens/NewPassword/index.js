import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function NewPasswordScreen() {
  const navigation = useNavigation();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    
    if (newPassword === confirmPassword) {
      Alert.alert('Sucesso', 'Senha redefinida.');
      navigation.navigate('SignIn');
    } else {
      alert('As senhas não coincidem. Por favor, tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Digite sua nova senha</Text>
      </View>

      <View style={styles.containerForm}>
        <TextInput
          style={styles.input}
          placeholder="Nova Senha"
          secureTextEntry
          value={newPassword}
          onChangeText={setNewPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirmar Senha"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
          <Text style={styles.buttonText}>Redefinir Senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4051b2',
    justifyContent: 'center'
  },
  containerTitle: {
    backgroundColor: '#4051b2',
    paddingStart:20,
    paddingVertical: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
  },
  containerForm: {
    flex: 8,
    backgroundColor: '#fff',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 20,
  },
  input: {
    height: 50,
    backgroundColor: '#f2f2f2',
    marginBottom: 20,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  button: {
    height: 50,
    backgroundColor: '#4051B2',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});