/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Core from "../../Core";
import * as Gateway from "../index";

export class BitfinexGateway implements Core.IGateway {
    public readonly candle: Core.IGatewayCandle;
    public readonly connection:
        | Core.IGatewayHttpConnection
        | Core.IGatewayWebSocketConnection;
    public readonly orderBook: Core.IGatewayOrderBook;
    public readonly trade: Core.IGatewayTrade = new Gateway.BitfinexTrade();
}
