package com.patterns;
public class MVCTest {
    public static void main(String[] args) {
        Student student = new Student("S001", "Jeevan", "A");
        StudentController controller = new StudentController(student, new StudentView());
        controller.updateView();
        controller.setStudentGrade("A+");
        System.out.println("\nAfter grade update:");
        controller.updateView();
    }
}
