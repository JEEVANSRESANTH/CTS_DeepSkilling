package com.cognizant.ormlearn.service;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class CountryService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);
    
    @Autowired 
    private CountryRepository countryRepository;
    
    public List<Country> getAllCountries() {
        LOGGER.info("START getAllCountries");
        try {
            List<Country> list = countryRepository.findAll();
            LOGGER.debug("Countries found: {}", list.size());
            LOGGER.info("END getAllCountries");
            return list;
        } catch (Exception e) {
            LOGGER.error("Error in getAllCountries: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to retrieve countries", e);
        }
    }
    
    public Country getCountryById(String code) {
        LOGGER.info("START getCountryById with code: {}", code);
        try {
            Optional<Country> country = countryRepository.findById(code);
            if (country.isPresent()) {
                LOGGER.debug("Country found: {}", country.get());
                LOGGER.info("END getCountryById");
                return country.get();
            } else {
                LOGGER.warn("Country not found with code: {}", code);
                return null;
            }
        } catch (Exception e) {
            LOGGER.error("Error in getCountryById: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to retrieve country", e);
        }
    }
    
    public Country addCountry(Country country) {
        LOGGER.info("START addCountry: {}", country);
        try {
            if (country == null || country.getCode() == null) {
                throw new IllegalArgumentException("Country or country code cannot be null");
            }
            Country savedCountry = countryRepository.save(country);
            LOGGER.debug("Country saved: {}", savedCountry);
            LOGGER.info("END addCountry");
            return savedCountry;
        } catch (Exception e) {
            LOGGER.error("Error in addCountry: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to add country", e);
        }
    }
    
    public Country updateCountry(Country country) {
        LOGGER.info("START updateCountry: {}", country);
        try {
            if (country == null || country.getCode() == null) {
                throw new IllegalArgumentException("Country or country code cannot be null");
            }
            if (!countryRepository.existsById(country.getCode())) {
                LOGGER.warn("Country not found for update: {}", country.getCode());
                return null;
            }
            Country updatedCountry = countryRepository.save(country);
            LOGGER.debug("Country updated: {}", updatedCountry);
            LOGGER.info("END updateCountry");
            return updatedCountry;
        } catch (Exception e) {
            LOGGER.error("Error in updateCountry: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to update country", e);
        }
    }
    
    public void deleteCountry(String code) {
        LOGGER.info("START deleteCountry with code: {}", code);
        try {
            if (!countryRepository.existsById(code)) {
                LOGGER.warn("Country not found for deletion: {}", code);
                return;
            }
            countryRepository.deleteById(code);
            LOGGER.debug("Country deleted with code: {}", code);
            LOGGER.info("END deleteCountry");
        } catch (Exception e) {
            LOGGER.error("Error in deleteCountry: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to delete country", e);
        }
    }
}
