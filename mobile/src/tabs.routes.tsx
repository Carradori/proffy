import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TeacherList from "./pages/TeacherList";
import FavoriteTeacher from "./pages/TeacherFavorite";

const { Navigator, Screen } = createBottomTabNavigator();

export default function TabRoute() {
  return (
    <Navigator
      tabBarOptions={{
        inactiveBackgroundColor: "#FAFAFC",
        inactiveTintColor: "#C1BCCC",
        activeBackgroundColor: "#EBEBF5",
        activeTintColor: "#32264D",
        style: {
          elevation: 0,
          height: 60,
        },
        tabStyle: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
          marginRight: 15,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 15,
        },
      }}
    >
      <Screen
        name="ListProffy"
        component={TeacherList}
        options={{
          title: "Proffys",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-easel"
              size={size}
              color={focused ? "#8257E5" : "#C1BCCC"}
            />
          ),
        }}
      />
      <Screen
        name="FavProffy"
        component={FavoriteTeacher}
        options={{
          title: "Favoritos",
          tabBarIcon: ({ focused, size }) => (
            <Ionicons
              name="ios-heart"
              size={size}
              color={focused ? "#8257E5" : "#C1BCCC"}
            />
          ),
        }}
      />
    </Navigator>
  );
}
