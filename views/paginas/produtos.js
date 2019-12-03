
<%- contentFor('body') %>

<!-- <div class="jumbotron text-center"> -->
<!-- DEFINIÇÃO DO CORPO DA PAGINA -->
<div class="container">
    <div class="card-deck">

        <nav class="nav-item dropdown float-left">
            <a class="nav-link dropdown-toggle " href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categorias
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="/cadastro">Eletronicos</a>
                <a class="dropdown-item" href="/login">Tenis</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Oculos</a>
            </div>
        </nav>

            <div class="card-group">
                <div class="card">
                    <% for (var i=0; i<3; i++){ %>
                    <img class="card-img-top" src="/img/alt/foto0<%=listaDeProd[i].CODIGOPRODUTO%>.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><%= listaDeProd[i].NOMEPRODUTO%>:<%=listaDeProd[i].MODELOPRODUTO%></h5>
                        <p class="card-text"><%=listaDeProd[i].DESCRICAOPRODUTO%>.</p>
                        <h5> R$ <%= listaDeProd[i].PRECO%></h5>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg">Comprar</button>
                    <%} %>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <% for (var i=3; i<6; i++){ %>
                    <img class="card-img-top" src="/img/alt/foto0<%=listaDeProd[i].CODIGOPRODUTO%>.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><%= listaDeProd[i].NOMEPRODUTO%>:<%=listaDeProd[i].MODELOPRODUTO%></h5>
                        <p class="card-text"><%=listaDeProd[i].DESCRICAOPRODUTO%>.</p>
                        <h5> R$ <%= listaDeProd[i].PRECO%></h5>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg">Comprar</button>
                    <%} %>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <% for (var i=6; i<9; i++){ %>
                    <img class="card-img-top" src="/img/alt/foto0<%=listaDeProd[i].CODIGOPRODUTO%>.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><%= listaDeProd[i].NOMEPRODUTO%>:<%=listaDeProd[i].MODELOPRODUTO%></h5>
                        <p class="card-text"><%=listaDeProd[i].DESCRICAOPRODUTO%>.</p>
                        <h5> R$ <%= listaDeProd[i].PRECO%></h5>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg">Comprar</button>
                    <%} %>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div class="card">
                    <% for (var i=9; i<12; i++){ %>
                    <img class="card-img-top" src="/img/alt/foto0<%=listaDeProd[i].CODIGOPRODUTO%>.png" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"><%= listaDeProd[i].NOMEPRODUTO%>:<%=listaDeProd[i].MODELOPRODUTO%></h5>
                        <p class="card-text"><%=listaDeProd[i].DESCRICAOPRODUTO%>.</p>
                        <h5> R$ <%= listaDeProd[i].PRECO%></h5>
                    </div>
                    <button type="button" class="btn btn-primary btn-lg">Comprar</button>
                    <%} %>
                    <div class="card-footer">
                        <small class="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>


    </div>
</div>