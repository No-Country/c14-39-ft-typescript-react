export interface IOrderValidator {
  fecha: string;
  hora: string;
  precio: number;
  camp_id: string;
  user_id: string;
  sc_id: string;
}

export interface IOrder extends IOrderValidator {
  order_id: string;
  currency: string;
}

export interface IOrderResponse extends IOrder {
  _id: string;
}

export interface IOrderController {
  getOrders(): Promise<IOrderResponse[]>;
  getOrdersByUserId(userId: string): Promise<IOrderResponse[]>;
  createCheckout(data: IOrderValidator): Promise<string>;
  createOrder(payment: string | number,): Promise<any>;
}
