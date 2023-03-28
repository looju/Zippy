type Customer = {
  email: string;
  name: string;
};

type CustomerList = {
  name: ID;
  value: Customer;
};

type trackingItems = {
  customer_id: string;
  items: [Items];
  customer: Customer
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
  Lat: number;
  Lng: number;
  carrier: string;
  createdAt: string;
  shippingCost: number;
  trackingId: string;
};

type OrderResponse = {
  value: Order;
};

type CustomerResponse = {
  name: ID;
  value: Customer;
};
