import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

export default function ItemListaProdutos({produto}) {
  const history = useHistory();

  const exibirDetalhe = () => {
    history.push(`/produto/${produto.id}`);
  };

  return (
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">{produto.nome}</h4>
        </div>
        <img src={produto.foto} class="card-img-top"/>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">R$ {produto.valor.toFixed(2)}</h1>
          <button 
            onClick={() => exibirDetalhe()}
            type="button" 
            class="w-100 btn btn-lg btn-outline-primary">
              Detalhe
          </button>
        </div>
      </div>
    </div>
  )
}
