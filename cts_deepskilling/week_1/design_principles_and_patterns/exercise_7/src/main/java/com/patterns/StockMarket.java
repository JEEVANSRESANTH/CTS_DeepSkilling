package com.patterns;
import java.util.ArrayList;
import java.util.List;
public class StockMarket implements Stock {
    private final List<Observer> observers = new ArrayList<>();
    private String stockName;
    private double price;
    public void setStockPrice(String stockName, double price) {
        this.stockName = stockName; this.price = price; notifyObservers();
    }
    @Override public void registerObserver(Observer o)   { observers.add(o); }
    @Override public void deregisterObserver(Observer o) { observers.remove(o); }
    @Override public void notifyObservers() { observers.forEach(o -> o.update(stockName, price)); }
}
