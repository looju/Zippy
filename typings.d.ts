type Customer={
    email:string;
    name:string
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