package com.cognizant.payment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class PaymentApplication {
    public static void main(String[] args) {
        SpringApplication.run(PaymentApplication.class, args);
        System.out.println("Payment Service with Circuit Breaker running on port 8083");
        System.out.println("Test success: POST http://localhost:8083/payments/process");
        System.out.println("  Body: {\"orderId\":\"ORD001\", \"amount\":500}");
        System.out.println("Test fallback: change amount to 999999 to trigger circuit breaker");
    }
}
