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
    
    @Autowired 
    private CountryService countryService;
    
    public static void main(String[] args) { 
        SpringApplication.run(OrmLearnApplication.class, args); 
    }
    
    @Override 
    public void run(String... args) {
        try {
            LOGGER.info("START - Spring Data JPA Application");
            
            // Test getAllCountries
            LOGGER.info("Testing getAllCountries...");
            countryService.getAllCountries().forEach(c -> LOGGER.info("Country: {}", c));
            
            // Test addCountry
            LOGGER.info("Testing addCountry...");
            Country newCountry = new Country("IN", "India");
            Country savedCountry = countryService.addCountry(newCountry);
            LOGGER.info("Added country: {}", savedCountry);
            
            // Test getCountryById
            LOGGER.info("Testing getCountryById...");
            Country foundCountry = countryService.getCountryById("IN");
            LOGGER.info("Found country: {}", foundCountry);
            
            // Test updateCountry
            LOGGER.info("Testing updateCountry...");
            Country updateCountry = new Country("IN", "India - Updated");
            Country updatedCountry = countryService.updateCountry(updateCountry);
            LOGGER.info("Updated country: {}", updatedCountry);
            
            // Test deleteCountry
            LOGGER.info("Testing deleteCountry...");
            countryService.deleteCountry("IN");
            LOGGER.info("Deleted country with code: IN");
            
            LOGGER.info("END - Spring Data JPA Application completed successfully");
        } catch (Exception e) {
            LOGGER.error("Error in application execution: {}", e.getMessage(), e);
            throw new RuntimeException("Application failed to execute properly", e);
        }
    }
}
