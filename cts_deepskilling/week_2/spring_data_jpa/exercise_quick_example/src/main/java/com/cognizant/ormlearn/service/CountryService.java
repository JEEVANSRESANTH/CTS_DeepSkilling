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
        try {
            List<Country> list = countryRepository.findAll();
            LOGGER.info("Retrieved {} countries", list.size());
            return list;
        } catch (Exception e) {
            LOGGER.error("getAllCountries failed: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to retrieve countries", e);
        }
    }
    
    public Country getCountryById(String code) {
        try {
            Optional<Country> country = countryRepository.findById(code);
            if (country.isPresent()) {
                LOGGER.debug("Found country: {}", country.get());
                return country.get();
            } else {
                LOGGER.warn("No country found with code: {}", code);
                return null;
            }
        } catch (Exception e) {
            LOGGER.error("getCountryById failed: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to retrieve country", e);
        }
    }
    
    public Country addCountry(Country country) {
        try {
            if (country == null || country.getCode() == null) {
                throw new IllegalArgumentException("Country or country code cannot be null");
            }
            Country savedCountry = countryRepository.save(country);
            LOGGER.info("Saved country: {}", savedCountry);
            return savedCountry;
        } catch (Exception e) {
            LOGGER.error("addCountry failed: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to add country", e);
        }
    }
    
    public Country updateCountry(Country country) {
        try {
            if (country == null || country.getCode() == null) {
                throw new IllegalArgumentException("Country or country code cannot be null");
            }
            if (!countryRepository.existsById(country.getCode())) {
                LOGGER.warn("Country not found for update: {}", country.getCode());
                return null;
            }
            Country updatedCountry = countryRepository.save(country);
            LOGGER.info("Updated country: {}", updatedCountry);
            return updatedCountry;
        } catch (Exception e) {
            LOGGER.error("updateCountry failed: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to update country", e);
        }
    }
    
    public void deleteCountry(String code) {
        try {
            if (!countryRepository.existsById(code)) {
                LOGGER.warn("Country not found for deletion: {}", code);
                return;
            }
            countryRepository.deleteById(code);
            LOGGER.info("Deleted country with code: {}", code);
        } catch (Exception e) {
            LOGGER.error("deleteCountry failed: {}", e.getMessage(), e);
            throw new RuntimeException("Failed to delete country", e);
        }
    }
}
