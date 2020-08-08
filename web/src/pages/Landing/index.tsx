import React, { useEffect, useState } from "react";

import logoImg from "../../assets/logo.svg";
import landingImg from "../../assets/landing.svg";

import studyIcon from "../../assets/icon/study.svg";
import giveClassesIcon from "../../assets/icon/give-classes.svg";
import purpleHeartIcon from "../../assets/icon/purple-heart.svg";

import "./styles.css";

import { Link } from "react-router-dom";
import api from "../../services/api";

export default function Landing() {
  const [connections, setConnections] = useState(0);

  useEffect(() => {
    api
      .get("connection")
      .then((res) => setConnections(res.data.connections))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="page-landing">
      <div className="container" id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>
        <img
          src={landingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-class" className="give-class">
            <img src={giveClassesIcon} alt="" />
            Dar aulas
          </Link>
        </div>
        <span className="total-connections">
          Total de {connections} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}
