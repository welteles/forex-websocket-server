/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import Test from "ava";
import { ExchangeRateApiRequest } from "../../src/lib/Core/Client/ExchangeRateApi";

Test("Rates rest test", t => {
    return new ExchangeRateApiRequest().getCurrencyRates().then(() => t.pass());
});
