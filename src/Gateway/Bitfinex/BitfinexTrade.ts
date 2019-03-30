import * as Core from "../../Core";

export class BitfinexTrade implements Core.TradeInterface {
    public getTrades(market: string[]): Array<Promise<Core.TradeModel>> {
        return [];
    }
}
