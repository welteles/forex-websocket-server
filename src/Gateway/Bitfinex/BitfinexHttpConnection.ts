/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import { AxiosInstance } from "axios";
import * as Core from "../../Core";

export class BitfinexHttpConnection implements Core.IGatewayHttpConnection {
    public readonly connection: AxiosInstance;
    public readonly key: string;
    public readonly privateURL: string;
    public readonly publicURL: string;
    public readonly secret: string;

    public privateRequest(): Promise<any> {
        return Promise.resolve();
    }

    public publicRequest(): Promise<any> {
        return Promise.resolve();
    }
}
