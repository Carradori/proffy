import React, { ReactNode } from "react";
import { View, Text, Image } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import logoIcon from "../../assets/logo.png";
import backIcon from "../../assets/icons/back.png";
import styles from "./styles";

interface IProps {
  title: string;
  children?: ReactNode;
}

const Header: React.FC<IProps> = ({ title, children }) => {
  const { goBack } = useNavigation();
  function goPrev() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <RectButton onPress={goPrev}>
          <Image source={backIcon} style={styles.navIcon} />
        </RectButton>
        <Image source={logoIcon} style={styles.navIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </View>
  );
};

export default React.memo(Header);
