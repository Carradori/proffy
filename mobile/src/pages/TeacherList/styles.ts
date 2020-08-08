import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F7",
  },
  error: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
    backgroundColor: "rgba(0,0,0,.7)",
  },
  errorTxt: {
    backgroundColor: "#a1121e",
    color: "#fff",
    fontSize: 20,
    fontFamily: "Archivo_700Bold",
    padding: 25,
  },
  select: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    justifyContent: "space-around",
    padding: 8,
  },
  selectTxt: {
    color: "#D4C2FF",
    fontSize: 22,
    fontFamily: "Archivo_400Regular",
  },
  txt: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#D4C2FF",
  },
  custom: {
    backgroundColor: "#fff",
  },
  icon: {
    color: "#9C98A6",
    position: "absolute",
    bottom: 15,
    right: 10,
    fontSize: 20,
  },
  time: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },
  week: {
    flex: 1,
  },
  hour: {
    marginLeft: 15,
  },
  input: {
    backgroundColor: "#fff",
    width: 145,
    paddingHorizontal: 5,
    paddingVertical: 11.5,
    fontSize: 16,
  },
  btnSearch: {
    marginVertical: 15,
    backgroundColor: "#04D361",
    borderRadius: 4,
    padding: 15,
  },
  btnTxt: {
    textAlign: "center",
    fontSize: 18,
    color: "#fff",
  },
});
export default styles;
