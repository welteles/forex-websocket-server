/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../../index";

/**
 * Trade mode.
 */
export interface IGatewayTradeModel {
    /**
     * Timestamp.
     */
    readonly timestamp: number;

    /**
     * Trade id.
     */
    readonly tradeId: string;

    /**
     * Price.
     */
    readonly price: number;

    /**
     * Quantity.
     */
    readonly amount: number;

    /**
     * Taker side buy / sell.
     */
    readonly takerSide: Core.GatewayTakerSide;
}
