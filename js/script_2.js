function criarMain ( ){
    const body      = document.querySelector("body");
    const cabecalho = document.createElement("header");
    const figure    = document.createElement("figure");

    cabecalho.classList.add     ("cabeca");
    figure.classList.add        ("logo");

    body.append             (cabecalho);
    cabecalho.appendChild   (figure);
}
criarMain()

function criarMenu( ) {

    const button_01 = document.querySelector("#button_01");
    const button_02 = document.querySelector("#button_02");
    const button_03 = document.querySelector("#button_03");
    const button_04 = document.querySelector("#button_04");

    //MENU E FILTROS
    // Todos Produtos
    button_01.addEventListener('click', function() {
        montarDados(produtos);
        somaTotal(produtos);
    })
    // Hortifruti
    function filtraHort (){ const filtrados = produtos.filter((produto) => {return produto.secao == 'Hortifruti'});
                return filtrados
    }
    button_02.addEventListener('click', function() {
        const produtoHort = filtraHort()
        
        montarDados(produtoHort)
        somaTotal(produtoHort);
    });
    // Panificadora
    button_03.addEventListener('click', function() {const prodPanif = produtos.filter(function filterPanif(produto){
        return produto.secao == "Panificadora";})
        montarDados(prodPanif);
        somaTotal(prodPanif); 
    })
    // Laticinios
    button_04.addEventListener('click', function() {const prodLatic = produtos.filter(function filterLatic (produto){
        return produto.secao == "Laticínio";
    })
    // buscar.addEventListener('input', function() {const pesqProd = produtos.filter(function  pesqProd(produto){
    // return produto.nome.length == input.value;})
    // montarDados(pesqProd);})
    montarDados(prodLatic);
    somaTotal(prodLatic);
})
    
}
criarMenu()

function somaTotal(produtos){
    let sum = 0
    for(let i = 0; i < produtos.length; i++){
        produtos[i].precosomaTudo += produtos[i].preco;
        const itenstotal = document.querySelector("valorTotal")
        sum += produtos[i].preco
    }

    const valorTotal = document.querySelector(".valorTotal");

    valorTotal.innerText= "R$ "+sum+",00";  
}
somaTotal(produtos)

function criarCard(item){
    //criando todos as tegs do card.
    const prodCar       = document.querySelector(".produtos");
    const card          = document.createElement("section");
    const imgCard       = document.createElement("figure");
    const img           = document.createElement("img")
    const infor         = document.createElement("div");
    const titulo        = document.createElement("p");
    const tipo          = document.createElement("p")
    const valorProduto  = document.createElement("p")

    //atribuindo classes pras tags.
    card.classList.add             ("card");
    imgCard.classList.add          ("imgCard");
    infor.classList.add            ("infor");
    titulo.classList.add           ("titulo");
    tipo.classList.add             ("tipo");
    valorProduto.classList.add     ("titulo");

    //atribuindo conteudo para tags.
    img.src                = item.img;
    img.alt                = item.titulo;
    titulo.innerHTML       = item.nome;
    tipo.innerHTML         = item.secao;
    valorProduto.innerHTML = `R$ ${item.preco},00`;

    //organização do card.
    card.append     (imgCard);
    imgCard.append  (img);
    infor.append    (titulo);
    infor.append    (tipo);
    infor.append    (valorProduto);
    card.append     (infor);
    prodCar.append  (card);
}

function tegProduto ( ){
    const main    = document.querySelector("main"); 
    const prodTeg = document.createElement("div")
    prodTeg.classList.add ("produtos")

    main.append (prodTeg);
}
tegProduto ( )

function rodaPe(){
    const body      = document.querySelector("body");
    const footer    = document.createElement("footer"); 
    const imgRodaPe = document.createElement("figure");
    const p         = document.createElement("p");

    footer.classList.add    ("rodape");
    imgRodaPe.classList.add ("imgRodaPe");

    p.innerHTML      = (`<strong>Contato:</strong> 3321 - 8181 ou 4002 - 8922 é o som do japoneis que vai da playstation 2`)

    body.append         (footer);
    footer.appendChild  (imgRodaPe);
    footer.appendChild  (p);
}
rodaPe()

function montarDados(produtos) {
    let sum = 0;

    const prodCar = document.querySelector(".produtos");

    prodCar.innerHTML = ''

    for(let i = 0; i < produtos.length;i++){
        sum += produtos[i].preco;
        const produto = produtos[i];
        
        criarCard(produto)
        
    }
    let valorFormatado = "R$ "+sum+",00";
}
montarDados(produtos);