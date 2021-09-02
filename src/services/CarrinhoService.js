const itensNoCarrinho = [];

const adicionarNoCarrinho = (p) => {
  itensNoCarrinho.push(p);
};

const getItensNoCarrinho = () => {
  return itensNoCarrinho;
};

module.exports = {
  adicionarNoCarrinho,
  getItensNoCarrinho
};