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

const conexao = require('./config/custom-mssql');



app.get('/',function (req,resp) {
    var requisicao = new conexao.Request();

    requisicao.query("select top 4 * from dbo.PRODUTOS",
        function (codErro,RecordSet) {
        if(codErro)
            console.log("Erro no Banco de Dados: "+codErro);
        resp.render("paginas/home",{listaDeProd: RecordSet["recordset"]}
        );
    });


});



app.get('/sobre',function (req,resp) {
    var user = [{
        nome: "Lucas Traumer",
        email: "traumer@unicamp.br",
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
    var User = [{
        "nome":req.body.txtNome,
        "email":req.body.txtEmail,
        "msg":req.body.txtMensagem
    }
    ]
    resp.render("paginas/respContato",{contato:User})
});

app.get('/produto/compra/:id/:idH',function (req,resp) {
    var idProd = req.params.id;
    var idHorario = req.params.idH;

    global.Carrinho = global.Carrinho
        + "{idP"+idProd+",idP"+idHorario+"}";

    var carrinho = "["+global.Carrinho+"]";
    resp.render('paginas/lista',{Carrinho:carrinho});
})


app.listen(port, function (req,resp) {
    console.log("Servidor ativo em http://localhost:"+port)
});