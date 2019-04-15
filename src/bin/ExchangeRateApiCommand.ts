/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import { ExchangeRateApiServer } from "../lib/Core/Client/ExchangeRateApi";
new ExchangeRateApiServer(process.env.PORT).streamService();
