<<<<<<< HEAD
import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { UsuarioContext } from 'common/contexts/Usuario';
import {
  Input,
  InputLabel,
  InputAdornment 
} from '@material-ui/core';
=======
import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { UsuarioContext } from "commons/context/Usuarios";
import { useContext } from "react";
>>>>>>> teste11

function Login() {
  const history = useHistory();
  const { nome, setNome, saldo, setSaldo } = useContext(UsuarioContext);
<<<<<<< HEAD
  

  return (
    <Container>
      <Titulo>
        Insira o seu nome
      </Titulo>
      <InputContainer>
        <InputLabel>
          Nome
        </InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>
          Saldo
        </InputLabel>
        <Input
        value={saldo}
        type="number"
        onChange={event => setSaldo(Number(event.target.value))}
        startAdornment={
          <InputAdornment position="start">
            R$
          </InputAdornment>
        }
      />
      </InputContainer>
      <Button
        variant="contained"
        color="primary"
        disabled={nome.length < 4}
        onClick={() => history.push('/feira')}
=======
  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          type="number"
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          startAdornment={<InputAdornment position="start">R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        variant="contained"
        disabled={nome.length < 4 && saldo < 1}
        color="primary"
        onClick={() => history.push("/feira")}
>>>>>>> teste11
      >
        Avançar
      </Button>
    </Container>
<<<<<<< HEAD
  )
};

export default Login;
=======
  );
}

export default Login;
>>>>>>> teste11
