import React from "react";

export interface Product {
  key: number;
  itemId: string;
  itemName: string;
  itemPrice: number;
  qty: number;
}

export interface Request {
  id: string;
  requestDate: string;
  desicionDate: string;
  decidedBy: string;
  distributionRun: string;
  status: string;
  runStatus: string;
  note: string;
  warehouse: string;
  products: any[];
}

export const WARE_HOUSES = [
  {
    id: 1,
    name: "Colombo Central Warehouse",
  },
  {
    id: 2,
    name: "Kandy Regional Warehouse",
  },
  {
    id: 3,
    name: "Galle Regional Warehouse",
  },
];

export const MOCK_PRODUCTS: Product[] = [
  {
    key: 1,
    itemId: "001",
    itemName: "Sugar",
    itemPrice: 200,
    qty: 1000,
  },
  {
    key: 2,
    itemId: "002",
    itemName: "Milk Powderr",
    itemPrice: 1050,
    qty: 200,
  },
  {
    key: 3,
    itemId: "003",
    itemName: "Milk",
    itemPrice: 240,
    qty: 1500,
  },
  {
    key: 4,
    itemId: "004",
    itemName: "Flour",
    itemPrice: 350,
    qty: 750,
  },
  {
    key: 5,
    itemId: "005",
    itemName: "Water bottle",
    itemPrice: 70,
    qty: 1200,
  },
];

export const MockRequests: Request[] = [
  {
    id: "REQ-001",
    requestDate: "2026-10-20",
    desicionDate: "2026-10-21",
    decidedBy: "Nimal Perera",
    distributionRun: "RUN-101",
    status: "Approved",
    runStatus: "Completed",
    note: "Monthly Restock for Colombo Outlets",
    warehouse: "Colombo Central Warehouse",
    products: [
      { name: "Sugar", sku: "001", requestedQty: 200, availableQty: 1000 },
      { name: "Rice", sku: "003", requestedQty: 300, availableQty: 1500 },
    ],
  },
];
