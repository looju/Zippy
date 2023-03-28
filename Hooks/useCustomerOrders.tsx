import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GetOrders } from "../Graphql/queries";

export const useCustomerOrders = () => {
  const { loading, error, data } = useQuery(GetOrders);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders:Order=data.getOrders.map(({value}:OrderResponse)=>({
      carrier:value.carrier
    }))
  }, [data]);

  return (
    <View>
      <Text>useCustomerOrders</Text>
    </View>
  );
};
