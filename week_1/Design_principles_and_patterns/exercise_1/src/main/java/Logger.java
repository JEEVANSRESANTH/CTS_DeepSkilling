public class Logger {
    // 1. Private static instance
    private static Logger instance;

    // 2. Private constructor to prevent direct instantiation
    private Logger() {
        System.out.println("Logger Initialized.");
    }

    // 3. Public static method to provide global access point
    public static Logger getInstance() {
        if (instance == null) {
            instance = new Logger();
        }
        return instance;
    }

    public void log(String message) {
        System.out.println("Log entry: " + message);
    }
}