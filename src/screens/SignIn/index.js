import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

export default function SignInScreen({navigation}) {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#3b5998' />
      <View style={styles.header}>
        <Text style={styles.title}>Seja Bem-vindo(a)!</Text>
      </View>

      <View style={styles.form}>

        <TextInput 
          placeholder='Usuário'
          placeholderTextColor='#949292'
          style={styles.input}
        />
        <View>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#949292"
            secureTextEntry={!showPassword} 
            textContentType="password"
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)} 
            style={styles.passwordIcon}
          >
            <MaterialIcons
              name={showPassword ? 'visibility-off' : 'visibility'} 
              size={22}
              color="#949292"
            />
          </TouchableOpacity>
        </View> 
        <TouchableOpacity style={styles.fg}>
          <Text style={styles.fgText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signin}>
          <Text style={styles.signinText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.rg}>
          <Text style={styles.rgText}>Não possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.rgText2}>{' Registre-se'}</Text>
          </TouchableOpacity>
        </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b5998'
  },
  header: {
    marginTop: '15%',
    marginBottom: '14%',
    paddingStart: '5%'
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff'
  },
  form: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  input: {
    height: 42,
    marginBottom: 12,
    fontSize: 16,
    padding: 8,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  }, 
  passwordIcon: {
    position: 'absolute',
    right: 0,
    padding: 8,
  },
  fg: {
    alignSelf: 'flex-end',
  },
  fgText: {
    color: '#3b5998',
    fontSize: 16,
    fontWeight: 'bold'

  },
  signin: {
    marginTop: 40,
    backgroundColor: '#3b5998',
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42
  },
  signinText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  rg: {
    flexDirection: 'row',
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rgText: {
    color: '#949292',
    fontSize: 16,
  },
  rgText2: {
    color: '#3b5998',
    fontSize: 16,
    fontWeight: 'bold'
  }
});