import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#8257E5",
    padding: 40,
  },
  hero: {
    width: "100%",
    resizeMode: "contain",
  },
  welcome: {
    color: "#fff",
    marginVertical: 50,
    fontSize: 20,
    lineHeight: 40,
    fontFamily: "Poppins_400Regular",
  },
  bold: {
    fontWeight: "bold",
  },
  btn: {
    borderRadius: 4,
    marginVertical: 15,
    backgroundColor: "#9871F5",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  btnGiveClass: {
    backgroundColor: "#04D361",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Archivo_700Bold",
    marginLeft: 15,
  },
  footer: {
    marginTop: 15,
    flexDirection: "row",
    width: 200,
  },
  footerTxt: {
    color: "#D4C2FF",
    lineHeight: 25,
    fontSize: 15,
  },
});
export default styles;
