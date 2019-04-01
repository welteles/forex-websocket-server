/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Core from "../../Core";
import * as Gateway from "./";

export class HuobiGateway implements Core.IGateway {
    public readonly connection:
        | Core.IGatewayHttpConnection
        | Core.IGatewayWebSocketConnection = new Gateway.HuobiHttpConnection();
    public readonly candle: Core.IGatewayCandle = new Gateway.HuobiCandle();
    public readonly orderBook: Core.IGatewayOrderBook = new Gateway.HuobiOrderBook();
    public readonly trade: Core.IGatewayTrade = new Gateway.HuobiTrade();
}
