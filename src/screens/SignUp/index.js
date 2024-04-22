import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from "react-hook-form";

export default function SignUpScreen() {
  const navigation = useNavigation();

  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const { control, handleSubmit, formState: { errors } } = useForm({
    
  })

  const options = [
    { label: 'Estudante', value: 'Estudante' },
    { label: 'Motorista', value: 'Motorista' },
  ];

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (data) => {
    console.log(data)
    const email = data.email;
    const usernameFromEmail = email.substring(0, email.indexOf('@'));
    setUsername(usernameFromEmail);    
    Alert.alert('Cadastro realizado com sucesso', `Seu usuário de acesso é: ${usernameFromEmail}`);

};

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      <Controller
          name="userImage"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TouchableOpacity
              style={styles.imageButton}
              onPress={() => {
                // Adicione aqui a lógica para selecionar a imagem do usuário
              }}
            >
              <Ionicons name="person" size={68} color="#4051b2" />
            </TouchableOpacity>
          )}
        />
        <TouchableOpacity>
          <MaterialCommunityIcons name="camera" size={24} color="rgba(242, 242, 242, 0.5)" style={styles.icon}/>
          <Text style={styles.addImageText}>Adicionar imagem</Text>
        </TouchableOpacity>    
      </View>

      <View style={styles.containerForm}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Controller
            name="usuario"
            control={control}
            render={({ field: {onChange, onBlur, value} }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Nome"
                placeholderTextColor="#B4B4B8"
              />
            )}
          />
          <Controller
            name="telefone"
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Telefone"
                placeholderTextColor="#B4B4B8"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: {onChange, onBlur, value} }) => (
              <TextInput
                style={styles.input}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Email"
                placeholderTextColor="#B4B4B8"
              />
            )}
          />
          
          <View style={styles.passwordInputContainer}>
            <Controller
              name="senha"
              control={control}
              render={({ field: {onChange, onBlur, value} }) => (
                <TextInput
                  style={styles.passwordInput}
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Senha"
                  placeholderTextColor="#B4B4B8"
                  secureTextEntry={!showPassword}
                />
              )}
            /> 
            
            <TouchableOpacity style={styles.toggleButton} onPress={togglePasswordVisibility}>
              <MaterialCommunityIcons name={showPassword ? 'eye-off' : 'eye'} size={24} color="#B4B4B8" />
            </TouchableOpacity>
          </View>

          <Controller
            name="select"
            control={control}
            render={({ field }) => (
              <View style={styles.containerSelect}>
                {options.map((option, index) => (
                  <TouchableOpacity
                    key={index}
                    style={[
                      styles.option,
                      field.value === option.value && styles.selectedOption,
                    ]}
                    onPress={() => field.onChange(option.value)}
                  >
                    <Text style={{ color: field.value === option.value ? '#fff' : '#B4B4B8' }}>{option.label}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />

          <TouchableOpacity style={styles.button} onPress={ handleSubmit(handleSignUp) }>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </ScrollView>
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
  successMessage: {
    marginTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  successMessageText: {
    color: '#4051B2',
    fontSize: 16,
    textAlign: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 50,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.4
  },
  icon: {
    marginTop: -20,
    marginStart: 70,
  },
  addImageText: {
    color: 'white',
    marginTop: 10,
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
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordInput: {
    flex: 1,
    height: 50,
    paddingHorizontal: 15,
  },
  toggleButton: {
    padding: 10,
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
  containerSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginBottom: 15,
    backgroundColor: '#f2f2f2',
  },
  option: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  selectedOption: {
    borderRadius: 5,
    backgroundColor: '#4051b2',
    paddingVertical: 10,
  },
});
