import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { TabStackParamList } from '../Navigator/TabNavigator';
import { RootStackParamList } from '../Navigator/RootNavigator';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useTailwind } from 'tailwind-rn';
import { useOrders } from './../Hooks/useOrders';



type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList,"Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;


export const OrderScreens = () => {
  const navigation=useNavigation<OrderScreenNavigationProp>()
  const tw=useTailwind()
  const { loading, error, orders }=useOrders()
  const [ascending,setAscending]=useState<boolean>(false)

  return (
    <View>
      <Text>OrderScreen</Text>
    </View>
  )
}
