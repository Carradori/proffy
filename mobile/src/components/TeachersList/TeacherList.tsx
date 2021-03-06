import React, { useState, useEffect, useContext } from "react";
import { View, Text, Image, Linking, AsyncStorage } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import favoriteIcon from "../../assets/icons/heart-outline.png";
import unfavoriteIcon from "../../assets/icons/unfavorite.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";

import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { TodoContext } from "../../contexts/FavoritedContext";

export interface Teacher {
  id: number;
  image_url: string;
  bio: string;
  name: string;
  cost: number;
  subject: string;
  whatsapp: string;
}

interface ITeacherListProps {
  teacher: Teacher;
  favorited: boolean;
}

const TeachersList: React.FC<ITeacherListProps> = ({ teacher, favorited }) => {
  const { handleFavoritedToggle, isFavorited } = useContext(TodoContext);

  function handleMessageToWpp() {
    Linking.openURL(`whatsapp://send?phone=${teacher.whatsapp}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={{ uri: teacher.image_url }} style={styles.avatar} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{teacher.name}</Text>
          <Text style={styles.profileSubject}>{teacher.subject}</Text>
        </View>
      </View>
      <View style={styles.bio}>
        <Text style={styles.txtBio}>{teacher.bio}</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.cost}>
          <Text style={styles.costTxt}>Preço/hora{"   "}</Text>
          <Text style={styles.price}>{teacher.cost}</Text>
        </View>
        <View style={styles.buttons}>
          <RectButton
            style={[styles.favorite, isFavorited ? styles.unfavorite : {}]}
            onPress={() => handleFavoritedToggle(teacher, favorited)}
          >
            <Image source={isFavorited ? unfavoriteIcon : favoriteIcon} />
          </RectButton>
          <RectButton style={styles.whatsapp} onPress={handleMessageToWpp}>
            <Image source={whatsappIcon} />
            <Text>{"  "}</Text>
            <Text style={styles.contact}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
};

export default React.memo(TeachersList);
