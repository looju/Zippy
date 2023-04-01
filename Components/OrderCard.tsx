import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Card } from "@rneui/themed";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTailwind } from "tailwind-rn";

type Props = {
  key: string;
  item: Order;
};

export const OrderCard = ({ key, item }: Props) => {
  const tw = useTailwind();
  return (
    <TouchableOpacity>
      <Card containerStyle={tw('px-5 rounded-lg')}>
        <View style={tw("flex-row justify-between items-center")}>
          <View>
            <MaterialCommunityIcons name="truck-community" color={"#EB6A7C"} />
            <Text>{new Date(item.createdAt).toLocaleDateString()}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};
