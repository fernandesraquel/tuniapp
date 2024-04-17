import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { CheckBox } from '@rneui/themed';
import { MaterialIcons } from '@expo/vector-icons';

export default function SignUpScreen({navigation}) {

  const [checkBoxValue1, setCheckBoxValue1] = useState(false);
  const [checkBoxValue2, setCheckBoxValue2] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCheckBox1 = () => {
    setCheckBoxValue1(!checkBoxValue1);
    setCheckBoxValue2(false); 
  };

  const handleCheckBox2 = () => {
    setCheckBoxValue2(!checkBoxValue2);
    setCheckBoxValue1(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#3b5998' />
      <View style={styles.header}>
        <Text style={styles.title}>Preencha os campos</Text>
      </View>

      <View style={styles.form}>
        <TextInput 
        placeholder='Nome'
        placeholderTextColor='#949292'
        style={styles.input}
        />      
        <TextInput 
          placeholder='Tefelone'
          placeholderTextColor='#949292'
          style={styles.input}
        />
        <TextInput 
          placeholder='Email'
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
        <View style={styles.checkBox}>
          <CheckBox 
            title={'Estudante'}
            textStyle={{ color: '#949292'}}
            checkedColor='#3b5998'
            checked={checkBoxValue1}
            onPress={handleCheckBox1}
          />
          <CheckBox 
            title={'Motorista'}
            textStyle={{ color: '#949292'}}
            checkedColor='#3b5998'
            checked={checkBoxValue2}
            onPress={handleCheckBox2}
          />
        </View>

        <TouchableOpacity style={styles.signin}>
          <Text style={styles.signinText}>Salvar</Text>
        </TouchableOpacity>

        <View style={styles.rg}>
          <Text style={styles.rgText}>Possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
            <Text style={styles.rgText2}>{' Entrar'}</Text>
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
    display: 'flex',
    flexDirection: 'row'
  }, 
  passwordIcon: {
    position: 'absolute',
    right: 0,
    padding: 8,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
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