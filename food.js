/**
 * Carregar os itens de food do dataset para o LocalStorage.
 * @param {*} newFoods
 */
 function load(newFoods) {
    localStorage.setItem('foods-app:foods', JSON.stringify(newFoods));
  }
  
  /**
   * Ler todos os registros de food.
   * @returns json
   */
  function readAll() {
    //busca o item em localStorage
    const stringFood = localStorage.getItem('foods-app:foods');
    //retorna o json da variavel stringFood
    return JSON.parse(stringFood);
  }
  
  function nextId() {
    //variavel foods pra ler
    const foods = readAll();
    //Função retorno produz o elemento do novo Array
    const ids = foods.map((food) => food.id);
    //retorna o maior de um conjunto de expressões numericas
    const maxId = Math.max(...ids);
  
    return maxId + 1;
  }
  
  /**
   * Criar um novo registro de food
   * @param {*} food
   * @returns food
   */
  function create(food) {
    // retorna um nome de sequência especificado
    let id = nextId();
  
    food = { id: id, ...food };
  
    const foods = readAll();
  
    const newFoods = [...foods, food];
    //carregar newFoods
    load(newFoods);
  
    return food;
  }
  //exporta a função
  export default { load, readAll, create };