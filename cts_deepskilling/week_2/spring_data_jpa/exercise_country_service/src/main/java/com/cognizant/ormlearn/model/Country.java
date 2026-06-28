package com.cognizant.ormlearn.model;
import jakarta.persistence.*;
@Entity
@Table(name = "country")
public class Country {
    @Id
    @Column(name = "co_code", length = 2)
    private String code;
    @Column(name = "co_name")
    private String name;
    public Country() {}
    public String getCode() { return code; }
    public String getName() { return name; }
    public void setCode(String code) { this.code = code; }
    public void setName(String name) { this.name = name; }
    @Override public String toString() { return "Country{code='" + code + "', name='" + name + "'}"; }
}
