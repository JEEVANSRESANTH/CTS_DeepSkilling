package com.patterns;
public class StripeAdapter implements PaymentProcessor {
    private final StripeGateway stripe;
    public StripeAdapter(StripeGateway stripe) { this.stripe = stripe; }
    @Override
    public void processPayment(double amount) { stripe.chargeStripe(amount); }
}
