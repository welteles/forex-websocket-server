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

import axios, {AxiosInstance, AxiosRequestConfig} from "axios";
import * as Core from "../../Core";

export class HuobiHttpConnection implements Core.IGatewayHttpConnection {
    public readonly connection: AxiosInstance = axios.create({
        headers: {
            "Content-Type": "application/json"
        }
    });
    public readonly privateURL: string = "https://api.huobi.pro/";
    public readonly publicURL: string = "https://api.huobi.pro/v1/";

    public privateRequest(): Promise<any> {
        return Promise.resolve();
    }

    public publicRequest(options: AxiosRequestConfig): Promise<any> {
        return Promise.resolve(this.connection.request(options));
    }
}
