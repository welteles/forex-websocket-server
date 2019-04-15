/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import Bottleneck from "bottleneck";
import WebSocket = require("ws");
import * as Core from "../../";

/**
 * Service exchange rate api.
 */
export class ExchangeRateApiService implements Core.IClientService {
    /**
     * Web socket.
     */
    private webSocket: WebSocket;

    /**
     * Message.
     */
    private message!: Core.ICurrencies;

    /**
     * Interval requests.
     */
    private readonly minTime: number = 1000;

    /**
     * Max concurrent requests.
     */
    private readonly maxConcurrent: number = 1;

    /**
     * Bottleneck schedule.
     */
    private readonly bottleneck: Bottleneck;

    /**
     * Constructor.
     *
     * @param webSocket
     */
    public constructor(webSocket: any) {
        this.bottleneck = new Bottleneck({
            maxConcurrent: this.maxConcurrent,
            minTime: this.minTime
        });
        this.webSocket = webSocket;
    }

    /**
     * Get currency rates.
     */
    public getCurrencyRates(base?: string): Promise<void> {
        return this.bottleneck.schedule(() =>
            new Core.ExchangeRateApiRequest()
                .getCurrencyRates(base)
                .then(message => {
                    if (
                        this.message === undefined ||
                        JSON.stringify(message.rates) !==
                            JSON.stringify(this.message.rates)
                    ) {
                        this.webSocket.send(JSON.stringify(message));
                        this.message = message;
                        this.getCurrencyRates(base).then();
                    }
                })
        );
    }
}
