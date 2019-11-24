const express = require('express');
const faker = require('faker');
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 5000

app.set('view engine','ejs');

app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));

app.get('/',function (req,resp) {
    resp.render('paginas/home');
});
app.get('/sobre',function (req,resp) {
    var user = [{
        nome: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/300/300'
    },{
        nome: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/400/300'
    },{
        nome: faker.name.findName(),
        email: faker.internet.email(),
        avatar: 'http://placebear.com/500/300'
    }]
    resp.render('paginas/sobre',{
        usuarios:user
    }
    );
});

app.get('/contato',function (req,resp) {
    resp.render('paginas/contato')
});

app.post('/contato',function (req,resp) {
    resp.send('Obrigado por entrar em contato conosco, '+ req.body.txtNome+'! Responderemos em breve!');
});



app.listen(port, function (req,resp) {
    console.log("Servidor ativo em http://localhost:"+port)
});