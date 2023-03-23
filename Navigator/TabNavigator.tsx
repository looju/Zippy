import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomerScreens } from "../Screens/CustomerScreens";
import { OrderScreens } from "./../Screens/OrderScreen";
import { useNavigation } from "@react-navigation/native";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  const navigation = useNavigation();

  
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomerScreens} />
      <Tab.Screen name="Orders" component={OrderScreens} />
    </Tab.Navigator>
  );
};
