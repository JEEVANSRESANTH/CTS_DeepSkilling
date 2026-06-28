package com.cognizant.springlearn.controller;

import com.cognizant.springlearn.model.Country;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
public class CountryController {

    private static final List<Country> COUNTRIES = Arrays.asList(
        new Country("US", "United States"),
        new Country("IN", "India"),
        new Country("DE", "Germany"),
        new Country("JP", "Japan")
    );

    // GET all countries
    @GetMapping("/countries")
    public List<Country> getAllCountries() {
        return COUNTRIES;
    }

    // GET country by code
    @GetMapping("/countries/{code}")
    public Country getCountryByCode(@PathVariable String code) {
        return COUNTRIES.stream()
            .filter(c -> c.getCode().equalsIgnoreCase(code))
            .findFirst()
            .orElseThrow(() -> new RuntimeException("Country not found: " + code));
    }
}
