package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    // Setter injection (wired by Spring via applicationContext.xml)
    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
        System.out.println("BookService: BookRepository injected via setter.");
    }

    public void findBook(String title) {
        System.out.println("BookService: Finding - " + title);
        bookRepository.findBook(title);
    }
}
