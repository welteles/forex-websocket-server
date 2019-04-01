/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

export interface ITransport {

    /**
     *
     * @param data
     */
    create(data: any): Promise<any>;

    /**
     *
     * @param data
     */
    createMultiple(data: any[]): Promise<any>;
}