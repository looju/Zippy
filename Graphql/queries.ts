import { gql, useQuery } from "@apollo/client";

export const GetCustomers = gql`
  query GetCustomer {
    getCustomer {
      value {
        email
        name
      }
      name
    }
  }
`;

export const GetOrders = gql`
  query GetOrders {
    getOrders {
      name
      value {
        Address
        Lat
        City
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
        trackingItems {
          customer_id
          customers {
            email
            name
          }
          items {
            item_id
            name
            price
            quantity
          }
        }
      }
    }
  }
`;
