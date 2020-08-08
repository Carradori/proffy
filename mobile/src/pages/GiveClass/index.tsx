import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import giveClassBg from "../../assets/give-classes-background.png";
import styles from "./styles";

export default function GiveClass() {
  const { goBack } = useNavigation();
  function goPrev() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={giveClassBg} style={styles.bg}>
        <View style={styles.content}>
          <Text style={styles.title}>Quer ser um Proffy?</Text>
          <Text style={styles.txtContent}>
            Para começar, você precisa se cadastrar como professor na nossa
            plataforma web.
          </Text>
        </View>
        <RectButton style={styles.btn} onPress={goPrev}>
          <Text style={styles.btnText}>Entendi</Text>
        </RectButton>
      </ImageBackground>
    </View>
  );
}
