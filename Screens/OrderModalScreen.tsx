import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { TabStackParamList } from "../Navigator/TabNavigator";
import { RootStackParamList } from "../Navigator/RootNavigator";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { DeliveryCard } from "../Components/DeliveryCard";

type OrderModalScreenRouteProps = RouteProp<RootStackParamList,'OrderModalScreen'>;

type OrderModalScreenNavigationProps = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

export const OrderModalScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<OrderModalScreenNavigationProps>();
  const {params:{order}}=useRoute<OrderModalScreenRouteProps>()
  

  useLayoutEffect(() => {
    navigation.setOptions({
        headerTitle:order.trackingItems.customer?.name,
        headerTitleStyle:{color:"#000"},
        headerBackTitle:"Deliveries",
        headerTintColor:"##EB6A7C"
    });
  }, [order]);

  return (
    <View style={tw("mt-2")}>
     <DeliveryCard order={order} fullWidth/>
    </View>
  );
};
