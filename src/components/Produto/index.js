import { Container } from "./styles";
import { memo } from "react";
import { IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useCarrinhoContext } from "commons/context/Carrinho";

function Produto({ nome, foto, id, valor, unidade }) {
  const { carrinho, adicionarProduto } = useCarrinhoContext() ;
  const produtoNoCarrinho = carrinho.find(itemCarrinho => itemCarrinho.id === id)
  
  return (
    <Container>
      <div>
        <img src={`/assets/${foto}.png`} alt={`foto de ${nome}`} />
        <p>
          {nome} - R$ {valor?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton color="secondary">
          <RemoveIcon />
        </IconButton>
         
          {produtoNoCarrinho?.quantidade || 0}
          {console.log("reste")} 

        <IconButton onClick={() => adicionarProduto({ nome, foto, id, valor })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  );
}

export default memo(Produto);
