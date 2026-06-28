package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);

        testSearchByText();
        testSearchSorted();
        testSearchByLetter();
    }

    private static void testSearchByText() {
        LOGGER.info("Start - Search by 'ou'");
        List<Country> countries = countryService.searchByText("ou");
        countries.forEach(c -> LOGGER.debug("{}", c));
        LOGGER.info("End");
    }

    private static void testSearchSorted() {
        LOGGER.info("Start - Search by 'ou' sorted");
        List<Country> countries = countryService.searchByTextSorted("ou");
        countries.forEach(c -> LOGGER.debug("{}", c));
        LOGGER.info("End");
    }

    private static void testSearchByLetter() {
        LOGGER.info("Start - Search starting with 'Z'");
        List<Country> countries = countryService.searchByStartingLetter("Z");
        countries.forEach(c -> LOGGER.debug("{}", c));
        LOGGER.info("End");
    }
}
