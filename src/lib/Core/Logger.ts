/*
 * Copyright (C) 2019 CryptoData.
 * All Rights Reserved.
 *
 * Unauthorized copying of this file, via any medium is strictly prohibited.
 *
 * Proprietary and confidential.
 */

import * as Winston from "winston";

/**
 * Default transport logger.
 */
export abstract class Logger {
    /**
     * Transport logger.
     */
    public static transport(): Winston.Logger {
        if (Logger.transportStatic === undefined) {
            Logger.transportStatic = Winston.createLogger({
                level: "debug",
                format: Winston.format.combine(
                    Winston.format.timestamp(),
                    Winston.format.simple(),
                    Winston.format.printf((msg: any) =>
                        Winston.format
                            .colorize()
                            .colorize(
                                msg.level,
                                `${msg.timestamp} - ${msg.level}: ${
                                    msg.message
                                }`
                            )
                    )
                ),
                transports: [new Winston.transports.Console()]
            });
        }
        return Logger.transportStatic;
    }
    /**
     * Transport static.
     */
    private static transportStatic: Winston.Logger;
}
