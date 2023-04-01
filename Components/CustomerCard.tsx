import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { Card } from "react-native-paper";
import { useTailwind } from "tailwind-rn/dist";
import { CustomerScreensNavigationProps } from "../Screens/CustomerScreens";
import { useCustomerOrdersById } from "./../Hooks/useCustomerOrdersById";
import Feather from "react-native-vector-icons/Feather";

type Props = {
  name: string;
  email: string;
  userId: string;
};

export const CustomerCard = ({ name, email, userId }: Props) => {
  const { loading, error, orders } = useCustomerOrdersById(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreensNavigationProps>();
  return (
    <TouchableOpacity
      style={tw("bg-black")}
      onPress={() =>
        navigation.navigate("ModalScreen", {
          name: name,
          userId: userId,
        })
      }
    >
      <Card style={tw("p-5 rounded-lg bg-black ")}>
        <Card.Content>
          <View>
            <View style={tw("flex-row justify-between")}>
              <View>
                <Text style={tw("text-xl font-bold")}>{name}</Text>
                <Text style={[tw("text-sm"), { color: "#59c1cc" }]}>
                  ID:{userId}
                </Text>
              </View>
            </View>
            <View style={tw("flex-row items-center justify-end")}>
              {loading ? (
                <ActivityIndicator color="#59c1cc" />
              ) : (
                <View style={{left:250}}>
                  
                  <Text style={{ color: "#59c1cc" }}>{orders.length}X</Text>
                </View>
              )}
              <Feather
                name="codesandbox"
                color={"#59c1cc"}
                size={50}
                style={tw("mb-5 ml-auto")}
              />
            </View>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};
