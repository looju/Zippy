import { View, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn/dist";
import { Card } from "react-native-paper";
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
        },
      ]}
    >
      <View>
        <Entypo name="box" size={50} color={"#fff"} />
      </View>
    </Card>
  );
};
