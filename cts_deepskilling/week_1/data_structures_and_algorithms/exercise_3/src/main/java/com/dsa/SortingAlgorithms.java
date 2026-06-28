package com.dsa;
import java.util.Arrays;
// BubbleSort O(n^2) | QuickSort O(n log n) avg - QuickSort preferred for large datasets
public class SortingAlgorithms {
    public static void bubbleSort(Order[] orders) {
        int n = orders.length;
        for (int i = 0; i < n - 1; i++)
            for (int j = 0; j < n - i - 1; j++)
                if (orders[j].getTotalPrice() > orders[j + 1].getTotalPrice()) {
                    Order tmp = orders[j]; orders[j] = orders[j + 1]; orders[j + 1] = tmp;
                }
    }
    public static void quickSort(Order[] orders, int low, int high) {
        if (low < high) {
            int pi = partition(orders, low, high);
            quickSort(orders, low, pi - 1);
            quickSort(orders, pi + 1, high);
        }
    }
    private static int partition(Order[] orders, int low, int high) {
        double pivot = orders[high].getTotalPrice(); int i = low - 1;
        for (int j = low; j < high; j++)
            if (orders[j].getTotalPrice() <= pivot) { i++; Order tmp=orders[i]; orders[i]=orders[j]; orders[j]=tmp; }
        Order tmp=orders[i+1]; orders[i+1]=orders[high]; orders[high]=tmp;
        return i + 1;
    }
    public static void main(String[] args) {
        Order[] orders1 = {new Order(1,"Alice",500), new Order(2,"Bob",200), new Order(3,"Carol",800)};
        Order[] orders2 = Arrays.copyOf(orders1, orders1.length);
        bubbleSort(orders1); System.out.println("Bubble Sort:"); Arrays.stream(orders1).forEach(System.out::println);
        quickSort(orders2, 0, orders2.length - 1); System.out.println("\nQuick Sort:"); Arrays.stream(orders2).forEach(System.out::println);
    }
}
