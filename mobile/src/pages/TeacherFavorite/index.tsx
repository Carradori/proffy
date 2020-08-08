import React, { useState, useEffect } from "react";
import { View, AsyncStorage, FlatList } from "react-native";
import styles from "./styles";
import Header from "../../components/Header";
import TeachersList, {
  Teacher,
} from "../../components/TeachersList/TeacherList";
import { useFocusEffect } from "@react-navigation/native";

export default function FavoriteTeacher() {
  const [favoritad, setFavorited] = useState<Teacher[]>([]);

  function handleAllFavorites() {
    AsyncStorage.getItem("favorites").then((res) => {
      if (res) {
        setFavorited(JSON.parse(res));
      }
    });
  }

  useFocusEffect(() => {
    handleAllFavorites();
  });

  return (
    <View style={styles.container}>
      <Header title="Meus proffys favoritos" />
      {favoritad.length > 0 ? (
        <FlatList
          data={favoritad}
          style={{
            marginTop: -35,
          }}
          contentContainerStyle={{
            padding: 15,
          }}
          renderItem={({ item }) => <TeachersList teacher={item} favorited />}
          keyExtractor={(item, i) => item.id.toString()}
        />
      ) : null}
    </View>
  );
}
