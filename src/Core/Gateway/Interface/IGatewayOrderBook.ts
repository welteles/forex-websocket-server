/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */
import * as Core from "../../index";
export interface IGatewayOrderBook {
    getOrderBook(market: string[], depth: number): Promise<Core.IGatewayOrderBookModel>[];
}
