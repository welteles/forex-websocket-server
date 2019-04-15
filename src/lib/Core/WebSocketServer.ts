/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as WebSocket from "ws";
import { Logger } from "./";

export abstract class WebSocketServer {
    /**
     *
     */
    public readonly webSocketServer: WebSocket.Server;

    /**
     *
     */
    public constructor(port: number = 8080) {
        this.webSocketServer = new WebSocket.Server({ port });
        Logger.transport().info(`WebSocket server start at port ${port}`);
    }
}
