import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GetOrders } from "../Graphql/queries";

export const useOrders = () => {
  const { loading, error, data } = useQuery(GetOrders);
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!data) return;

    const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
      carrier: value.carrier,
      lat: value.Lat,
      lng: value.Lng,
      address: value.Address,
      city: value.City,
      createdAt: value.createdAt,
      shippingCost: value.shippingCost,
      trackingId: value.trackingId,
      trackingItems:value.trackingItems
    }));

    setOrders(orders);
  }, [data]);

  return { loading, error, orders };
};
