import * as Core from "../";
export interface TradeInterface {
    getTrades(market: string[]): Array<Promise<Core.TradeModel>>;
}
