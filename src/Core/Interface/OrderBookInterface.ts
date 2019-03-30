import * as Core from "../";
export interface OrderBookInterface {
    getOrderBook(market: string[], depth: number): Core.OrderBookInterface;
}
