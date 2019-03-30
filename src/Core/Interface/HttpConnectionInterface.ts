/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import {AxiosInstance} from "axios";

export interface HttpConnectionInterface {
    /**
     * The key of this client.
     */
    key: string;

    /**
     * The secret of this client.
     */
    secret: string;

    /**
     * The public API url.
     */
    publicURL: string;

    /**
     * The private API url.
     */
    privateURL: string;

    /**
     * The underlying connection
     * used for communication.
     */
    connection: AxiosInstance;

    /**
     * The Connection interface.
     */
    constructor(key: string, secret: string): void;

    /**
     * Makes a public api request and returns the response.
     */
    publicRequest(): Promise<any>;

    /**
     * Makes a private api request and returns the response.
     */
    privateRequest(): Promise<any>;
}
