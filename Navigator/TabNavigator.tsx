import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomerScreens } from "../Screens/CustomerScreens";
import { OrderScreens } from "./../Screens/OrderScreen";
import { useNavigation } from "@react-navigation/native";
import Entypo from "react-native-vector-icons/Entypo";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createBottomTabNavigator<TabStackParamList>();

export const TabNavigator = () => {
  const navigation = useNavigation();
  let iconName: string;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Customers") {
            iconName = "users";
            size = focused ? 20 : 15;
            color = focused ? "#59c1cc" : "gray";
          } else if (route.name === "Orders") {
            iconName = "box";
            size = focused ? 20 : 15;
            color = focused ? "#EB6A7C" : "gray";
          }

          return <Entypo name={iconName} size={size} color={color} />;
        },
        headerTitleAlign: "center",
        tabBarActiveTintColor: "#59c1cc",
        tabBarInactiveTintColor: "gray",
        headerStyle: { backgroundColor: "#000" },
        tabBarStyle:{backgroundColor: "#000"},
      })}
    >
      <Tab.Screen
        name="Customers"
        component={CustomerScreens}
      />
      <Tab.Screen name="Orders" component={OrderScreens} />
    </Tab.Navigator>
  );
};
