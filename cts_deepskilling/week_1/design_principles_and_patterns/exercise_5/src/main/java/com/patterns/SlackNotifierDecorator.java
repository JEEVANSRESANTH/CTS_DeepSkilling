package com.patterns;
public class SlackNotifierDecorator extends NotifierDecorator {
    public SlackNotifierDecorator(Notifier notifier) { super(notifier); }
    @Override public void send(String message) {
        wrapped.send(message);
        System.out.println("Slack: " + message);
    }
}
