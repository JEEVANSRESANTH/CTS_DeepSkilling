-- Scenario 2: Update employee salary by a bonus percentage
DELIMITER //

CREATE PROCEDURE UpdateEmployeeBonus(
    IN dept_name VARCHAR(50),
    IN bonus_percent DECIMAL(5,2)
)
BEGIN
UPDATE Employees
SET salary = salary + (salary * (bonus_percent / 100))
WHERE department = dept_name;
END //

DELIMITER ;