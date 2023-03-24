import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";

export type CustomerScreensNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const CustomerScreens = () => {
  const tw = useTailwind();
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Text>CustomerScreens</Text>
    </ScrollView>
  );
};
