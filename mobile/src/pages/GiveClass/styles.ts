import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-evenly",
  },
  content: {
    padding: 40,
    justifyContent: "center",
  },
  title: {
    width: 180,
    fontFamily: "Archivo_700Bold",
    fontSize: 32,
    lineHeight: 40,
    color: "#fff",
  },
  txtContent: {
    marginTop: 20,
    fontFamily: "Poppins_400Regular",
    width: 250,
    color: "#D4C2FF",
    fontSize: 16,
    lineHeight: 26,
  },
  btn: {
    backgroundColor: "#04D361",
    borderRadius: 4,
    marginHorizontal: 25,
    padding: 12,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Archivo_400Regular",
    fontSize: 18,
  },
});

export default styles;
