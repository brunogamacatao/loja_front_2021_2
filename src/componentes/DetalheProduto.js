import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getProdutoPorId } from '../services/ProdutosService';
import { adicionarNoCarrinho } from '../services/CarrinhoService';
import { useEffect, useState } from 'react';

export default function DetalheProduto() {
  const { id } = useParams();
  const history = useHistory();

  const [produto, setProduto] = useState({nome: '', valor: 0});

  useEffect(() => {
    setProduto(getProdutoPorId(id));
  }, []);

  const voltar = () => {
    history.push('/');
  };

  const comprar = () => {
    adicionarNoCarrinho(produto);
    history.push('/carrinho');
  };

  return (
    <>
      <img src={produto.foto}/>
      <h1>{produto.nome}</h1>
      <h3>R$ {produto.valor.toFixed(2)}</h3>
      <button className="btn" onClick={() => comprar()}>Comprar</button>
      <button className="btn" onClick={() => voltar()}>Voltar</button>
    </>
  )
}

