import { View, Text, ScrollView, Image } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { TextInput, Searchbar } from "react-native-paper";
import { useTailwind } from "tailwind-rn/dist";
import { CustomerCard } from "../Components/CustomerCard";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { useQuery } from "@apollo/client";
import { GetCustomers } from "../Graphql/queries";

export type CustomerScreensNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const CustomerScreens = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomerScreensNavigationProps>();
  const [input, setInput] = useState<string>("");
  const { loading, error, data } = useQuery(GetCustomers);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);





  return (
    <ScrollView style={{ backgroundColor: "#87cefa", flex: 1 }}>
      <Image
        source={require("../assets/freight.jpg")}
        style={[tw("w-full"),{height:200}]}
      />
      <Searchbar
        value={input}
        onChangeText={(text) => setInput(text)}
        inputStyle={tw("items-center justify-center")}
        style={[tw("bg-white pb-0 pt-0 px-10 mb-10"),{top:20}]}
        placeholder="Search by id"
      />

      {data?.getCustomer
        ?.filter((customer: CustomerList) =>
          customer.value.name.includes(input)
        )
        .map(({ name: ID, value: { email, name } }: CustomerResponse) => 
          <CustomerCard name={name} email={email} key={ID} userId={ID} />
        )}
    </ScrollView>
  );
};
