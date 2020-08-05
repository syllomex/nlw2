import React, { ChangeEvent, useState, useEffect } from "react";

import "./styles.css";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

interface ITeacher {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  subject: string;
  cost: number;
  whatsapp: string;
  class_schedules: Array<{
    weekday: number;
    from: number;
    to: number;
  }>;
}

function TeacherList() {
  const [params, setParams] = useState({
    subject: "",
    weekday: 0,
    time: "",
  });
  const [teachers, setTeachers] = useState([]);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setParams({ ...params, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (
      params.subject !== "" &&
      params.weekday > 1 &&
      params.weekday < 7 &&
      params.time !== ""
    ) {
      api
        .get("/classes", {
          params,
        })
        .then((res) => {
          setTeachers(res.data);
        });
    }
  }, [params]);

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Esses são os proffys disponíveis.">
        <form id="search-teachers">
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
            onChange={handleChange}
          />
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
            onChange={handleChange}
          />
          <Input label="Hora" name="time" type="time" onChange={handleChange} />
          <button type="submit" hidden />
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: ITeacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              id={teacher.id}
              avatar={teacher.avatar}
              bio={teacher.bio}
              cost={teacher.cost}
              name={teacher.name}
              subject={teacher.subject}
              whatsapp={teacher.whatsapp}
            />
          );
        })}
      </main>
    </div>
  );
}

export default TeacherList;
