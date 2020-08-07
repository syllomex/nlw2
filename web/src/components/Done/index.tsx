import React from "react";

import { Container } from "./styles";

import doneIcon from "../../assets/images/icons/done.svg";
import Button from "../../components/Button";
import { useHistory } from "react-router-dom";

interface IDoneProps {
  title: string;
  text: string;
  button: {
    label: string;
    href: string;
  };
}

const Done: React.FC<IDoneProps> = ({ title, text, button }) => {
  const history = useHistory();

  return (
    <Container>
      <div />
      <img src={doneIcon} alt="Concluído" />
      <h1>{title}</h1>
      <p>{text}</p>
      <Button type="button" onClick={() => history.push(button.href)}>
        {button.label}
      </Button>
    </Container>
  );
};

export default Done;
