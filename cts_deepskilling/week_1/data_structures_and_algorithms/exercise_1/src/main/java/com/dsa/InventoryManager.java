package com.dsa;
import java.util.HashMap;
import java.util.Map;
// Add O(1), Update O(1), Delete O(1) - HashMap is optimal for keyed lookups
public class InventoryManager {
    private final Map<Integer, Product> inventory = new HashMap<>();

    public void addProduct(Product p)    { 
        if (p == null) {
            System.out.println("Cannot add null product");
            return;
        }
        inventory.put(p.getProductId(), p); System.out.println("Added: " + p); 
    }
    public void updateProduct(int id, int qty, double price) {
        Product p = inventory.get(id);
        if (p != null) { p.setQuantity(qty); p.setPrice(price); System.out.println("Updated: " + p); }
        else            System.out.println("Product not found: " + id);
    }
    public void deleteProduct(int id) {
        Product removed = inventory.remove(id);
        System.out.println(removed != null ? "Deleted: " + removed : "Not found: " + id);
    }
    public void displayAll() { inventory.values().forEach(System.out::println); }

    public static void main(String[] args) {
        InventoryManager mgr = new InventoryManager();
        mgr.addProduct(new Product(1, "Laptop", 10, 75000));
        mgr.addProduct(new Product(2, "Mouse",  50, 500));
        mgr.updateProduct(1, 8, 72000);
        mgr.deleteProduct(2);
        mgr.displayAll();
    }
}
