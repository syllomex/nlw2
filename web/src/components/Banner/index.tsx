import React from "react";

import { Container, Background } from "./styles";
import logoImg from "../../assets/images/logo.svg";

const Banner: React.FC = () => {
  return (
    <Container>
      <Background>
        <div>
          <img src={logoImg} alt="Logo" />
          <p>Sua plataforma de estudos online.</p>
        </div>
      </Background>
    </Container>
  );
};

export default Banner;
