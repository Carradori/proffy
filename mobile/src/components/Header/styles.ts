import { StyleSheet, StatusBar, Platform } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#8257E5",
    paddingHorizontal: 25,
  },
  nav: {
    paddingTop: StatusBar.currentHeight + 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  navIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  content: {
    marginBottom: 35,
  },
  title: {
    fontSize: 24,
    fontFamily: "Archivo_700Bold",
    color: "#fff",
    marginVertical: 15,
    width: 150,
  },
});

export default styles;
