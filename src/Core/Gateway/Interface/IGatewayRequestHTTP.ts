/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Core from "../";

export interface IGatewayRequestHTTP {
    /**
     * Default Public.
     */
    typeRequest?: Core.GatewayTypeRequest;

    /**
     * Default Get.
     */
    method?: Core.GatewayMethod;

    /**
     * End Point.
     */
    endPoint: string;
}