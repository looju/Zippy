import { View, Text } from 'react-native'
import React from 'react'
import { TabStackParamList } from '../Navigator/TabNavigator';
import { RootStackParamList } from '../Navigator/RootNavigator';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';



type OrderScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList,"Orders">,
  NativeStackNavigationProp<RootStackParamList>
>;

const navigation=useNavigation<OrderScreenNavigationProp>()


export const OrderScreens = () => {
  return (
    <View>
      <Text>OrderScreen</Text>
    </View>
  )
}
