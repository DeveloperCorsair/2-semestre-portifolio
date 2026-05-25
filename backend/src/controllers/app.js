const mysql = require('mysql2');

// Configurando a conexão do Mysql
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'henrique',
    database: 'portfolio'
});

// Testando a conexão
conexao.connect(function (erro) {
    if (erro) throw erro;
    console.log('Conexão efetuada com sucesso!');
})

module.exports(conexao);