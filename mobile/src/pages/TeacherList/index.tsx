import React, { useState, useEffect } from "react";
import { View, ScrollView, Text, AsyncStorage } from "react-native";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";
import TeacherItem from "../../components/TeacherItem";

import { Feather } from "@expo/vector-icons";

import { TextInput, BorderlessButton } from "react-native-gesture-handler";
import api from "../../services/api";

import {ITeacher} from "../../components/TeacherItem/index"

function TeacherList() {
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [filters, setFilters] = useState({
    subject: "",
    weekday: 0,
    time: "",
  });
  const [teachers, setTeachers] = useState([]);
  const [favorites, setFavorites] = useState<number[]>([]);

  function toggleFilters() {
    setFiltersVisible(!filtersVisible);
  }

  function handleChange(key: string, value: string) {
    setFilters({
      ...filters,
      [key]: value,
    });
  }

  function submitFilters() {
    loadFavorites();

    api
      .get("/classes", {
        params: filters,
      })
      .then((res) => setTeachers(res.data))
      .catch((err) => {});
  }

  useEffect(() => {
    if (
      filters.subject !== "" &&
      filters.time !== "" &&
      filters.weekday !== 0
    ) {
      submitFilters();
    }
  }, [filters]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        const favoritedTeachers = JSON.parse(res);
        const favoritedTeachersIds = favoritedTeachers.map(
          (teacher: ITeacher) => teacher.id
        );

        setFavorites(favoritedTeachersIds);
      }
    });
  }

  useEffect(() => {
    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys disponíveis"
        headerRight={
          <BorderlessButton style={{ padding: 8 }} onPress={toggleFilters}>
            <Feather name="filter" size={20} color="#fff" />
          </BorderlessButton>
        }
      >
        {filtersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              placeholderTextColor="#c1bccc"
              style={styles.input}
              placeholder="Qual a matéria?"
              onChangeText={(text) => handleChange("subject", text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o dia?"
                  onChangeText={(text) => handleChange("weekday", text)}
                />
              </View>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  placeholderTextColor="#c1bccc"
                  style={styles.input}
                  placeholder="Qual o horário?"
                  onChangeText={(text) => handleChange("time", text)}
                />
              </View>
            </View>
          </View>
        )}
      </PageHeader>
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        style={styles.teacherList}
      >
        {teachers.map((teacher: ITeacher) => {
          return (
            <TeacherItem
              key={teacher.id}
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default TeacherList;
