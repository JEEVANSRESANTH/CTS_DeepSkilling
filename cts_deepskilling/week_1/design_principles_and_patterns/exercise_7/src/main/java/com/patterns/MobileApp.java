package com.patterns;
public class MobileApp implements Observer {
    @Override public void update(String stockName, double price) {
        System.out.println("[MobileApp] " + stockName + " price updated to $" + price);
    }
}
