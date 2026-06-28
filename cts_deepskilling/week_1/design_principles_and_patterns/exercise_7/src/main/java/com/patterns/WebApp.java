package com.patterns;
public class WebApp implements Observer {
    @Override public void update(String stockName, double price) {
        System.out.println("[WebApp]    " + stockName + " price updated to $" + price);
    }
}
