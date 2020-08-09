import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppLoading } from "expo";
import {
  useFonts,
  Archivo_400Regular,
  Archivo_700Bold,
} from "@expo-google-fonts/archivo";
import { Poppins_400Regular } from "@expo-google-fonts/poppins";
import FavoritedProvider, {
  TodoContext,
} from "./src/contexts/FavoritedContext";
import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <FavoritedProvider>
          <Routes />
        </FavoritedProvider>
        <StatusBar backgroundColor="transparent" translucent style="light" />
      </>
    );
  }
}
