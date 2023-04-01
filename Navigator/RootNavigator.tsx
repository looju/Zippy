import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";
import { ModalScreen } from "./../Screens/ModalScreen";
import { OrderModalScreen } from "../Screens/OrderModalScreen";

const RootStack = createStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  Main: undefined;
  ModalScreen: { userId: string; name: string }; //route values it receives
  OrderModalScreen: {order:Order};
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
      <RootStack.Group>
        <RootStack.Screen
          name="OrderModalScreen"
          component={OrderModalScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
