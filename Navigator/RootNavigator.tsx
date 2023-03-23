import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";

const RootStack = createStackNavigator();

export type RootStackParamList={
    Main:undefined
}

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="name" component={TabNavigator} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
