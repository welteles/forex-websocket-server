/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Request from "request";

/**
 * Request promise.
 */
export abstract class HTTPRequestPromise {
    /**
     * Default request.
     *
     * @param endPoint
     */
    public static getJSON(endPoint: string): Promise<any> {
        return Promise.resolve(
            new Promise((resolve, reject) => {
                Request(endPoint, (error, response, body) => {
                    if (error !== null) {
                        return reject;
                    }
                    return resolve(JSON.parse(body));
                });
            })
        );
    }
}
