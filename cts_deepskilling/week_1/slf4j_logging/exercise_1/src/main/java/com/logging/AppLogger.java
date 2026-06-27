package com.logging;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class AppLogger {

    private static final Logger logger = LoggerFactory.getLogger(AppLogger.class);

    public static void main(String[] args) {
        logger.trace("TRACE: Detailed diagnostic information.");
        logger.debug("DEBUG: Debugging application flow.");
        logger.info("INFO: Application started successfully.");
        logger.warn("WARN: Low disk space detected.");
        logger.error("ERROR: Failed to connect to database.");

        // Simulating an exception log
        try {
            int result = 10 / 0;
        } catch (ArithmeticException e) {
            logger.error("ERROR: Arithmetic exception occurred - {}", e.getMessage(), e);
        }
    }
}
