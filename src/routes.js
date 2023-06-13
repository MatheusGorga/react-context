import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from "commons/context/Usuarios";
import { CarrinhoProvider } from "commons/context/Carrinho";
import { PagamentoProvider } from "commons/context/Pagamento";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <UsuarioProvider>
          <Route exact path="/">
            <Login />
          </Route>

          <CarrinhoProvider>
            <Route path="/feira">
              <Feira />
            </Route>
            
            <PagamentoProvider>
              <Route path="/carrinho">
                <Carrinho />
              </Route>
            </PagamentoProvider>
            
          </CarrinhoProvider>
        </UsuarioProvider>

        
      </Switch>
    </BrowserRouter>
  );
}
