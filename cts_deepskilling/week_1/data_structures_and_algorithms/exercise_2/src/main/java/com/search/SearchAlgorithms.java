package com.search;

import java.util.Arrays;
import java.util.Comparator;

/**
 * Linear Search  - O(n) time complexity
 * Binary Search  - O(log n) time complexity (requires sorted array by productId)
 *
 * Best case  : Linear O(1) if target is first | Binary O(1) if target is mid
 * Average    : Linear O(n/2) ~ O(n)          | Binary O(log n)
 * Worst case : Linear O(n)                   | Binary O(log n)
 *
 * Binary search is preferred for large, sorted datasets on e-commerce platforms.
 */
public class SearchAlgorithms {

    // Linear Search - searches unsorted array by productId
    public static Product linearSearch(Product[] products, int targetId) {
        for (Product product : products) {
            if (product.getProductId() == targetId) {
                return product;
            }
        }
        return null;
    }

    // Binary Search - requires array sorted by productId
    public static Product binarySearch(Product[] products, int targetId) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = low + (high - low) / 2;
            int midId = products[mid].getProductId();

            if (midId == targetId) {
                return products[mid];
            } else if (midId < targetId) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(3, "Shoes", "Footwear"),
            new Product(5, "Book", "Education"),
            new Product(7, "Watch", "Accessories"),
            new Product(10, "Phone", "Electronics")
        };

        // Linear search (works on unsorted array too)
        System.out.println("=== Linear Search ===");
        Product result1 = linearSearch(products, 5);
        System.out.println(result1 != null ? "Found: " + result1 : "Not found");

        // Binary search (array must be sorted by productId)
        System.out.println("\n=== Binary Search ===");
        // Sort array by productId for binary search
        Arrays.sort(products, Comparator.comparingInt(Product::getProductId));
        Product result2 = binarySearch(products, 5);
        System.out.println(result2 != null ? "Found: " + result2 : "Not found");
    }
}
