package com.patterns;
public class StrategyTest {
    public static void main(String[] args) {
        PaymentContext ctx = new PaymentContext();
        ctx.setStrategy(new CreditCardPayment()); ctx.executePayment(300.00);
        ctx.setStrategy(new PayPalPayment());     ctx.executePayment(150.00);
    }
}
