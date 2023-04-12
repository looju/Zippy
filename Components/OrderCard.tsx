import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

type Props = {
  key: string;
  item: Order;
};

type OrderCardNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">, 
  NativeStackNavigationProp<RootStackParamList>
>;

export const OrderCard = ({ key, item }: Props) => {
  const tw = useTailwind();
  const navigation = useNavigation<OrderCardNavigationProps>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("OrderModalScreen", { order: item })}
    >
      <Card containerStyle={tw("px-5 rounded-lg")}>
        <View style={tw("flex-row justify-between items-center")}>
          <View>
            <MaterialCommunityIcons name="truck" color={"#EB6A7C"} />
            <Text>{new Date(item.createdAt).toLocaleDateString()}</Text>
          </View>
        </View>
        <View>
          <Text style={[tw("text-xl"), { fontSize: 10, color:"grey" }]}>
            {item.carrier}-{item.trackingId}
          </Text>
          <Text style={[tw("text-xl"),{color:"grey"}]}>
            {item.trackingItems.customer?.name}
          </Text>
        </View>
        <View style={tw("flex-row items-center")}>
          <Text style={[tw("text-sm"), { color: "#EB6A7C" }]}>
            {item.trackingItems.items.length}X
          </Text>
          <Feather name="box" style={tw("ml-2")} />
        </View>
      </Card>
    </TouchableOpacity>
  );
};
