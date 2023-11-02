export interface IOrderValidator {
  fecha: string;
  hora: string;
  precio: number;
  camp_id: string;
  user_id: string;
  sc_id: string;
}

export interface IOrderResponse extends IOrder {
  _id: string;
}

export interface IOrderController {
  getOrders(): Promise<IOrderResponse[]>;
  getOrdersByUserId(userId: string): Promise<IOrderResponse[]>;
  getOrderById(orderId: string): Promise<IOrderResponse | null>;
  createCheckout(data: IOrderValidator, originUrl: string): Promise<string>;
  createOrder(payment: string | number,): Promise<any>;
}
