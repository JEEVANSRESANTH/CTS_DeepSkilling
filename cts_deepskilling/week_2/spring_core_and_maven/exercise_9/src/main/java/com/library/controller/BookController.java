package com.library.controller;
import com.library.model.Book;
import com.library.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@RestController
@RequestMapping("/books")
public class BookController {
    @Autowired private BookRepository bookRepository;
    @GetMapping      public List<Book> getAll()              { return bookRepository.findAll(); }
    @PostMapping     public Book create(@RequestBody Book b) { return bookRepository.save(b); }
    @DeleteMapping("/{id}") public void delete(@PathVariable Long id) { bookRepository.deleteById(id); }
}
