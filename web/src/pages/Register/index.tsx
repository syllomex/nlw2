import React from "react";
import { useHistory } from "react-router-dom";

import { Container, FormContainer, Content, HeaderIcon } from "./styles";

import backIcon from "../../assets/images/icons/back.svg";

import Button from "../../components/Button";
import Banner from "../../components/Banner";
import InputGroup from "../../components/InputGroup";

const Register: React.FC = () => {
  const history = useHistory()

  return (
    <Container>
      <Banner />
      <FormContainer>
        <HeaderIcon>
          <img src={backIcon} alt="Voltar" onClick={() => history.push("/")} />
        </HeaderIcon>
        <Content>
          <h1>Cadastro</h1>
          <p>Preencha os dados abaixo para começar.</p>

          <InputGroup>
            <div>
              <input type="text" name="first_name" placeholder="Nome" />
            </div>
            <div>
              <input type="text" name="last_name" placeholder="Sobrenome" />
            </div>
            <div>
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Senha" />
            </div>
          </InputGroup>

          <Button type="button">Concluir cadastro</Button>
        </Content>
      </FormContainer>
    </Container>
  );
};

export default Register;
