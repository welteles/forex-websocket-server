/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../../Core";

export class HuobiTrade implements Core.IGatewayTrade {
    public getTrades(
        market: string[]
    ): Array<Promise<Core.IGatewayTradeModel>> {
        return [];
    }
}
