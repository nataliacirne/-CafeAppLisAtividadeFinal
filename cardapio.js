//importar a constante itens do codigo dataset.js
import itens from './model/dataset.js';
//importar foodsModel do codigo foods.js
import foodsModel from './model/foods.js';
//carregar itens
foodsModel.load(itens);
//variavel foods que ler foodsModel
let foods = foodsModel.readAll();
//função que pega os itens do dataset.js e adiciona no html
function initFoodsCard () {
  //for de conclusão
  for (let item of foods) {
    //constante view que vai criar um carde dos itens
    const view = createFoodCardItem(item);
  
    //let itensCardapio = document.querySelector('.itens-cardapio');
    //variavel pra buscar o id 'itens-cardapio' em cardapio.html
    let itensCardapio = document.getElementById("itens-cardapio");
    //inserir itenscardapio antes de view
    itensCardapio.insertAdjacentHTML('beforeend', view);
  }
}
//função pra criar os cards
function createFoodCardItem (item) {
                    //codigo que vai pro html referente ao card
                                    //tamanho do card
                                    //imagem do card
                                    //titulo do card
                                    //descrição do card
    const view = `<div class="col-3 card my-1 mx-1 py-1">
                    <img src="${item.imagem}" class="card-img-top" alt="...">
  
                    <div class="card-body">
                      <h5 class="card-title">${item.nome}</h5>
                      <p class="card-text">${item.descricao}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>`;

    return view;
}


// Captar o evento de submissão do formulário e adicionar o item no cartão (card).
// const foodForm = document.querySelector('#foodForm');
//constante que vai pegar o elemento com id foodform
const foodForm = document.getElementById("foodForm");
//onsubmit vai atribuir a funçao
foodForm.onsubmit = function (event) {
  // Previnir que o modal fique abrindo e fechando em loop.
  event.preventDefault();
  //transformar uma lista de pares chave-valor em um objeto
  let newFood = Object.fromEntries(new FormData(foodForm));
  //cria um novo item
  foodsModel.create(newFood);
  //criar um card com o novo item
  const foodCard = createFoodCardItem(newFood);
  //variavel pra buscar o id 'itens-cardapio' em cardapio.html
  let itensCardapio = document.getElementById("itens-cardapio");
  //adiciona var = itenscardapio antes de foodcard
  itensCardapio.insertAdjacentHTML('beforeend', foodCard);
}
//chama a função
initFoodsCard();