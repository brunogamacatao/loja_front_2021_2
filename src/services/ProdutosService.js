const produtos = [
  {id: 0, nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'},
  {id: 1, nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'},
  {id: 2, nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'},
  {id: 3, nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'},
  {id: 4, nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'},
  {id: 5, nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'},
  {id: 6, nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'},
  {id: 7, nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'},
  {id: 8, nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'},
  {id: 9, nome: 'Feijoada', valor: 29.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/002/998/355811/355811_original.jpg?mode=crop&width=710&height=400'},
  {id: 10, nome: 'Bolo', valor: 19.99, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/048/083/329518/329518_original.jpg?mode=crop&width=710&height=400'},
  {id: 11, nome: 'Batata Frita', valor: 12.00, foto: 'https://img.itdg.com.br/tdg/images/recipes/000/018/897/164773/164773_original.jpg?mode=crop&width=710&height=400'},
];

const getProdutos = () => {
  return produtos;
};

const getProdutoPorId = (id) => {
  return produtos[parseInt(id)];
};

module.exports = {
  getProdutos,
  getProdutoPorId
};