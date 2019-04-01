/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Gateway from "./../";
export interface IGatewayTrade {
    /**
     *
     */
    request: Gateway.IGatewayRequestHTTP | Gateway.IGatewayRequestWebSocket;
    /**
     *
     * @param market
     */
    getTrades(market?: string[]): Array<Promise<Gateway.IGatewayTradeModel>>;
}
