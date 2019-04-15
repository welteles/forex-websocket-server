/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import Test from "ava";
import * as Websocket from "ws";
import { ExchangeRateApiServer } from "../../src/lib/Core";

Test("Socket server", t => {
    const exchangeRateApiServer = new ExchangeRateApiServer();
    exchangeRateApiServer.streamService();
    const ws = new Websocket("ws://localhost:8080");
    const wsConnect = new Promise((resolve, reject) => {
        let count = 0;
        ws.on("message", message => {
            console.log(message);
            if (count === 5) {
                resolve();
            }
            count++;
        });
    });
    return wsConnect.then(message => {
        t.pass();
    });
});
