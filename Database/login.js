import axios from 'axios';
import { Alert } from 'react-native';
import CryptoJS from 'crypto-js';
import bcrypt from 'bcryptjs';

async function login(email, password, userType) {
  try {
    const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);
    const response = await axios.post('http://192.168.15.13:3000/login', { email, password: hash, userType });

    if (response.data.success) {
      const isValidPassword = await bcrypt.compare(password, response.data.user.password);
      if (isValidPassword) {
        console.log('Login feito:', response.data.user);
        return { success: true, message: 'Sucesso no Login', user: response.data.user };
      } else {
        return { success: false, message: 'Email ou Senha Inválidos' };
      }
    } else {
      return { success: false, message: response.data.message };
    }
  } catch (error) {
    console.error('Erro de Login:', error);
    Alert.alert('Erro', 'Falha ao processar o login. Verifique sua conexão ou tente novamente mais tarde.');
    throw error;
  }
}

export default login;
