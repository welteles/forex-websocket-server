/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../../Core";

export class HuobiOrderBook implements Core.IGatewayOrderBook{
    getOrderBook(market: string[], depth: number): Promise<Core.IGatewayOrderBookModel>[] {
        return [];
    }
}
