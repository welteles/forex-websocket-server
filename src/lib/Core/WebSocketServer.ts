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

/**
 * Abstract Web socket server.
 */
export abstract class WebSocketServer {
    /**
     * Web socket server.
     */
    public readonly webSocketServer: WebSocket.Server;

    /**
     * Default port.
     */
    public readonly port: number = 8080;

    /**
     * Constructor.
     */
    public constructor(port: any) {
        if (port === undefined) {
            port = this.port;
        }
        this.webSocketServer = new WebSocket.Server({ port });
        Logger.transport().info(`WebSocket server start at port ${port}`);
    }
}
