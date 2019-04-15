/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import { IRates } from "./IRates";

/**
 * Model currencies.
 */
export interface ICurrencies {
    /**
     * Base currency.
     */
    base: string;

    /**
     * Rates.
     */
    rates: IRates[];

    /**
     * timestamp.
     */
    timestamp: number;
}
