type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type TrackingItems = {
  customer_id: string;
  items: [Items];
  customers: Customer
};

type Items = {
  item_id: ID;
  name: string;
  price: Number;
  quantity: Number;
};

type Order = {
  Address: string;
  City: string;
  lat: number;
  lng: number;
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
  trackingItems:TrackingItems
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};
