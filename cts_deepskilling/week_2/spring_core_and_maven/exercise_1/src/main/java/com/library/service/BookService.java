package com.library.service;

import com.library.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void findBook(String title) {
        System.out.println("BookService: Request to find book - " + title);
        bookRepository.findBook(title);
    }
}
