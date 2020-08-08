import React, { useState, useEffect, FormEvent } from "react";
import { useHistory } from "react-router-dom";
import warningIcon from "../../assets/icon/warning.svg";
import successIcon from "../../assets/icon/success-check-icon.svg";
import Header from "../../components/Header";
import Dropzone from "../../components/Dropzone";
import api from "../../services/api";
import Select from "../../components/Select";
import Input from "../../components/Input";

import "./styles.css";

interface ISubjects {
  id: number;
  title: string;
}

export default function TeacherForm() {
  const { push } = useHistory();

  const [selectedFile, setSelectedFile] = useState<File>();
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");
  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");
  const [scheduleItem, setScheduleItem] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  const [subjects, setSubjects] = useState<ISubjects[]>([]);

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function getSubjects() {
      const subjects = await api.get("subjects");
      setSubjects(subjects.data);
    }
    getSubjects();
  }, []);

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    const data = new FormData();
    data.append("name", name);
    data.append("whatsapp", whatsapp);
    data.append("subject", subject);
    data.append("cost", cost);
    data.append("bio", bio);
    data.append("schedule", JSON.stringify(scheduleItem));
    if (selectedFile) {
      data.append("avatar", selectedFile);
    }
    try {
      const response = await api.post("users", data);
      console.log(response);
      if (response.status === 201) {
        setSuccess(true);
        setTimeout(() => push("/"), 5000);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function addNewScheduleItem() {
    setScheduleItem([...scheduleItem, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemValue(i: number, field: string, value: string) {
    const scheduleItemModified = scheduleItem.map((schedule, index) => {
      if (index === i) {
        return {
          ...schedule,
          [field]: value,
        };
      }
      return schedule;
    });

    setScheduleItem(scheduleItemModified);
  }

  return (
    <div id="page-register-teacher" className="container">
      {success && (
        <div className="success">
          <img src={successIcon} alt="Sucesso" />
          <h2>Cadastro realizado com sucesso</h2>
        </div>
      )}
      <Header
        title="Que incrível que você quer dar aulas"
        subtitle="O primeiro passo é preencher esse formulário de inscrição"
      >
        <form id="register-teacher" onSubmit={handleFormSubmit}>
          <main>
            <h2>Seus dados</h2>
            <div className="line"></div>
            <Input
              name="name"
              label="Nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="input-block">
              <Dropzone onFileUploaded={setSelectedFile} />
            </div>
            <Input
              name="whatsapp"
              label="Whatsapp"
              small="(somente números)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Input
              name="biografy"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            <h2>Sobre a aula</h2>
            <div className="line"></div>
            <Select
              label="Matéria"
              name="subjects"
              options={subjects}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              name="price"
              label="Custo da sua hora por aula"
              small="(em R$)"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
            <h2>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </h2>
            <div className="line"></div>
            {scheduleItem.map((schedule, i) => (
              <div className="time" key={i}>
                <Select
                  label="Dia da semana"
                  onChange={(e) =>
                    setScheduleItemValue(i, "week_day", e.target.value)
                  }
                  value={schedule.week_day}
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
                  label="Das"
                  type="time"
                  name="from"
                  value={schedule.from}
                  onChange={(e) =>
                    setScheduleItemValue(i, "from", e.target.value)
                  }
                />
                <Input
                  label="Até"
                  type="time"
                  name="to"
                  value={schedule.to}
                  onChange={(e) =>
                    setScheduleItemValue(i, "to", e.target.value)
                  }
                />
              </div>
            ))}
          </main>
          <footer>
            <div>
              <img src={warningIcon} alt="Aviso" />
              <p>
                Importante
                <br />
                preencha todos os campos
              </p>
            </div>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </Header>
    </div>
  );
}
