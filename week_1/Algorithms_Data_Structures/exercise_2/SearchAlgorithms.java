package Algorithms_Data_Structures.exercise_2;

public class SearchAlgorithms {

    // Linear Search: O(n)
    public static int linearSearch(Product[] products, int targetId) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].productId == targetId) return i;
        }
        return -1;
    }

    // Binary Search: O(log n)
    public static int binarySearch(Product[] sortedProducts, int targetId) {
        int low = 0, high = sortedProducts.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (sortedProducts[mid].productId == targetId) return mid;
            if (sortedProducts[mid].productId < targetId) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }
}