package com.tdd;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class CalculatorAAATest {

    private Calculator calculator;

    @Before
    public void setUp() {
        // Arrange - runs before each test
        calculator = new Calculator();
        System.out.println("setUp: Calculator instance created.");
    }

    @After
    public void tearDown() {
        // Cleanup - runs after each test
        calculator = null;
        System.out.println("tearDown: Calculator instance released.");
    }

    @Test
    public void testAdd() {
        // Arrange
        int a = 4, b = 6;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(10, result);
    }

    @Test
    public void testMultiply() {
        // Arrange
        int a = 3, b = 7;

        // Act
        int result = calculator.multiply(a, b);

        // Assert
        assertEquals(21, result);
    }
}
