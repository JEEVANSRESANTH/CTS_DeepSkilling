package com.cognizant.loan;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LoanApplication {
    public static void main(String[] args) {
        SpringApplication.run(LoanApplication.class, args);
        System.out.println("Loan Service running on port 8081");
        System.out.println("Test: GET http://localhost:8081/loans/H00987987972342");
    }
}
