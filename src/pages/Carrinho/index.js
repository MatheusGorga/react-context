import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import {    useMemo, useState } from 'react';
import { Container, Voltar, TotalContainer, PagamentoContainer} from './styles';
import { useCarrinhoContext } from 'commons/context/Carrinho';
import Produto from 'components/Produto';
import { useHistory } from 'react-router-dom';
import {  usePagamentoContext } from 'commons/context/Pagamento';
import { useUsuarioContext } from 'commons/context/Usuarios';

function Carrinho() {
  const history = useHistory();

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { carrinho, valorTotal, efetuarCompra } = useCarrinhoContext()
  const {tipoPagamento, formaDePagamento, mudarFormaPagamento} = usePagamentoContext()
  const {saldo = 0} = useUsuarioContext()

  const totalCarrinho = useMemo(()=> saldo -valorTotal, [saldo, valorTotal]);
  
  return (
    <Container>
      <Voltar 
        onClick={() => history.goBack()}
      />

      <h2>
        Carrinho
      </h2>


      {carrinho.map(produto => {
        return (
          <Produto
          {...produto} 
          key={produto.id}
        />
        )
      })}
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
        
          <Select
            value={formaDePagamento.id}
            onChange={(e) => mudarFormaPagamento(e.target.value)}
          >
            {tipoPagamento.map(item => {
              return (
                <MenuItem value={item.id} key={item.id}> 
                  {item.nome}
                </MenuItem>
              )
            })}

          </Select>
        
      </PagamentoContainer>
      <TotalContainer>
          <div>
            <h2>Total no Carrinho: </h2>
            <span>R$ {valorTotal.toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo: </h2>
            <span>R$ {Number(saldo).toFixed(2)}</span>
          </div>
          <div>
            <h2> Saldo Total: </h2>
            <span> R$ {totalCarrinho.toFixed(2)}</span>
          </div>
        </TotalContainer>
      <Button

        disabled={totalCarrinho < 0 || carrinho.length === 0}
        onClick={() => {
          efetuarCompra()
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
         Comprar
       </Button>
        <Snackbar
          anchorOrigin={
            { 
              vertical: 'top',
              horizontal: 'right'
            }
          }
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
        >
           <MuiAlert
            onClose={() => setOpenSnackbar(false)}
            severity="success"
          >
            Compra feita com sucesso!
          </MuiAlert>
        </Snackbar>
    </Container>
  )
}

export default Carrinho;