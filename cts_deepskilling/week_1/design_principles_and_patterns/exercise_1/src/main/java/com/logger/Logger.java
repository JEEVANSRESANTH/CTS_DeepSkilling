package com.logger;

public class Logger {

    private static Logger instance;

    private Logger() {
        // private constructor prevents external instantiation
    }

    public static synchronized Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        if (message == null) {
            message = "null";
        }
        System.out.println("[LOG] " + message);
    }
}
