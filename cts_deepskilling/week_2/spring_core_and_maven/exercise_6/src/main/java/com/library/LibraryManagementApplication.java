package com.library;
import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
public class LibraryManagementApplication {
    public static void main(String[] args) {
        ApplicationContext ctx = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService svc = ctx.getBean(BookService.class);
        svc.displayBook("Spring in Action");
        System.out.println("Annotation-based configuration verified.");
    }
}
