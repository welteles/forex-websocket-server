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
import { WebSocketServer } from "../src/lib/Core";

Test("Socket server", t => {
    const socketServer = new (WebSocketServer as any)();
    socketServer.webSocketServer.on("connection", (ws: any) => {
        ws.send("Hello World!");
    });
    const ws = new Websocket("ws://localhost:8080");
    const wsConnect = new Promise((resolve, reject) => {
        ws.on("message", message => {
            t.true(message.toString() === "Hello World!");
        });
    });
    return wsConnect.then();
});
