/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Core from "../../";

/**
 * Exchange rate api server.
 */
export class ExchangeRateApiServer extends Core.WebSocketServer
    implements Core.IClientServer {
    /**
     * Stream service.
     */
    public streamService(base?: string): void {
        this.webSocketServer.on("connection", ws =>
            new Core.ExchangeRateApiService(ws).getCurrencyRates(base).then()
        );
    }
}
