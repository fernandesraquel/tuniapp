import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ResetPasswordScreen() {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isCodeSent, setIsCodeSent] = useState(false);

  const sendVerificationCode = () => {
    const code = Math.floor(1000 + Math.random() * 9000);
    console.log('Código de verificação:', code);
    Alert.alert('Código de verificação enviado:', `Seu código de verificação é: ${code}`);
    setIsCodeSent(true);
  };

  const verifyCode = () => {
  
    if (verificationCode === '1234') {
      Alert.alert('Sucesso', 'Código de verificação válido. Redefina sua senha.');
      navigation.navigate('NewPassword');  
    } else {
      Alert.alert('Erro', 'Código de verificação inválido. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Redefinir Senha</Text>
        <Text style={styles.subtitle}>Por favor, siga as etapas</Text>
      </View>

      <View style={styles.containerForm}>
      <TextInput
        style={styles.input}
        placeholder="Número de telefone"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
        maxLength={14} 
        placeholderTextColor="#B4B4B8"
      />
      {isCodeSent ? (
        <>
          <TextInput
            style={styles.input}
            placeholder="Código de verificação"
            value={verificationCode}
            onChangeText={setVerificationCode}
            keyboardType="numeric"
            maxLength={4}
            placeholderTextColor="#B4B4B8"
          />
          <TouchableOpacity style={styles.button} onPress={verifyCode}>
            <Text style={styles.buttonText}>Verificar Código</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity style={styles.button} onPress={sendVerificationCode}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      )}
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
