import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import PaginaInicial from "./componentes/PaginaInicial";
import Rodape from "./componentes/Rodape";
import Topo from "./componentes/Topo";

import DetalheProduto from './componentes/DetalheProduto';
import CarrinhoDeCompras from './componentes/CarrinhoDeCompras';
import PaginaNaoEncontrada from './componentes/PaginaNaoEncontrada';
import { useEffect, useState } from 'react';
import { getProdutos } from './services/ProdutosService';

function App() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    setProdutos(getProdutos());
  }, []);

  return (
    <Router>
      <div className="principal">
        <Topo/>
        <Switch>
          <Route path="/" exact={true}>
            <PaginaInicial produtos={produtos}/>
          </Route>
          <Route path="/produto/:id">
            <DetalheProduto/>
          </Route>
          <Route path="/carrinho">
            <CarrinhoDeCompras/>
          </Route>
          <Route path="*">
            <PaginaNaoEncontrada/>
          </Route>
        </Switch>
        <Rodape/>
      </div>
    </Router>
  );
}

export default App;
