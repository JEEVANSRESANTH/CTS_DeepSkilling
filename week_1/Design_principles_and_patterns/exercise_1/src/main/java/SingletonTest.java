public class SingletonTest {
    public static void main(String[] args) {
        // Get the first instance
        Logger logger1 = Logger.getInstance();

        // Get the second instance
        Logger logger2 = Logger.getInstance();

        // Verify if both references point to the same object
        if (logger1 == logger2) {
            System.out.println("Success: Both references point to the same instance.");
        } else {
            System.out.println("Failure: Different instances were created.");
        }

        logger1.log("This is a test message.");
    }
}