package com.cognizant.ormlearn;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
@SpringBootApplication
public class OrmLearnApplication implements CommandLineRunner {
    private static final Logger LOGGER = LoggerFactory.getLogger(OrmLearnApplication.class);
    @Autowired private CountryService countryService;
    public static void main(String[] args) { SpringApplication.run(OrmLearnApplication.class, args); }
    @Override public void run(String... args) {
        // Get all countries
        LOGGER.info("All countries: {}", countryService.getAllCountries());
        // Find by code
        Country india = countryService.findByCode("IN");
        LOGGER.info("Find by code IN: {}", india);
        // Add new country
        Country newCountry = new Country();
        newCountry.setCode("AU");
        newCountry.setName("Australia");
        Country saved = countryService.addCountry(newCountry);
        LOGGER.info("Added: {}", saved);
    }
}
