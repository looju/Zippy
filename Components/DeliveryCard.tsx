import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card, Divider } from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";

type Params = {
  order: Order;
};

export const DeliveryCard = ({ order }: Params) => {
  const tw = useTailwind();

  return (
    <Card
      style={[
        tw("my-2 rounded-lg"),
        {
          padding: 0,
          paddingTop: 16,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
          backgroundColor: "#59c1cc",
        },
      ]}
    >
      <View>
        <Entypo name="box" size={50} color={"#fff"} />
        <View>
          <Text
            style={tw("text-xs text-center uppercase text-white font-bold")}
          >
            {order.carrier}-{order.trackingId}
          </Text>
          <Text style={tw("text-lg text-center text-white font-bold")}>
            Expected delivery date:
            {new Date(order.createdAt).toLocaleDateString()} @
            {new Date(order.createdAt).toTimeString()}
          </Text>
          <Divider style={{ backgroundColor: "#fff" }} />
        </View>
        <View>
          <Text>Adress</Text>
          <Text>
            {order.Address}
            {order.City}
          </Text>
        </View>
      </View>
    </Card>
  );
};
