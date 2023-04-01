import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { Button } from "react-native-paper";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTailwind } from "tailwind-rn";
import { useOrders } from "./../Hooks/useOrders";
import { OrderCard } from './../Components/OrderCard';

type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const OrderScreens = () => {
  const navigation = useNavigation<OrderScreenNavigationProp>();
  const tw = useTailwind();
  const { loading, error, orders } = useOrders();
  const [ascending, setAscending] = useState<boolean>(false);

  return (
    <ScrollView style={{ backgroundColor: "#EB6A7C" }}>
      <Image
        source={{ uri: "https://links.papareact.com/m51" }}
        style={tw("w-full h-64")}
      />
      <View>
        <Button
          onPress={() => setAscending(!ascending)}
          buttonColor="pink"
          textColor="#808080"
          style={tw("py-2 px-4")}
        >
          {ascending ? "Showing:Older first" : "Showing: Most recent first"}
        </Button>
        {orders.sort((a, b) => {
          if (ascending) {
            return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
          } else {
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1;
          }
        }).map((order:Order)=><OrderCard key={order.trackingId} item={order}/>)}
      </View>
    </ScrollView>
  );
};
