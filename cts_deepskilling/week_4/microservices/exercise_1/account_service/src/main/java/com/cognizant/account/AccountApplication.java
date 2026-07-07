package com.cognizant.account;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class AccountApplication {
    public static void main(String[] args) {
        SpringApplication.run(AccountApplication.class, args);
        System.out.println("Account Service running on port 8080");
        System.out.println("Test: GET http://localhost:8080/accounts/00987987973432");
    }
}
