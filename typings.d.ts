type Customer={
    email:String;
    name:String
}

type CustomerList={
    name:ID;
    value:Customer
}

type trackingItems={
    customer_id: String
    items: [Items]
    customer:Customer
}

type Items={
    item_id: ID
    name: String
    price: Number
    quantity: Number
}