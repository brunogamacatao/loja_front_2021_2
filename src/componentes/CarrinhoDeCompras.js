import React, { useState, useEffect } from 'react';
import { getItensNoCarrinho } from '../services/CarrinhoService';

export default function CarrinhoDeCompras() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    setItens(getItensNoCarrinho());
  }, []);

  const renderItemCarrinho = (item) => {
    return (
      <li>{item.nome} - R$ {item.valor.toFixed(2)}</li>
    );
  };

  const calculaTotal = () => {
    let total = 0.0;

    itens.forEach(i => total += i.valor);

    return total;
  };

  return (
    <>
      <h1>Carrinho de Compras</h1>
      <ul>
        { itens.map(renderItemCarrinho) }
      </ul>
      <h3>Total: R$ {calculaTotal()}</h3>
    </>
  )
}
