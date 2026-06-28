package com.library.service;
import com.library.repository.BookRepository;
public class BookService {
    private BookRepository bookRepository;
    // Constructor injection
    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Constructor injection - BookRepository injected.");
    }
    // Setter injection (can override)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("Setter injection - BookRepository set.");
    }
    public void displayBook(String title) { System.out.println(bookRepository.findBook(title)); }
}
