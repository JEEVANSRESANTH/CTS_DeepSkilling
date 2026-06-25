package PLSQL_Exercises.exercise_1;

public class FinancialForecasting {

    /**
     * Recursive method to calculate future value.
     * Time Complexity: O(n)
     * Space Complexity: O(n) - due to call stack frames
     * * @param initialValue The starting amount.
     * @param rate The annual growth rate (e.g., 0.05 for 5%).
     * @param years The number of years to forecast.
     * @return The predicted future value.
     */
    public static double calculateFutureValue(double initialValue, double rate, int years) {
        // Base case: 0 years left, return the current value
        if (years <= 0) {
            return initialValue;
        }

        // Recursive step: call the function for (years - 1)
        // and multiply by the growth factor
        return calculateFutureValue(initialValue, rate, years - 1) * (1 + rate);
    }

    public static void main(String[] args) {
        double startAmount = 1000.0;
        double growthRate = 0.05; // 5%
        int years = 10;

        double result = calculateFutureValue(startAmount, growthRate, years);

        System.out.println("Initial Amount: " + startAmount);
        System.out.println("Growth Rate: " + (growthRate * 100) + "%");
        System.out.println("Predicted Value after " + years + " years: " + String.format("%.2f", result));
    }
}