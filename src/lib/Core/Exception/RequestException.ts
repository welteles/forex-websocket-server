/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 *
 */
export class RequestException extends Error {
    /**
     *
     * @param message
     */
    public constructor(message: string) {
        super(message);
    }
}
