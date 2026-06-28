package com.patterns;
public class DITest {
    public static void main(String[] args) {
        CustomerRepository repo = new CustomerRepositoryImpl();
        CustomerService service = new CustomerService(repo);
        System.out.println(service.getCustomer(1));
        System.out.println(service.getCustomer(2));
    }
}
