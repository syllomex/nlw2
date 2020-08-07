import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  FormContainer,
  Content,
  Options,
  Checkbox,
  Footer,
} from "./styles";

import purpleHeartIcon from "../../assets/images/icons/purple-heart.svg";
import checkedIcon from "../../assets/images/icons/checked.svg";

import Button from "../../components/Button";
import Banner from "../../components/Banner";
import InputGroup from "../../components/InputGroup";

const Login: React.FC = () => {
  const [remember, setRemember] = useState(false);

  return (
    <Container>
      <Banner />
      <FormContainer>
        <Content>
          <h1>Fazer login</h1>
          <InputGroup>
            <div>
              <input type="email" name="email" placeholder="E-mail" />
            </div>
            <div>
              <input type="password" name="password" placeholder="Senha" />
            </div>
          </InputGroup>

          <Options>
            <div>
              <Checkbox
                checked={remember}
                onMouseDown={() => setRemember(!remember)}
              >
                <img src={checkedIcon} alt="Ícone checado" hidden={!remember} />
                <input
                  type="checkbox"
                  name="remember"
                  checked={remember}
                  readOnly
                  hidden
                />
              </Checkbox>
              <span>Lembrar-me</span>
            </div>
            <div>
              <Link to="#!">Esqueci minha senha</Link>
            </div>
          </Options>

          <Button type="button">Entrar</Button>
        </Content>
        <Footer>
          <p>
            Não tem conta?
            <br />
            <Link to="/cadastro">Cadastre-se</Link>
          </p>
          <p>
            É de graça <img src={purpleHeartIcon} alt="Coração roxo" />
          </p>
        </Footer>
      </FormContainer>
    </Container>
  );
};

export default Login;
