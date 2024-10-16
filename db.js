const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',     // ou o endereço do seu servidor MySQL
    user: 'seu_usuario',   // seu nome de usuário do MySQL
    password: 'sua_senha', // sua senha do MySQL
    database: 'seu_banco'  // o nome do banco de dados que você quer usar
});

// Conectando ao MySQL
connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL com sucesso!');
});

module.exports = connection;
