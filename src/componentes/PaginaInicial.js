import React from 'react'
import ItemListaProdutos from './ItemListaProdutos'

export default function PaginaInicial({produtos}) {
  const renderItemLista = (p) => {
    return (
      <ItemListaProdutos produto={p}/>
    );
  };

  return (
    <main>
      <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        { produtos.map(renderItemLista) }
      </div>
    </main>
  )
}
