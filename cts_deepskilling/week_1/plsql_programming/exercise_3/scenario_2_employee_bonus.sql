-- Scenario 2: Stored procedure to update employee salary with a bonus percentage

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department_id IN NUMBER,
    p_bonus_percent  IN NUMBER
) AS
BEGIN
    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus_percent / 100)
    WHERE DepartmentID = p_department_id;
    
    DBMS_OUTPUT.PUT_LINE('Bonus of ' || p_bonus_percent || '% applied to Department ID: ' || p_department_id);
    COMMIT;
END UpdateEmployeeBonus;
/

-- Execute: 10% bonus for department 3
BEGIN
    UpdateEmployeeBonus(3, 10);
END;
/
