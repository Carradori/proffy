import React from "react";
import { Link } from "react-router-dom";

import backIcon from "../../assets/icon/back.svg";
import logoImg from "../../assets/logo.svg";

import "./styles.css";

interface IHeaderProps {
  title: string;
  subtitle?: string;
}

const Header: React.FC<IHeaderProps> = ({ title, subtitle, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        <span>{subtitle}</span>
        {children}
      </div>
    </header>
  );
};

export default Header;
