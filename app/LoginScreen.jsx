import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CryptoJS from 'crypto-js';
import axios from 'axios';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('user');
  const navigation = useNavigation();

  async function handleLogin() {
    try {
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('User Type:', userType);

      const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
      console.log('Hash:', hash);

      const response = await axios.post('http://192.168.15.13:3000/login', {
        email,
        password: hash,
        userType,
      });
      console.log('Login Response:', response.data);

      if (response.data.success) {
        const isValidPassword = true; // Aqui você precisa validar a senha corretamente
        console.log('Is Valid Password:', isValidPassword);

        if (isValidPassword) {
          console.log('Login feito:', response.data.user);
          navigation.navigate('Home');
        } else {
          Alert.alert('Erro', 'Email ou Senha Inválidos');
        }
      } else {
        Alert.alert('Erro', response.data.message || 'Erro desconhecido ao fazer login');
      }
    } catch (error) {
      console.error('Erro de Login:', error);
      Alert.alert('Erro', 'Falha ao processar o login. Verifique sua conexão ou tente novamente mais tarde.');
    }
  }
  const colorScheme = useColorScheme();

  const dynamicStyles = getDynamicStyles(colorScheme);
  return (
    <View style={dynamicStyles.container}>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      <LinearGradient
        colors={['#007bff', '#800080']}
        style={dynamicStyles.background}
      >
        <View style={dynamicStyles.formContainer}>
          <Text style={dynamicStyles.titleText}>Login</Text>
          <View style={dynamicStyles.form}>
            <TextInput
              placeholder='Email'
              placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
              style={dynamicStyles.input}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <View style={dynamicStyles.passwordInput}>
              <TextInput
                placeholder='Password'
                placeholderTextColor={colorScheme === 'dark' ? 'lightgray' : 'gray'}
                secureTextEntry={!showPassword}
                style={[dynamicStyles.input, dynamicStyles.passwordField]}
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={dynamicStyles.eyeIcon}>
                <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={24} color='white' />
              </TouchableOpacity>
            </View>
            {/* Botões para selecionar o tipo de usuário */}
            <View style={dynamicStyles.userTypeContainer}>
              <TouchableOpacity
                style={[dynamicStyles.userTypeButton, userType === 'user' && dynamicStyles.activeUserTypeButton]}
                onPress={() => setUserType('user')}
              >
                <Text style={dynamicStyles.userTypeButtonText}>Usuário</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[dynamicStyles.userTypeButton, userType === 'developer' && dynamicStyles.activeUserTypeButton]}
                onPress={() => setUserType('developer')}
              >
                <Text style={dynamicStyles.userTypeButtonText}>Desenvolvedor</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={dynamicStyles.loginButton} onPress={handleLogin}>
              <Text style={dynamicStyles.loginButtonText}>Login</Text>
            </TouchableOpacity>
            <View style={dynamicStyles.signUpContainer}>
              <Text style={dynamicStyles.noAccountText}>Não possui uma conta?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={dynamicStyles.signUpLinkText}>Inscreva-se</Text>
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
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    color: colorScheme === 'dark' ? 'white' : 'black',
    backgroundColor: colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: 'white',
  },
  passwordInput: {
    position: 'relative',
  },
  passwordField: {
    paddingRight: 48,
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
    backgroundColor: '#333333',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    flex: 1,
    alignItems: 'center',
  },
  activeUserTypeButton: {
    backgroundColor: '#007bff',
  },
  userTypeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    top: 18,
  },
});
