package com.cognizant.ormlearn.model;
import jakarta.persistence.*;
@Entity
@Table(name = "country")
public class Country {
    @Id
    @Column(name = "co_code", length = 2, nullable = false)
    private String code;
    @Column(name = "co_name", nullable = false)
    private String name;
    public Country() {}
    public Country(String code, String name) {
        this.code = code;
        this.name = name;
    }
    public String getCode() { return code; }
    public String getName() { return name; }
    public void setCode(String code) { this.code = code; }
    public void setName(String name) { this.name = name; }
    @Override 
    public String toString() { return "Country{code='" + code + "', name='" + name + "'}"; }
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Country country = (Country) o;
        return code != null ? code.equals(country.code) : country.code == null;
    }
    @Override
    public int hashCode() {
        return code != null ? code.hashCode() : 0;
    }
}
