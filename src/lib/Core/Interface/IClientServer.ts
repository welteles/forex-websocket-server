/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * Client server.
 */
export interface IClientServer {
    /**
     * Stream service.
     */
    streamService(base?: string): void;
}
