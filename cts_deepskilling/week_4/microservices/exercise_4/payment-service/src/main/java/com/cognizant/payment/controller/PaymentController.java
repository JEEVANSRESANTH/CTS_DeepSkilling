package com.cognizant.payment.controller;

import com.cognizant.payment.service.ThirdPartyPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/payments")
public class PaymentController {

    @Autowired
    private ThirdPartyPaymentService paymentService;

    @PostMapping("/process")
    public Map<String, String> processPayment(@RequestBody Map<String, Object> request) {
        String orderId = (String) request.get("orderId");
        double amount  = Double.parseDouble(request.get("amount").toString());

        String result = paymentService.processPayment(orderId, amount);
        return Map.of("result", result);
    }
}
