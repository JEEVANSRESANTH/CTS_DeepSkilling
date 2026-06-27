package com.logger;

public class LoggerTest {

    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("First log message");
        logger2.log("Second log message");

        if (logger1 == logger2) {
            System.out.println("Singleton verified: both references point to the same Logger instance.");
        } else {
            System.out.println("Singleton FAILED: different instances were created.");
        }
    }
}
