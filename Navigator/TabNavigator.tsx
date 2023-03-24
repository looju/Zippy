import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomerScreens } from "../Screens/CustomerScreens";
import { OrderScreens } from "./../Screens/OrderScreen";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo"

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
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Customers") {
            iconName = "users";
            size = focused ? 20 : 15;
          } else if (route.name === "Orders") {
            iconName = "box";
            size = focused ? 20 : 15;
          }

          // You can return any component that you like here!
          return <Entypo name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#59c1cc",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Customers" component={CustomerScreens} />
      <Tab.Screen name="Orders" component={OrderScreens} />
    </Tab.Navigator>
  );
};
