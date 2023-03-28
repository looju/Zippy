import { View, Text } from 'react-native'
import React,{useState} from 'react'
import { useQuery } from '@apollo/client'
import { GetOrders } from '../Graphql/queries'

const useCustomerOrders = () => {
const {loading,error,data}=useQuery(GetOrders)
const [orders,setOrders]=useState<Order[]>([])

  return (
    <View>
      <Text>useCustomerOrders</Text>
    </View>
  )
}

export default useCustomerOrders