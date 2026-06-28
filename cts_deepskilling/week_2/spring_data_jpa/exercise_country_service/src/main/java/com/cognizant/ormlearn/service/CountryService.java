package com.cognizant.ormlearn.service;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.repository.CountryRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
@Service
public class CountryService {
    private static final Logger LOGGER = LoggerFactory.getLogger(CountryService.class);
    @Autowired private CountryRepository countryRepository;

    public List<Country> getAllCountries() {
        LOGGER.info("START getAllCountries");
        List<Country> list = countryRepository.findAll();
        LOGGER.info("END getAllCountries");
        return list;
    }

    public Country findByCode(String code) {
        LOGGER.info("START findByCode: {}", code);
        Optional<Country> result = countryRepository.findById(code);
        LOGGER.info("END findByCode");
        return result.orElse(null);
    }

    public Country addCountry(Country country) {
        LOGGER.info("START addCountry: {}", country);
        Country saved = countryRepository.save(country);
        LOGGER.info("END addCountry");
        return saved;
    }
}
