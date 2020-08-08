import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import Landing from "./pages/Landing";
import TabRoute from "./tabs.routes";
import GiveClass from "./pages/GiveClass";

const { Navigator, Screen } = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Landing" component={Landing} />
        <Screen name="GiveClass" component={GiveClass} />
        <Screen name="Study" component={TabRoute} />
      </Navigator>
    </NavigationContainer>
  );
}
