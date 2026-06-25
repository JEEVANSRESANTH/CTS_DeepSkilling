-- Scenario 1: Calculate and update 1% monthly interest
DELIMITER //

CREATE PROCEDURE ProcessMonthlyInterest()
BEGIN
UPDATE SavingsAccounts
SET balance = balance + (balance * 0.01);
END //

DELIMITER ;