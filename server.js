const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(bodyParser.json());
app.use(cors()); // Adicione o uso do CORS aqui

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '@Vinishireis2005',
  database: 'login_new',
};

const connection = mysql.createConnection(dbConfig);

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database.');
});

app.get('/', (req, res) => {
  res.send('Servidor Express rodando. Rota raiz acessada com sucesso.');
});

app.get('/testar-conexao', (req, res) => {
  res.send('Conexão com o servidor estabelecida com sucesso.');
});

app.post('/signup', async (req, res) => {
  const { nome, sobrenome, email, password, userType } = req.body;
  const table = userType === 'developer' ? 'tb_cadastro_developer' : 'tb_cadastro_users';

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const sql = `INSERT INTO ${table} (nome, sobrenome, email, password) VALUES (?, ?, ?, ?)`;
    connection.execute(sql, [nome, sobrenome, email, hashedPassword], (err, results) => {
      if (err) {
        console.error('Error inserting data:', err.stack);
        res.status(500).json({ success: false, message: 'Erro ao registrar.' });
        return;
      }
      res.json({ success: true, message: 'Conta criada com sucesso.' });
    });
  } catch (error) {
    console.error('Error in signup:', error);
    res.status(500).json({ success: false, message: 'Erro ao registrar.' });
  }
});

app.post('/login', async (req, res) => {
  const { email, password, userType } = req.body;
  const table = userType === 'developer' ? 'tb_cadastro_developer' : 'tb_cadastro_users';

  const sql = `SELECT * FROM ${table} WHERE email = ?`;
  connection.execute(sql, [email], async (err, results) => {
    if (err) {
      console.error('Error fetching data:', err.stack);
      res.status(500).send('Erro ao fazer login.');
      return;
    }

    if (results.length > 0) {
      const user = results[0];
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (isValidPassword) {
        res.json({ success: true, user });
      } else {
        res.json({ success: false, message: 'Email ou senha inválidos' });
      }
    } else {
      res.json({ success: false, message: 'Email ou senha inválidos' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://172.20.10.10:${port}`);
});
