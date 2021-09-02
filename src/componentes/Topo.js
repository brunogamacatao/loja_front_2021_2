import { Link } from "react-router-dom";

function Topo() {
  return (
    <header>
      <div>
        <span>Minha Loja</span>
        <nav>
          <Link to="/">Início</Link>
          <Link to="/carrinho">Carrinho</Link>
        </nav>
      </div>
    </header>
  );
}

export default Topo;