import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import WarningIcon from "../../assets/images/icons/warning.svg";
import Textarea from "../../components/Textarea";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherForm() {
  const history = useHistory();

  const [scheduleItems, setScheduleItems] = useState([
    { weekday: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    if (scheduleItems.length < 5)
      setScheduleItems([...scheduleItems, { weekday: 0, from: "", to: "" }]);
  }

  function updateScheduleItems(
    index: number,
    field: string,
    value: string | number
  ) {
    console.log("oi")
    const schedules = scheduleItems.map((item, i) => {
      if (index === i) {
        return { ...item, [field]: value };
      }
      return item;
    });

    setScheduleItems(schedules);
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    const form = new FormData(e.target);

    let data = {};

    form.forEach((value, key) => {
      if (key !== "weekday" && key !== "from" && key !== "to")
        data = { ...data, [key]: value };
    });

    let scheduleItemsWithoutEmpties: any[] = [];

    scheduleItems.forEach((item) => {
      if (
        item.weekday > 1 &&
        item.weekday < 7 &&
        item.from !== "" &&
        item.to !== ""
      ) {
        scheduleItemsWithoutEmpties.push(item);
      }
    });

    data = {
      ...data,
      schedule: [...scheduleItemsWithoutEmpties],
    };

    api
      .post("/class", data)
      .then((res) => {
        history.push("/estudar");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas!"
        description="O primeiro passo é preencher esse formulário de inscrição."
      />

      <main>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>
            <Input label="Nome completo" name="name" />
            <Input label="Avatar" name="avatar" />
            <Input label="Whatsapp" name="whatsapp" />
            <Textarea label="Biografia" name="bio" />
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <Select
              label="Matéria"
              name="subject"
              options={[
                { value: "Português", label: "Português" },
                { value: "Matemática", label: "Matemática" },
                { value: "Biologia", label: "Biologia" },
                { value: "Química", label: "Química" },
                { value: "Física", label: "Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Sociologia", label: "Sociologia" },
                { value: "Filosofia", label: "Filosofia" },
                { value: "Educação Física", label: "Educação Física" },
                { value: "Artes", label: "Artes" },
              ]}
            />
            <Input label="Custo da sua hora/aula" name="cost" />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => (
              <div key={index} className="schedule-item">
                <Select
                  label="Dia da semana"
                  name="weekday"
                  options={[
                    { value: "2", label: "Segunda-feira" },
                    { value: "3", label: "Terça-feira" },
                    { value: "4", label: "Quarta-feira" },
                    { value: "5", label: "Quinta-feira" },
                    { value: "6", label: "Sexta-feira" },
                  ]}
                  onChange={(e) => {
                    updateScheduleItems(
                      index,
                      "weekday",
                      parseInt(e.target.value)
                    );
                  }}
                />
                <Input
                  name="from"
                  label="Das"
                  type="time"
                  onChange={(e) => {
                    updateScheduleItems(index, "from", e.target.value);
                  }}
                />
                <Input
                  name="to"
                  label="Até"
                  type="time"
                  onChange={(e) => {
                    updateScheduleItems(index, "to", e.target.value);
                  }}
                />
              </div>
            ))}
          </fieldset>

          <footer>
            <p>
              <img src={WarningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados.
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}

export default TeacherForm;
