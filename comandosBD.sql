create table dbo.PRODUTOS(
CODIGOPRODUTO int primary key,
NOMEPRODUTO varchar(100) not null,
MODELOPRODUTO varchar(100) not null,
MARCAPRODUTO varchar(100) not null,
DESCRICAOPRODUTO varchar(255) not null,
PRECO money not null,
AVALIACAO float 
)

drop table dbo.PRODUTOS
create table dbo.CLIENTES(
CODIGOCLIENTE int primary key,
NOMECLIENTE varchar(100) not null,
SOBRENOME varchar(100) not null,
TELEFONE varchar(15) not null,
EMAIL varchar(150) not null,
ENDERECO varchar(200) not null,
SALDO money ,
AVALIACAO float
)

create table dbo.VENDASPRODUTOS(
CODIGOVENDA int primary key,
CODIGOPRODUTO int not null,
CODIGOCLIENTE int not null,
DATAVENDA datetime not null,
DESCRICAOVENDA varchar(200) not null,
QUANTIDADEVENDIDA int not null,
constraint fkCodProd foreign key(CODIGOPRODUTO) references dbo.PRODUTOS(CODIGOPRODUTO),
constraint fkCodCliente foreign key(CODIGOCLIENTE) references dbo.CLIENTES(CODIGOCLIENTE)
)
-- Campos da tabela VENDAPRODUTO:
-- codigoVenda,codProduto,codCliente,dataVenda,Descricao venda,qtdProdVendido 

--Campos da Tabela ClientesNODE:
-- codCliente,NomeCliente,SobreNomeCLiente,Telefone,email,Endereco,saldo,Avaliacao 



-- Campos da Tabela PRODUTOSNODE:
-- codProd , NomeProd, ModeloProd,DescricaoProd,Preco e Avaliacao



select * from dbo.PRODUTOS


insert into dbo.PRODUTOS values(1,'GALAXY','S8','SAMSUNG','Poderos e Estiloso com seu Display Infinito e Resistente a Agua, o GALAXY S8 vem forte no Mercado',2000.0,4.8)
insert into dbo.PRODUTOS values(2,'Galaxy','Watch','Samsung','Estiloso e Pratico, o Galaxy watch além de ser muito util em atividades fisicas pode fazer conexao com outro Aparelhos da Samsung',2000.00,null)
insert into dbo.PRODUTOS values(3,'Iphone','XR','APPLE','Com o Luxo da Apple e poder da mesma o Iphone XR vem como uma das Grandes Promessas da Empresa',5000.00,4.8)
insert into dbo.PRODUTOS values(4,'ARDUINO','UNO','ARDUINO','Automatize e Aprenda programação sem gastar muito, o Arduino atualmente é um dos Maiores Contribuidores Open Source',150.0,4.5)
insert into dbo.PRODUTOS values(5,'Monitor Curvo','Curved Monitor LED 32','Samsung','Tela curva para uma experiência de visualização mais envolvente',1500.0,4.0)
insert into dbo.PRODUTOS values(6,'Plastation','Plastation 4','PLAYSTATION','Os maiores nomes do mundo dos jogos ganham vida no PS4, desde os famosos personagens de Star Wars™ Battlefront™ ll, até o tão aguardado Call of Duty: WWll',1800.0,4.5)
insert into dbo.PRODUTOS values(7,'Raspberry','RASPEBERRY 4','RASPBERRY PI','Um mini Computador do tamanho de uma Cartão de Credito, com um Processamento excelente pelo tamanho',300.0,5.0)
insert into dbo.PRODUTOS values(8,'XBOX','ONE','Microsoft','Um dos Consoles mais Populares do Mundo, com Diversos Jogos e Modelos a sua Espera',1500.0,4.8)