package com.patterns;
public class PayPalAdapter implements PaymentProcessor {
    private final PayPalGateway payPal;
    public PayPalAdapter(PayPalGateway payPal) { this.payPal = payPal; }
    @Override
    public void processPayment(double amount) { payPal.makePayPalPayment(amount); }
}
