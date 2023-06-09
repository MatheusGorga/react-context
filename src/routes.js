import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { UsuarioProvider } from "commons/context/Usuarios";
import { CarrinhoProvider } from "commons/context/Carrinho";

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
          </CarrinhoProvider>
        </UsuarioProvider>

        <Route path="/carrinho">
          <Carrinho />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
