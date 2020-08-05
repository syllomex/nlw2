import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import api from "../../services/api";

interface ITeacherProps {
  id: number;
  name: string;
  avatar: string;
  subject: string;
  bio: string;
  cost: number;
  whatsapp: string;
}

const TeacherItem: React.FC<ITeacherProps> = ({
  id,
  name,
  avatar,
  subject,
  bio,
  cost,
  whatsapp,
}) => {
  function createNewConnection() {
    api.post("/connection", { user_id: id });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt="Avatar" />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost.toFixed(2)}</strong>
        </p>

        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={createNewConnection}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
