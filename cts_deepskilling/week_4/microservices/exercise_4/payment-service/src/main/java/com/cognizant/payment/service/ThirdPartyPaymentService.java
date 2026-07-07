package com.cognizant.payment.service;

import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ThirdPartyPaymentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(ThirdPartyPaymentService.class);
    private static final String CIRCUIT_BREAKER_NAME = "thirdPartyPayment";

    // Simulates a call to a slow or unreliable third-party payment API
    @CircuitBreaker(name = CIRCUIT_BREAKER_NAME, fallbackMethod = "paymentFallback")
    public String processPayment(String orderId, double amount) {
        LOGGER.info("Calling third-party payment API for order: {}", orderId);

        // Simulate intermittent failure (fail if amount is negative or > 100000)
        if (amount < 0 || amount > 100000) {
            throw new RuntimeException("Third-party API timeout / failure for order: " + orderId);
        }

        return String.format("Payment of %.2f processed successfully for order %s", amount, orderId);
    }

    // Fallback method - called when circuit breaker opens or exception occurs
    public String paymentFallback(String orderId, double amount, Throwable ex) {
        LOGGER.error("FALLBACK triggered for order: {} | Reason: {}", orderId, ex.getMessage());
        return String.format(
            "Payment service temporarily unavailable for order %s. " +
            "Please retry after some time. (Fallback response)", orderId
        );
    }
}
