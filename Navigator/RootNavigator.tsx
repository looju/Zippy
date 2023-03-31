import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";
import { ModalScreen } from './../Screens/ModalScreen';


const RootStack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Main: undefined;
  ModalScreen: { userId: string; name: string };  //route values it receives
  Order: any;
};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="ModalScreen"
          component={ModalScreen}
          options={{ headerShown: false }}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
