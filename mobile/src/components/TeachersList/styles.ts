import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
  },
  profile: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#e5e5e5",
  },
  profileInfo: {
    marginLeft: 15,
  },
  profileName: {
    fontSize: 20,
    fontFamily: "Archivo_700Bold",
    color: "#32264D",
  },
  profileSubject: {
    fontSize: 12,
    fontFamily: "Poppins_400Regular",
    color: "#6A6180",
  },
  bio: {
    marginVertical: 8,
    paddingHorizontal: 15,
  },
  txtBio: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#6A6180",
  },
  footer: {
    borderTopWidth: 1,
    borderColor: "#EBEBF5",
    marginTop: 15,
    paddingVertical: 15,
    backgroundColor: "#FAFAFC",
    alignItems: "center",
  },
  cost: {
    flexDirection: "row",
  },
  costTxt: {
    fontSize: 18,
    fontFamily: "Poppins_400Regular",
    color: "#6A6180",
  },
  price: {
    color: "#8257E5",
    fontFamily: "Archivo_700Bold",
    fontSize: 18,
  },
  buttons: {
    flexDirection: "row",
    marginVertical: 8,
    paddingHorizontal: 15,
    justifyContent: "space-around",
  },
  favorite: {
    height: 56,
    width: 56,
    borderRadius: 8,
    backgroundColor: "#8257E5",
    alignItems: "center",
    justifyContent: "center",
  },
  unfavorite: {
    backgroundColor: "#f02113",
  },
  whatsapp: {
    flex: 1,
    borderRadius: 8,
    marginLeft: 15,
    backgroundColor: "#04D361",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contact: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "Archivo_700Bold",
  },
});
export default styles;
