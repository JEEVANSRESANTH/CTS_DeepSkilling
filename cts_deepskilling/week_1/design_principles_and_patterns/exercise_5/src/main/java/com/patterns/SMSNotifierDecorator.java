package com.patterns;
public class SMSNotifierDecorator extends NotifierDecorator {
    public SMSNotifierDecorator(Notifier notifier) { super(notifier); }
    @Override public void send(String message) {
        wrapped.send(message);
        System.out.println("SMS: " + message);
    }
}
