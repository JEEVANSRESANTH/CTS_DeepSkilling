package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CountryRepository extends JpaRepository<Country, String> {

    // Search by containing text (case-insensitive)
    List<Country> findByNameContaining(String text);

    // Search containing text sorted by name ascending
    List<Country> findByNameContainingOrderByNameAsc(String text);

    // Countries starting with a given letter
    List<Country> findByNameStartingWith(String prefix);
}
