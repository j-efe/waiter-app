import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import {Container } from "./styles";

const orders: Order[] = [
  {
    "_id": "6376580fff5944364204f49f",
    "table": "3",
    "status": "IN_PRODUCTION",
    "products": [
      {
        "product": {

          "name": "Coca-Cola",
          "imagePath": "1668698004471-coca-cola.png",
          "price": 7,
        },
        "quantity": 1,
        "_id": "6376580fff5944364204f4a0"
      },
      {
        "product": {

          "name": "Coca-Cola",
          "imagePath": "1668698004471-coca-cola.png",
          "price": 7,
        },
        "quantity": 1,
        "_id": "6376580fff5944364204f4a0"
      }
    ]
  }
];

export function Orders() {
  return (
    <Container>
      <OrdersBoard
        icon ="⌚"
        title= "Fila de espera"
        orders= {[]}
      />
      <OrdersBoard
        icon ="🐀"
        title= "Em preparação"
        orders= {orders}

      />
      <OrdersBoard
        icon ="🧔"
        title= "Pronto!"
        orders= {[]}

      />
    </Container>
  );
}
