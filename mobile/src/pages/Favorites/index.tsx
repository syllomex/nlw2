import React, { useState } from "react";
import { View, AsyncStorage } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";

import styles from "./styles";
import PageHeader from "../../components/PageHeader";

import TeacherItem, { ITeacher } from "../../components/TeacherItem";

function Favorites() {
  const [favorites, setFavorites] = useState<ITeacher[]>([]);

  function loadFavorites() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) setFavorites(JSON.parse(res));
    });
  }

  useFocusEffect(() => {
    loadFavorites();
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus proffys favoritos" />
      <ScrollView
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 24 }}
        style={styles.teacherList}
      >
        {favorites.map((teacher: ITeacher) => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
}

export default Favorites;
