import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useTailwind } from "tailwind-rn/dist";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { useCustomerOrdersById } from "../Hooks/useCustomerOrdersById";
import { DeliveryCard } from "../Components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList>,
  NativeStackNavigationProp<RootStackParamList, "ModalScreen">
>;

type ModalScreenRouteProps = RouteProp<RootStackParamList, "ModalScreen">;

export const ModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<ModalScreenNavigationProp>();
  const route = useRoute<ModalScreenRouteProps>();
  const {
    params: { userId, name },
  } = route;

  const { loading, error, orders } = useCustomerOrdersById(userId);

  return (
    <View>
      <TouchableOpacity
        style={tw("absolute right-5 top-5 z-10")}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="closecircle" />
      </TouchableOpacity>

      <View style={tw("mt-10")}>
        <View style={[tw("py-5 border-b"), { borderColor: "#59c1cc" }]}>
          <Text
            style={[tw("text-center text-xl font-bold"), { color: "#59c1cc" }]}
          >
            {name}
          </Text>
          <Text style={tw("text-center text-sm italic")}>deliveries</Text>
        </View>
      </View>
      <FlatList
        data={orders}
        keyExtractor={(order) => order.trackingId}
        renderItem={({ item }) => <DeliveryCard order={item} />}
        contentContainerStyle={{ paddingBottom: 200 }}
      />
    </View>
  );
};
