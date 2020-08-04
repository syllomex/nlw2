import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://scontent-gru1-1.xx.fbcdn.net/v/t1.0-9/88056612_3032719386786322_299518134321152_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=tmgxDRnpYJoAX9jZUGm&_nc_ht=scontent-gru1-1.xx&oh=25934259562fa85b78e3a10e4a96ed0f&oe=5F4EF387"
          alt="Avatar"
        />
        <div>
          <strong>Leonardo Santos</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed blandit
        ipsum. <br />
        Proin ac sapien justo. Sed eget arcu vitae urna elementum congue vel in
        purus. Phasellus sed dapibus arcu. Vestibulum auctor nisl a purus
        imperdiet rutrum. Nullam ut lorem sodales, ullamcorper elit vel,
        sagittis ante. Morbi libero tortor, posuere placerat leo sed, volutpat
        volutpat est. Mauris rhoncus lacus odio, quis dignissim sapien tempus
        et.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 90,00</strong>
        </p>

        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
