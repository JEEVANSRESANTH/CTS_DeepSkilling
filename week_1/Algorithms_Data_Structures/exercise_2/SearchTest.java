package Algorithms_Data_Structures.exercise_2;
import java.util.Arrays;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
                new Product(103, "Laptop", "Electronics"),
                new Product(101, "Mouse", "Electronics"),
                new Product(105, "Keyboard", "Electronics")
        };

        // Linear Search (works on unsorted)
        int index1 = SearchAlgorithms.linearSearch(products, 101);
        System.out.println("Linear Search result: " + (index1 != -1 ? products[index1] : "Not found"));

        // Sort for Binary Search
        Arrays.sort(products);

        // Binary Search
        int index2 = SearchAlgorithms.binarySearch(products, 101);
        System.out.println("Binary Search result: " + (index2 != -1 ? products[index2] : "Not found"));
    }
}
