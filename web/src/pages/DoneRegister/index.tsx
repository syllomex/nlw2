import React from "react";

import Done from "../../components/Done";

function DoneRegister() {
  return (
    <Done
      title="Cadastro concluído"
      text={
        "Agora você faz parte da plataforma Proffy.\nTenha uma ótima experiência."
      }
      button={{ label: "Fazer login", href: "/" }}
    />
  );
}

export default DoneRegister;
