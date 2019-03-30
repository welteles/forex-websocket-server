import * as Core from "../";

/**
 *
 */
export interface TradeModel {
    /**
     *
     */
    readonly timestamp: number;

    /**
     *
     */
    readonly tradeId: string;

    /**
     *
     */
    readonly price: number;

    /**
     *
     */
    readonly amount: number;

    /**
     *
     */
    readonly takerSide: Core.TakerSide;
}
