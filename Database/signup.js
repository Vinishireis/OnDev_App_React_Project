import axios from 'axios';

// Função de inscrição
async function signup(userData, tableName) {
  try {
    const response = await axios.post('http://172.20.10.10:3000/signup', {
      nome: userData.fullName,
      sobrenome: userData.surname,
      email: userData.email,
      password: userData.password,
      userType: tableName === 'tb_cadastro_developer' ? 'developer' : 'user',
    });
    console.log('Resposta do servidor:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro no Inscreva-se:', error.response ? error.response.data : error.message);
    return { success: false, message: 'Falha ao Registrar' };
  }
}

// Função para testar a conexão com o servidor
async function testarConexaoServidor() {
  try {
    const response = await axios.get('http://192.168.15.13:3000/testar-conexao');
    console.log('Resposta do servidor:', response.data);
  } catch (error) {
    console.error('Erro ao testar a conexão com o servidor:', error.response ? error.response.data : error.message);
  }
}

// Dados do usuário
const userDataDeveloper = { fullName: 'John Doe', surname: 'Developer', email: 'john.doe@example.com', password: '123456' };
const userDataUser = { fullName: 'Jane Doe', surname: 'User', email: 'jane.doe@example.com', password: 'abcdef' };

// Realiza a Conexão com o Banco de Dados
(async () => {
  await signup(userDataDeveloper, 'tb_cadastro_developer');
  await signup(userDataUser, 'tb_cadastro_users');
  testarConexaoServidor();
})();
