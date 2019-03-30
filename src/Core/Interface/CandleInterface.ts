import * as Core from "../";
export interface CandleInterface {
    getCandles(market: string[]): Array<Promise<Core.CandleModel>>;
}
