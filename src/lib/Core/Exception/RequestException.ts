/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

/**
 * Request Exception.
 */
export class RequestException extends Error {
    /**
     * Message.
     *
     * @param message
     */
    public constructor(message: string) {
        super(`Request exception.  ${message}`);
    }
}
