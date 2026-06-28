package com.cognizant.ormlearn.repository;

import com.cognizant.ormlearn.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // HQL query - fetches permanent employees with department and skills (JOIN FETCH)
    @Query("SELECT e FROM Employee e JOIN FETCH e.department WHERE e.permanent = true")
    List<Employee> getAllPermanentEmployees();

    // Native SQL query example
    @Query(value = "SELECT * FROM employee WHERE em_salary > :salary", nativeQuery = true)
    List<Employee> getEmployeesWithSalaryGreaterThan(double salary);
}
