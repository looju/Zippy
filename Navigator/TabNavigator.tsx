import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomerScreens } from "../Screens/CustomerScreens";
import { OrderScreens } from "./../Screens/OrderScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="customers" component={CustomerScreens} />
      <Tab.Screen name="orders" component={OrderScreens} />
    </Tab.Navigator>
  );
};
