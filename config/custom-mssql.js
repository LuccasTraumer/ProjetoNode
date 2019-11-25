
var mssql = require('mssql'); 
const config = { 
    user: 'BD19372',
    password: 'soad24136',
    server: 'regulus.cotuca.unicamp.br', 
    database: 'BD19372' };

mssql.connect(config) 
     .then(conexao => global.conexao = conexao) 
     .catch(erro => console.log(erro)); 
     
module.exports = mssql;