import React, { useState } from "react";
import { View, Image, Text, Linking, AsyncStorage } from "react-native";

import styles from "./styles";

import heartOutlineIcon from "../../assets/images/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";
import { RectButton } from "react-native-gesture-handler";
import api from "../../services/api";

export interface ITeacher {
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

interface ITeacherItemProps {
  teacher: ITeacher;
  favorited: boolean;
}

const TeacherItem: React.FC<ITeacherItemProps> = ({ teacher, favorited }) => {
  const [isFavorited, setIsFavorited] = useState(favorited);
  function handleContactClick() {
    api.post("/connection", {
      user_id: teacher.id,
    });
    
    Linking.openURL(`whatsapp://send?phone=+55${teacher.whatsapp}`);
  }

  async function toggleFavorite() {
    const favorites = await AsyncStorage.getItem("favorites");
    let favoritesArray = [];
    if (favorites) favoritesArray = JSON.parse(favorites);
    console.log(favoritesArray);

    if (isFavorited) {
      console.log("desfavoritando");

      const favoriteIndex = favoritesArray.findIndex(
        (teacherItem: ITeacher) => {
          return teacherItem.id === teacher.id;
        }
      );

      favoritesArray.splice(favoriteIndex, 1);
      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));
      setIsFavorited(false);
    } else {
      console.log("favoritando");
      favoritesArray.push(teacher);

      await AsyncStorage.setItem("favorites", JSON.stringify(favoritesArray));

      setIsFavorited(true);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{
            uri: teacher.avatar,
          }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.name}>{teacher.name}</Text>
          <Text style={styles.subject}>{teacher.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{teacher.bio}</Text>

      <View style={styles.footer}>
        <Text style={styles.cost}>
          Preço/hora: <Text style={styles.costNumber}>R$ {teacher.cost}</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton
            onPress={toggleFavorite}
            style={[styles.favoriteButton, isFavorited ? styles.favorited : {}]}
          >
            <Image source={isFavorited ? unfavoriteIcon : heartOutlineIcon} />
          </RectButton>
          <RectButton style={styles.contactButton} onPress={handleContactClick}>
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default TeacherItem;
