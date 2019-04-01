/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Gateway from "../../";

export interface IGatewayCandle {
    /**
     *
     */
    request: Gateway.IGatewayRequestHTTP | Gateway.IGatewayRequestWebSocket;

    /**
     *
     * @param market
     */
    getCandles(market: string[]): Array<Promise<Gateway.IGatewayCandleModel>>;
}
