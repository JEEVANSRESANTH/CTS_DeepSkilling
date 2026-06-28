package com.patterns;
public class CustomerRepositoryImpl implements CustomerRepository {
    @Override public String findCustomerById(int id) {
        return "Customer#" + id + " - Jeevan";
    }
}
