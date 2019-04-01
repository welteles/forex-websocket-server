/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import { AxiosInstance } from "axios";

/**
 * Http connection client.
 */
export interface IGatewayHttpConnection {
    /**
     * The key of this client.
     */
    readonly key: string;

    /**
     * The secret of this client.
     */
    readonly secret: string;

    /**
     * The public API url.
     */
    readonly publicURL: string;

    /**
     * The private API url.
     */
    readonly privateURL: string;

    /**
     * The underlying connection
     * used for communication.
     */
    readonly connection: AxiosInstance;

    /**
     * Makes a public api request and returns the response.
     */
    publicRequest(): Promise<any>;

    /**
     * Makes a private api request and returns the response.
     */
    privateRequest(): Promise<any>;
}
