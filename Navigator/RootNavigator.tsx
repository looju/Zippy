import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TabNavigator } from "./TabNavigator";

const RootStack = createStackNavigator();

export type RootStackParamList = {
  Main: undefined;
  MyModal: { userId: string; name: string };
  Order: any;
};

export const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen name="Main" component={TabNavigator} />
      </RootStack.Group>
      <RootStack.Group>

      </RootStack.Group>
    </RootStack.Navigator>
  );
};
