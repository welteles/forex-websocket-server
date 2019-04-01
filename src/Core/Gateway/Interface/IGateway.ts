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
 * Gateway class.
 */
export interface IGateway {
    /**
     * Gateway connection.
     */
    readonly connection:
        | Core.IGatewayHttpConnection
        | Core.IGatewayWebSocketConnection;

    /**
     * Trades.
     */
    readonly trade: Core.IGatewayTrade;

    /**
     * OrderBook.
     */
    readonly orderBook: Core.IGatewayOrderBook;

    /**
     * Candles
     */
    readonly candle: Core.IGatewayCandle;
}
