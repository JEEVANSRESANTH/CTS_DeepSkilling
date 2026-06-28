package com.patterns;
public class AdapterTest {
    public static void main(String[] args) {
        PaymentProcessor paypal = new PayPalAdapter(new PayPalGateway());
        PaymentProcessor stripe = new StripeAdapter(new StripeGateway());
        paypal.processPayment(150.00);
        stripe.processPayment(200.00);
    }
}
