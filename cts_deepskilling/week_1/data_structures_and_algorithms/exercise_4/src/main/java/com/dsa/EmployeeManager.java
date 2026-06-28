package com.dsa;
// Array: Add O(1) amortized, Search O(n), Delete O(n) due to shifting
public class EmployeeManager {
    private Employee[] employees;
    private int size = 0;
    public EmployeeManager(int capacity) { employees = new Employee[capacity]; }
    public void add(Employee e)    { 
        if (e == null) {
            System.out.println("Cannot add null employee");
            return;
        }
        if (size < employees.length) employees[size++] = e; 
        else System.out.println("Employee manager is full");
    }
    public void traverse()         { for (int i=0;i<size;i++) System.out.println(employees[i]); }
    public Employee search(int id) {
        for (int i=0;i<size;i++) if (employees[i].getEmployeeId()==id) return employees[i]; return null;
    }
    public void delete(int id) {
        for (int i=0;i<size;i++) if (employees[i].getEmployeeId()==id) {
            for (int j=i;j<size-1;j++) employees[j]=employees[j+1]; employees[--size]=null; return;
        }
    }
    public static void main(String[] args) {
        EmployeeManager mgr = new EmployeeManager(5);
        mgr.add(new Employee(1,"Jeevan","Developer",60000));
        mgr.add(new Employee(2,"Priya","Tester",55000));
        mgr.traverse();
        System.out.println("\nSearch id=1: " + mgr.search(1));
        mgr.delete(1);
        System.out.println("\nAfter delete:"); mgr.traverse();
    }
}
