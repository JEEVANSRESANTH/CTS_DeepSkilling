package com.cognizant.springlearn;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {
    public static void main(String[] args) {
        SpringApplication.run(SpringLearnApplication.class, args);
        System.out.println("JWT Auth app running on port 8090");
        System.out.println("1. POST http://localhost:8090/authenticate  -> {\"username\":\"user\",\"password\":\"password\"}");
        System.out.println("2. GET  http://localhost:8090/countries      -> Authorization: Bearer <token>");
    }
}
