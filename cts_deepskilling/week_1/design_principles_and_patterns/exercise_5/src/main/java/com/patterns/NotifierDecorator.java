package com.patterns;
public abstract class NotifierDecorator implements Notifier {
    protected final Notifier wrapped;
    public NotifierDecorator(Notifier notifier) { this.wrapped = notifier; }
}
