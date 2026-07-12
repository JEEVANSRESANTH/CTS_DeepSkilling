package com.forecast;

/**
 * Calculates future value using recursion.
 * Also includes an iterative version for comparison.
 */
public class FinancialForecasting {

    // Recursive approach
    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    // Memoized / iterative optimization for large n
    public static double calculateFutureValueIterative(double presentValue, double growthRate, int years) {
        double value = presentValue;
        for (int i = 0; i < years; i++) {
            value *= (1 + growthRate);
        }
        return value;
    }

    public static void main(String[] args) {
        double presentValue = 10000.0;
        double growthRate   = 0.08;   // 8% annual growth
        int    years        = 5;

        double recursive  = calculateFutureValue(presentValue, growthRate, years);
        double iterative  = calculateFutureValueIterative(presentValue, growthRate, years);

        System.out.printf("Present Value  : ₹%.2f%n", presentValue);
        System.out.printf("Growth Rate    : %.0f%%%n", growthRate * 100);
        System.out.printf("Years          : %d%n", years);
        System.out.printf("Future Value (recursive)  : ₹%.2f%n", recursive);
        System.out.printf("Future Value (iterative)  : ₹%.2f%n", iterative);
    }
}
