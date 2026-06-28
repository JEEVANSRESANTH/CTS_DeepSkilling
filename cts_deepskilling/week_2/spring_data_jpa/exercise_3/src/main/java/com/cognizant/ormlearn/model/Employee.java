package com.cognizant.ormlearn.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "em_id")
    private int id;

    @Column(name = "em_name")
    private String name;

    @Column(name = "em_permanent")
    private boolean permanent;

    @Column(name = "em_salary")
    private double salary;

    @Column(name = "em_date_of_birth")
    private LocalDate dateOfBirth;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "em_dp_id")
    private Department department;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(
        name = "employee_skill",
        joinColumns = @JoinColumn(name = "es_em_id"),
        inverseJoinColumns = @JoinColumn(name = "es_sk_id")
    )
    private List<Skill> skillList;

    public Employee() {}

    public int getId() { return id; }
    public String getName() { return name; }
    public boolean isPermanent() { return permanent; }
    public double getSalary() { return salary; }
    public Department getDepartment() { return department; }
    public List<Skill> getSkillList() { return skillList; }
    public void setId(int id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setPermanent(boolean permanent) { this.permanent = permanent; }
    public void setSalary(double salary) { this.salary = salary; }
    public void setDepartment(Department department) { this.department = department; }
    public void setSkillList(List<Skill> skillList) { this.skillList = skillList; }

    @Override
    public String toString() {
        return "Employee{id=" + id + ", name='" + name + "', permanent=" + permanent + ", salary=" + salary + "}";
    }
}
