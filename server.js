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

    requisicao.query("select top 9 * from dbo.PRODUTOS",
        function (codErro,RecordSet) {
        if(codErro)
            console.log("Erro no Banco de Dados: "+codErro);
        resp.render("paginas/home",{listaDeProd: RecordSet["recordset"]}
        );
    });


});
app.get('/carrinho',function (req,resp) {

});

app.get('/cadastro',function (req,resp) {
    resp.render('paginas/cadastro');
});
app.post('/cadastro',function (req,resp) {
    var requisicao = new conexao.Request();
   var user = [{
       "nome": req.body.txtNome,
       "sobreNome": req.body.txtSobreNome,
       "telefone": req.body.txtTelefone,
       "email": req.body.txtEmail,
       "endereco": req.body.txtEndereco,
       "saldo": req.body.txtSaldo,
       "avaliacao": req.body.txtAvaliacao
   }];
   var sql = "insert into dbo.CLIENTES values("+1+","+String(req.body.txtNome) +","+String(req.body.txtSobreNome)+","+String(req.body.txtTelefone)+","+
       String(req.body.txtEmail) + ","+ String(req.body.txtEndereco) + ","+Number(req.body.txtSaldo) + ","+req.body.txtAvaliacao+")";

   requisicao.query(sql,function(codErro,RecordSet){
            if(codErro)
                console.log("Erro: "+codErro)
       else
           resp.render("paginas/respCadastro");
   });
   //resp.render('paginas/respCadastro',{usuario:user});
});
app.get('/sobre',function (req,resp) {
    var user = [{
        nome: "Lucas Traumer",
        email: "traumer@unicamp.br",
        avatar: 'img/eu.jpeg'
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

app.get('/produtos',function (req,resp) {
    var requisicao = new conexao.Request();

    requisicao.query("select * from dbo.PRODUTOS",
        function (codErro,RecordSet) {
            if(codErro)
                console.log("Erro no Banco de Dados: "+codErro);
            resp.render("paginas/produtos",{listaDeProd: RecordSet["recordset"]}
            );
        });
    //resp.render('paginas/produtos');
});
app.get('/produtos/compra/:id/:idH',function (req,resp) {
    var idProd = req.params.id;
    var idHorario = req.params.idH;

    global.Carrinho = global.Carrinho
        + "{idP"+idProd+",idP"+idHorario+"}";

    var carrinho = "["+global.Carrinho+"]";
    resp.render('paginas/lista',{Carrinho:carrinho});
});

app.get('/produtos/:id?', function (request, response) {

    console.log("Request:" + request.params.id);
    var requisicao = new conexao.Request();
    var strSql = "select * from dbo.PRODUTOS ";
    strSql +=" where CODIGOPRODUTO = " + request.params.CODIGOPRODUTO;


    requisicao.query(strSql,
        function (codErro, RecordSet){
            if (codErro)
                console.log("Erro no Banco de Dados: " + codErro);
            else
                response.render("paginas/produtos",
                    { listaDeFilme: RecordSet["recordset"] }
                );

        })

    // response.render("paginas/filme")

})


app.listen(port, function (req,resp) {
    console.log("Servidor ativo em http://localhost:"+port)
});