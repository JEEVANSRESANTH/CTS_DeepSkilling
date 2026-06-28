package com.dsa;
import java.util.Arrays;
// Linear O(n) - no sort needed | Binary O(log n) - requires sorted array by title
public class LibrarySearch {
    public static Book linearSearch(Book[] books, String title) {
        for (Book b : books) if (b.getTitle().equalsIgnoreCase(title)) return b; return null;
    }
    public static Book binarySearch(Book[] books, String title) {
        int lo=0, hi=books.length-1;
        while(lo<=hi) {
            int mid=(lo+hi)/2;
            int cmp = books[mid].getTitle().compareToIgnoreCase(title);
            if(cmp==0) return books[mid]; else if(cmp<0) lo=mid+1; else hi=mid-1;
        }
        return null;
    }
    public static void main(String[] args) {
        Book[] books = {
            new Book(1,"Clean Code","Robert Martin"),
            new Book(2,"Design Patterns","GoF"),
            new Book(3,"Effective Java","Bloch"),
            new Book(4,"Java Concurrency","Goetz")
        };
        System.out.println("Linear: " + linearSearch(books, "Effective Java"));
        
        // Sort array by title for binary search
        Arrays.sort(books, (b1, b2) -> b1.getTitle().compareToIgnoreCase(b2.getTitle()));
        System.out.println("Binary: " + binarySearch(books, "Effective Java"));
    }
}
