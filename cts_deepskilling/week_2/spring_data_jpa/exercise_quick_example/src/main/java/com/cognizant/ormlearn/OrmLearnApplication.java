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
            LOGGER.info("Running Spring Data JPA demo...");
            
            countryService.getAllCountries().forEach(c -> LOGGER.info("Country: {}", c));
            
            Country newCountry = new Country("IN", "India");
            Country savedCountry = countryService.addCountry(newCountry);
            LOGGER.info("Added: {}", savedCountry);
            
            Country foundCountry = countryService.getCountryById("IN");
            LOGGER.info("Found: {}", foundCountry);
            
            Country updateCountry = new Country("IN", "India - Updated");
            Country updatedCountry = countryService.updateCountry(updateCountry);
            LOGGER.info("Updated: {}", updatedCountry);
            
            countryService.deleteCountry("IN");
            LOGGER.info("Deleted country with code: IN");
        } catch (Exception e) {
            LOGGER.error("Application execution failed: {}", e.getMessage(), e);
            throw new RuntimeException("Application failed to execute properly", e);
        }
    }
}
