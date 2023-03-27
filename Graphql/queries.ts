import { gql, useQuery } from '@apollo/client';


export const GetCustomers=gql `query GetCustomer{
getCustomer{
    value{
        email
        name
    }
    name
}
}`

