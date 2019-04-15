/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Parse from "@raphaabreu/parser";
import * as Core from "../../";

/**
 * Rate api request.
 */
export class ExchangeRateApiRequest implements Core.IClientRequest {
    /**
     * Endpoint rates.
     */
    private static readonly endPoint: string =
        "https://api.exchangeratesapi.io/latest";

    /**
     * Get rate.
     *
     * @param base
     */
    public getCurrencyRates(base: string = "USD"): Promise<Core.ICurrencies> {
        return Core.HTTPRequestPromise.getJSON(
            `${ExchangeRateApiRequest.endPoint}?base=${base}`
        ).then((data: any) => {
            return Promise.resolve({
                base: Parse.nonEmptyText(data.base),
                rates: Object.keys(data.rates).map(currency => {
                    return {
                        [Parse.nonEmptyText(
                            currency
                        ).toUpperCase()]: Parse.positiveFloat(
                            data.rates[currency]
                        )
                    };
                }),
                timestamp: Date.now()
            });
        });
    }
}
