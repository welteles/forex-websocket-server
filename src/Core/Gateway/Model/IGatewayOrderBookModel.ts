/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * Gateway OrderBook model.
 */
export interface IGatewayOrderBookModel {
    /**
     * Price.
     */
    readonly price: number;
    /**
     * Quantity.
     */
    readonly amount: number;
}
