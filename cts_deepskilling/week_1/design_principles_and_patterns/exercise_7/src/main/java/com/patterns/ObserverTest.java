package com.patterns;
public class ObserverTest {
    public static void main(String[] args) {
        StockMarket market = new StockMarket();
        Observer mobile = new MobileApp();
        Observer web    = new WebApp();
        market.registerObserver(mobile);
        market.registerObserver(web);
        market.setStockPrice("AAPL", 182.50);
        market.deregisterObserver(web);
        market.setStockPrice("GOOGL", 140.20);
    }
}
