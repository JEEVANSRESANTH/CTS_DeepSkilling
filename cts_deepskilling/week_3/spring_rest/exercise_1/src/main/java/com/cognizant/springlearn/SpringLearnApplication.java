package com.cognizant.springlearn;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

@SpringBootApplication
public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) throws ParseException {
        ApplicationContext context = SpringApplication.run(SpringLearnApplication.class, args);
        LOGGER.info("Spring Boot application started.");
        displayDate();
    }

    private static void displayDate() throws ParseException {
        ClassPathXmlApplicationContext xmlContext = new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat dateFormat = xmlContext.getBean("dateFormat", SimpleDateFormat.class);
        Date date = dateFormat.parse("27/06/2026");
        LOGGER.debug("Parsed date from Spring XML bean: {}", date);
        xmlContext.close();
    }
}
