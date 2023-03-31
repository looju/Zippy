import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useTailwind } from "tailwind-rn/dist";
import { CompositeNavigationProp } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { TabStackParamList } from "../Navigator/TabNavigator";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "ModalScreen">
>;

export const ModalScreen = ({ route }) => {
  const { name, userId } = route.params;
  const tw = useTailwind();

  return (
    <TouchableOpacity style={tw("absolute right-5 top-5 z-10")}>
      <AntDesign name="closecircle" />
    </TouchableOpacity>
  );
};
