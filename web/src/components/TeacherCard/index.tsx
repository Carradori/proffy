import React from "react";

import wppIcon from "../../assets/icon/whatsapp.svg";

import "./styles.css";

interface IProps {
  name: string;
  subject: string;
  bio: string;
  avatar: string;
  cost: number;
  whatsapp: string;
}

const TeacherCard: React.FC<IProps> = ({
  avatar,
  bio,
  cost,
  name,
  subject,
  whatsapp,
}) => {
  return (
    <article className="teacher-item">
      <header>
        <div>
          <img src={avatar} alt={name} />
        </div>
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>{bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>
            {cost.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </strong>
        </p>
        <button>
          <img src={wppIcon} alt="WhatsApp" />
          Entre com contato
        </button>
      </footer>
    </article>
  );
};
export default TeacherCard;
