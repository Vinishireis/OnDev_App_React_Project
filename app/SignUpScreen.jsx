import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CryptoJS from 'crypto-js';
import axios from 'axios';

export default function SignupScreen() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('user');
  const navigation = useNavigation();

  class MissingField extends Error {
    constructor(field) {
      super(`Campo obrigatório "${field}" não preenchido.`);
    }
  }

  class InvalidEmail extends Error {
    constructor() {
      super('Email inválido.');
    }
  }

  class RegistrationError extends Error {
    constructor(message) {
      super(message);
    }
  }

  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }


  //Handle Coniguration Name/Undername/Email/Password

  async function handleCadastro() {
    try {
      // Verificar campos obrigatórios e validade do email...
      if (!nome || !sobrenome || !email || !password || password.length < 6) {
        throw new MissingField('nome ou sobrenome ou email ou password');
      }
  
      if (!validateEmail(email)) {
        throw new InvalidEmail();
      }
  
      const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
      const response = await axios.post('http://172.20.10.10:3000/signup', {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        password: hash,
        userType: userType
      });
  
      if (response && response.data && response.data.success) {
        Alert.alert('Sucesso', 'Conta criada com sucesso', [
          { 
            text: 'OK',
            onPress: () => {
              navigation.navigate('Login');
            }
          }
        ]);      
      } else if (response && response.data && response.data.message) {
        throw new RegistrationError(response.data.message || 'Erro desconhecido ao criar conta');
      } else {
        throw new RegistrationError('Erro desconhecido ao criar conta');
      }
    } catch (error) {
      if (error instanceof MissingField || error instanceof InvalidEmail) {
        Alert.alert('Erro', error.message);
      } else if (error instanceof RegistrationError) {
        Alert.alert('Erro', error.message);
      } else if (error.response && error.response.status === 404) {
        console.error('Erro 404:', error);
        Alert.alert('Erro', 'Falha ao processar o cadastro. Verifique a sua conexão ou tente novamente mais tarde.');
      } else {
        console.error('Erro inesperado:', error);
        Alert.alert('Erro', 'Falha ao processar o cadastro. Tente novamente mais tarde.');
      }
    }
  }
  

  const colorScheme = useColorScheme();
  const dynamicStyles = getDynamicStyles(colorScheme);

  return (
    <View style={dynamicStyles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <LinearGradient
      colors={['#007bff', '#800080']}
      style={[dynamicStyles.background, { backgroundColor: 'white' }]}
      >
        <View style={dynamicStyles.formContainer}>
          <View style={dynamicStyles.titleContainer}>
            <Text style={dynamicStyles.titleText}>Inscreva-se</Text>
          </View>
          <View style={dynamicStyles.form}>
            <View style={dynamicStyles.inputContainer}>
              <TextInput
                placeholder='Nome'
                placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
                style={dynamicStyles.input}
                value={nome}
                onChangeText={setNome}
              />
            </View>
            <View style={dynamicStyles.inputContainer}>
              <TextInput
                placeholder='Sobrenome'
                placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
                style={dynamicStyles.input}
                value={sobrenome}
                onChangeText={setSobrenome}
              />
            </View>
            <View style={dynamicStyles.inputContainer}>
              <TextInput
                placeholder='Email'
                placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
                style={dynamicStyles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
            <View style={dynamicStyles.inputContainer}>
              <TextInput
                placeholder='Senha'
                placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
                secureTextEntry={!showPassword}
                style={dynamicStyles.input}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={dynamicStyles.eyeIcon}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color='white' />
              </TouchableOpacity>
            </View>
            <View style={dynamicStyles.userTypeContainer}>
              <TouchableOpacity
                style={[dynamicStyles.userTypeButton, userType === 'user' ? dynamicStyles.activeUserTypeButton : null]}
                onPress={() => setUserType('user')}
              >
                <Text style={dynamicStyles.userTypeButtonText}>Usuário</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[dynamicStyles.userTypeButton, userType === 'developer' ? dynamicStyles.activeUserTypeButton : null]}
                onPress={() => setUserType('developer')}
              >
                <Text style={dynamicStyles.userTypeButtonText}>Desenvolvedor</Text>
              </TouchableOpacity>
            </View>
            <View style={dynamicStyles.loginButtonContainer}>
              <TouchableOpacity style={dynamicStyles.loginButton} onPress={handleCadastro}>
                <Text style={dynamicStyles.loginButtonText}>Cadastro</Text>
              </TouchableOpacity>
            </View>
            <View style={dynamicStyles.signUpContainer}>
              <Text style={dynamicStyles.noAccountText}>Já possui uma conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={dynamicStyles.signUpLinkText}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const getDynamicStyles = (colorScheme) => StyleSheet.create({
  container: {
    backgroundColor: colorScheme === 'dark' ? 'black' : 'white',
    flex: 1,
  },
  background: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
  },
  form: {
    width: '80%',
  },
  inputContainer: {
    backgroundColor: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    color: colorScheme === 'dark' ? 'white' : 'black',
    flex: 1,
  },
  eyeIcon: {
    padding: 8,
  },
  loginButtonContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#00aaff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  noAccountText: {
    color: 'white',
  },
  signUpLinkText: {
    color: '#00aaff',
    marginLeft: 4,
  },
  userTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  userTypeButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'white',
    marginHorizontal: 8,
  },
  activeUserTypeButton: {
    backgroundColor: 'rgba(0, 170, 255, 0.3)',
  },
  userTypeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});
