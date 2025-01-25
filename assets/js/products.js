const produtos = [
  {
    codigo: "2344",
    titulo: "Incensário",
    preco: "R$56,00",
    descricao: "Largura 6 cm. \nAltura 6 cm. \nComprimento 31 cm.",
    imagens: [
      "assets/images/incensario01.jpeg",
      "assets/images/incensario02.jpeg",
      "assets/images/incensario03.jpeg",
    ],
  },
  {
    codigo: "2345",
    titulo: "Flor de Lótus",
    preco: "R$115,00",
    descricao: "Diametro 10 cm. \nAltura 10 cm.",
    imagens: ["assets/images/flordelotus.jpeg"],
  },
  {
    codigo: "2346",
    titulo: "Esfera de Ametista",
    preco: "R$230,00",
    descricao: "Diamentro 8 cm.",
    imagens: ["assets/images/esferadeametista.jpeg"],
  },
];

const contanierProdutos = document.querySelector("#container-produtos");

produtos.forEach((produto) => {
  const carroselId = `carousel-${produto.codigo}`;
  let imagensHTML = "";
  produto.imagens.forEach((imagem, index) => {
    imagensHTML += `
        <div class="carousel-item ${index === 0 ? "active" : ""}">
            <img 
            src="${imagem}" 
            alt="${produto.titulo}" 
            class="d-block w-100" />
         </div>`;
  });

  const productHTML = `
    <div class="col-lg-4 col-md-4 all des">
                  <div class="product-item">

                    <!-- Carrossel de imagens -->
                    <div id="${carroselId}" class="carousel slide">

                      <div class="carousel-inner">
                        ${imagensHTML}
                      </div>

                      <!-- Controles do carrossel -->
                      <a
                        class="carousel-control-prev"
                        href="#${carroselId}"
                        role="button"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                      </a>
                      <a
                        class="carousel-control-next"
                        href="#${carroselId}"
                        role="button"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                      </a>
                    </div>

                    <!-- Conteúdo adicional -->
                    <div class="down-content">
                      <a><h4 class="titleProduct">${produto.titulo}</h4></a>
                      <h6 class="valor">${produto.preco}</h6>
                      <p>${produto.descricao}</p>
                      <p class="codig" style="visibility: hidden">${produto.codigo}</p>
                      <span>Saiba mais</span>
                      <a href="#" id="whatsapp-link${produto.codigo}">
                        <img
                          src="assets/images/whatsapp.png"
                          style="
                            width: 20px;
                            margin-right: auto;
                            cursor: pointer;
                          "
                      /></a>
                      </a>
                    </div>
                  </div>
                </div>  
  `;
  contanierProdutos.innerHTML += productHTML;
});

//parte de whatsapp
produtos.forEach((produto) => {
  var phoneNumber = "5519999999999";
  var message = "Olá, gostaria de saber mais sobre o produto, ";
  var cod = produto.codigo;
  var productTitle = produto.titulo;
  var price = produto.preco;

  var whatsappLink =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(
      message + productTitle + " [" + cod + "]" + " no valor " + price
    );

  const whatsappElement = document.getElementById(
    `whatsapp-link${produto.codigo}`
  );
  if (whatsappElement) {
    whatsappElement.setAttribute("href", whatsappLink);
  }
});

// final do whatsapp
