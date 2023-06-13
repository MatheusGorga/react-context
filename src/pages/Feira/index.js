import {
  Container,
  Header,
  Lista,
} from './styles';
import feira from './feira.json';
import Produto from 'components/Produto';
<<<<<<< HEAD
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';
import NavBar from './NavBar';


function Feira() {
  const { nome, saldo = 0 } = useContext(UsuarioContext);
=======
import NavBar from './NavBar';
import { useContext } from 'react';
import { UsuarioContext } from 'commons/context/Usuarios';


function Feira() {
  const {nome, saldo} = useContext(UsuarioContext)
>>>>>>> teste11
  return (
    <Container>
      <NavBar />
      <Header>
        <div>
<<<<<<< HEAD
          <h2> Olá {nome}!</h2>
          <h3> Saldo: R${saldo.toFixed(2)}</h3>
=======
          <h2> Olá! {nome}</h2>
          <h3> Saldo: R$ {saldo}</h3>
>>>>>>> teste11
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(produto => (
          <Produto
            {...produto}
            key={produto.id}
          />
        ))}
      </Lista>
    </Container>
  )
}

export default Feira;