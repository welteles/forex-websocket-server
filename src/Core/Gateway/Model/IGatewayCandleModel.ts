/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
/**
 * Candle model.
 */
export interface IGatewayCandleModel {
    /**
     * Timestamp.
     */
    readonly timestamp: number;

    /**
     * Open price.
     */
    readonly open: number;

    /**
     * High price.
     */
    readonly high: number;

    /**
     * Low price.
     */
    readonly low: number;

    /**
     * Close price.
     */
    readonly close: number;

    /**
     * Volume value.
     */
    readonly volume: number;
}
