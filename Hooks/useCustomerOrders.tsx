import { View, Text } from "react-native";
import React from "react";
import { useQuery } from "@apollo/client";
import { GetOrders } from "../Graphql/queries";

export const useCustomerOrders = () => {
  const { loading, error, data } = useQuery(GetOrders);

  return (
    <View>
      <Text>useCustomerOrders</Text>
    </View>
  );
};
