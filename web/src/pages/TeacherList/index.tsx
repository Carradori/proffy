import React, { FormEvent, useState, useEffect } from "react";
import Header from "../../components/Header";

import searchIcon from "../../assets/icon/search.svg";

import TeacherCard from "../../components/TeacherCard";
import Select from "../../components/Select";
import Input from "../../components/Input";

import "./styles.css";
import api from "../../services/api";

interface IProffy {
  id: number;
  subject: string;
  cost: number;
  name: string;
  whatsapp: string;
  bio: string;
  image_url: string;
}

interface ISubjects {
  id: number;
  title: string;
}

export default function TeacherList() {
  const [week_day, setWeekDay] = useState("0");
  const [time, setTime] = useState("");
  const [subject, setSubject] = useState("Artes");
  const [subjects, setSubjects] = useState<ISubjects[]>([]);
  const [proffys, setProffys] = useState<IProffy[]>([]);

  const [error, setError] = useState("");

  useEffect(() => {
    async function getSubjects() {
      const subjects = await api.get("subjects");
      setSubjects(subjects.data);
    }
    getSubjects();
  }, []);

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      const response = await api.get("users", {
        params: {
          subject,
          week_day,
          time,
        },
      });
      if (!response.data.length) {
        //n tem proffys
      }
      setProffys(response.data);
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => setError(""), 5000);
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <Header title="Esses são os proffys disponíveis">
        <form id="search-teachers" onSubmit={handleFormSubmit}>
          <Select
            label="Matéria"
            name="subjects"
            options={subjects}
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Select
            label="Dia da semana"
            value={week_day}
            onChange={(e) => setWeekDay(e.target.value)}
            options={[
              { index: "0", id: 1, title: "Segunda-feira" },
              { index: "1", id: 2, title: "Terça-feira" },
              { index: "2", id: 3, title: "Quarta-feira" },
              { index: "3", id: 4, title: "Quinta-feira" },
              { index: "4", id: 5, title: "Sexta-feira" },
            ]}
            name="week_day"
          />
          <Input
            label="Hora"
            type="time"
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button type="submit">
            <h2>Pesquisar</h2>
            <img src={searchIcon} alt="Pesquisar" />
          </button>
        </form>
      </Header>
      {error.length ? (
        <div className="error">{error}</div>
      ) : (
        <main>
          {proffys.length ? (
            proffys.map((proffy) => (
              <TeacherCard
                key={proffy.id}
                avatar={proffy.image_url}
                bio={proffy.bio}
                cost={proffy.cost}
                name={proffy.name}
                subject={proffy.subject}
                whatsapp={proffy.whatsapp}
              />
            ))
          ) : (
            <h3 className="no-proffy">
              Nenhum professor encontrado com sua pesquisa.
            </h3>
          )}
        </main>
      )}
    </div>
  );
}
