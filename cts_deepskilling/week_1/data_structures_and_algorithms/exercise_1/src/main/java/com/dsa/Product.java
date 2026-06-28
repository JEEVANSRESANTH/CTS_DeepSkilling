package com.dsa;
public class Product {
    private int productId;
    private String productName;
    private int quantity;
    private double price;
    public Product(int productId, String productName, int quantity, double price) {
        this.productId=productId; this.productName=productName; this.quantity=quantity; this.price=price;
    }
    public int getProductId()       { return productId; }
    public String getProductName()  { return productName; }
    public int getQuantity()        { return quantity; }
    public double getPrice()        { return price; }
    public void setQuantity(int q)  { this.quantity = q; }
    public void setPrice(double p)  { this.price = p; }
    @Override public String toString() {
        return "Product{id=" + productId + ", name='" + productName + "', qty=" + quantity + ", price=$" + price + "}";
    }
}
