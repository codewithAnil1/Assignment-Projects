// src/data/sampleData.js
export const customers = [
  {
    id: 1,
    customer: 11908,
    customer_profile: {
      name: "John Doe",
      color: [182, 73, 99],
      email: "john_doe@example.com",
      pincode: "12345",
      location_name: "New York, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 2,
    customer: 11909,
    customer_profile: {
      name: "Jane Smith",
      color: [0, 123, 255],
      email: "jane_smith@example.com",
      pincode: "54321",
      location_name: "Los Angeles, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 3,
    customer: 11910,
    customer_profile: {
      name: "Alice Johnson",
      color: [0, 255, 0],
      email: "alice_johnson@example.com",
      pincode: "67890",
      location_name: "Chicago, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 4,
    customer: 11911,
    customer_profile: {
      name: "Bob Brown",
      color: [255, 0, 0],
      email: "bob_brown@example.com",
      pincode: "09876",
      location_name: "Houston, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 5,
    customer: 11912,
    customer_profile: {
      name: "Charlie Green",
      color: [123, 255, 0],
      email: "charlie_green@example.com",
      pincode: "56789",
      location_name: "Phoenix, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 6,
    customer: 11913,
    customer_profile: {
      name: "David Blue",
      color: [0, 0, 255],
      email: "david_blue@example.com",
      pincode: "23456",
      location_name: "Philadelphia, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 7,
    customer: 11914,
    customer_profile: {
      name: "Ella White",
      color: [255, 255, 255],
      email: "ella_white@example.com",
      pincode: "34567",
      location_name: "San Antonio, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  {
    id: 8,
    customer: 11915,
    customer_profile: {
      name: "Frank Black",
      color: [0, 0, 0],
      email: "frank_black@example.com",
      pincode: "45678",
      location_name: "San Diego, USA",
      type: "C",
      profile_pic: null,
      gst: ""
    }
  },
  // Add more customers as needed
];

export const products = [
  {
    id: 1,
    name: "Product A",
    sku: [
      { id: 101, selling_price: 10, quantity_in_inventory: 100, unit: "kg" },
    
    ],
  },
  {
    id: 2,
    name: "Product B",
    sku: [
      { id: 201, selling_price: 20, quantity_in_inventory: 30, unit: "kg" },
     
    ],
  },
  {
    id: 3,
    name: "Product C",
    sku: [
      { id: 301, selling_price: 30, quantity_in_inventory: 40, unit: "kg" },
     
    ],
  },
  {
    id: 4,
    name: "Product D",
    sku: [
      { id: 401, selling_price: 40, quantity_in_inventory: 70, unit: "kg" },
      { id: 402, selling_price: 45, quantity_in_inventory: 80, unit: "kg" },
    ],
  },
  {
    id: 5,
    name: "Product E",
    sku: [
      { id: 501, selling_price: 50, quantity_in_inventory: 90, unit: "kg" },
     
    ],
  },
  {
    id: 6,
    name: "Product F",
    sku: [
      { id: 601, selling_price: 60, quantity_in_inventory: 110, unit: "kg" },
      
    ],
  },
  {
    id: 7,
    name: "Product G",
    sku: [
      { id: 701, selling_price: 70, quantity_in_inventory: 130, unit: "kg" },
      
    ],
  },
  {
    id: 8,
    name: "Product H",
    sku: [
      { id: 801, selling_price: 80, quantity_in_inventory: 150, unit: "kg" },
     
    ],
  },
  {
    id: 9,
    name: "Product I",
    sku: [
      { id: 901, selling_price: 90, quantity_in_inventory: 170, unit: "kg" },
     
    ],
  },
  {
    id: 10,
    name: "Product J",
    sku: [
      { id: 1001, selling_price: 100, quantity_in_inventory: 190, unit: "kg" },
      
    ],
  },
  // Add more products as needed
];

export const initialSaleOrders = [
  {
    customer_id: 11908,
    customerName: "Anil",
    items: [
      { sku_id: 101, price: 10, quantity: 2 },
      { sku_id: 201, price: 20, quantity: 1 },
    ],
    totalPrice: 375,
    paid: false,
    invoice_no: "Invoice - 1212121",
    invoice_date: "2024-05-07",
  },
  {
    customer_id: 11909,
    customerName: "rita",
    items: [
      { sku_id: 301, price: 30, quantity: 3 },
      { sku_id: 401, price: 40, quantity: 2 },
    ],
    paid: true,
    totalPrice: 9870,
    invoice_no: "Invoice - 1212122",
    invoice_date: "2024-05-08",
  },
  {
    customer_id: 11910,
    customerName: "Akash",
    totalPrice: 9393,
    items: [
      { sku_id: 501, price: 50, quantity: 4 },
      { sku_id: 601, price: 60, quantity: 3 },
    ],
    paid: false,
    invoice_no: "Invoice - 1212123",
    invoice_date: "2024-05-09",
  },
  // {
  //   customer_id: 11911,
  //   customerName: "raj",
  //   totalPrice: 4444,
  //   items: [
  //     { sku_id: 701, price: 70, quantity: 5 },
  //     { sku_id: 801, price: 80, quantity: 4 },
  //   ],
  //   paid: true,
  //   invoice_no: "Invoice - 1212124",
  //   invoice_date: "2024-05-10",
  // },
  {
    customer_id: 11912,
    customerName: "Ankita",
    totalPrice: 1430,

    items: [
      { sku_id: 901, price: 90, quantity: 6 },
      { sku_id: 1001, price: 100, quantity: 5 },
    ],
    paid: false,
    invoice_no: "Invoice - 1212125",
    invoice_date: "2024-05-11",
  },
  // {
  //   customer_id: 11913,
  //   items: [
  //     { sku_id: 202, price: 25, quantity: 3 },
  //     { sku_id: 302, price: 35, quantity: 4 },
  //   ],
  //   paid: true,
  //   invoice_no: "Invoice - 1212126",
  //   invoice_date: "2024-05-12",
  // },
  // {
  //   customer_id: 11914,
  //   items: [
  //     { sku_id: 402, price: 45, quantity: 2 },
  //     { sku_id: 502, price: 55, quantity: 1 },
  //   ],
  //   paid: false,
  //   invoice_no: "Invoice - 1212127",
  //   invoice_date: "2024-05-13",
  // },
  // {
  //   customer_id: 11915,
  //   items: [
  //     { sku_id: 602, price: 65, quantity: 3 },
  //     { sku_id: 702, price: 75, quantity: 2 },
  //   ],
  //   paid: true,
  //   invoice_no: "Invoice - 1212128",
  //   invoice_date: "2024-05-14",
  // },
  // Add more sale orders as needed
];
