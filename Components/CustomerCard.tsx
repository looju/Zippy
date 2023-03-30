import React from 'react'
import { useCustomerOrdersById } from './../Hooks/useCustomerOrdersById';

type Props={
    name:string
    email:string
    userId:string
}

export const CustomerCard=({name:email,userId}:Props)=>{
  const  { loading, error, orders }=useCustomerOrdersById(userId)
  
}