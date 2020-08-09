import React, { useEffect, useState } from "react";
import { View, Text, Image, AsyncStorage } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import landingBg from "../../assets/landing.png";
import heartIcon from "../../assets/icons/heart.png";
import styles from "./styles";
import api from "../../services/api";

export default function Landing() {
  const { navigate } = useNavigation();

  const [connections, setConnectoins] = useState(0);

  useEffect(() => {
    api
      .get("connection")
      .then((response) => setConnectoins(response.data.connections))
      .catch((err) => console.log(err));
  }, []);

  function goToProffyListPage() {
    navigate("Study");
  }
  function goToGiveClassPage() {
    navigate("GiveClass");
  }
  return (
    <View style={styles.container}>
      <Image source={landingBg} style={styles.hero} />
      <Text style={styles.welcome}>
        Seja bem vindo
        {"\n"}
        <Text style={styles.bold}>O que deseja fazer?</Text>
      </Text>
      <View>
        <RectButton style={styles.btn} onPress={goToProffyListPage}>
          <Ionicons name="ios-book" color="#fff" size={35} />
          <Text style={styles.btnText}>Estudar</Text>
        </RectButton>
        <RectButton
          style={[styles.btn, styles.btnGiveClass]}
          onPress={goToGiveClassPage}
        >
          <Ionicons name="ios-easel" color="#fff" size={35} />
          <Text style={styles.btnText}>Dar aulas</Text>
        </RectButton>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerTxt}>
          Total de {connections} conexões já realizadas{" "}
          <Image source={heartIcon} />
        </Text>
      </View>
    </View>
  );
}
