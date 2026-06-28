package com.cognizant.ormlearn;

import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class OrmLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    private static CountryService countryService;

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(OrmLearnApplication.class, args);
        countryService = context.getBean(CountryService.class);

        testGetAllCountries();
        testFindCountryByCode();
        testAddCountry();
    }

    private static void testGetAllCountries() {
        LOGGER.info("Start - Get All Countries");
        List<Country> countries = countryService.getAllCountries();
        LOGGER.debug("Countries: {}", countries);
        LOGGER.info("End");
    }

    private static void testFindCountryByCode() {
        LOGGER.info("Start - Find Country by Code");
        Optional<Country> country = countryService.findByCode("IN");
        country.ifPresent(c -> LOGGER.debug("Found: {}", c));
        LOGGER.info("End");
    }

    private static void testAddCountry() {
        LOGGER.info("Start - Add Country");
        Country country = new Country();
        country.setCode("ZZ");
        country.setName("Test Country");
        countryService.addCountry(country);
        LOGGER.debug("Added country ZZ");
        LOGGER.info("End");
    }
}
