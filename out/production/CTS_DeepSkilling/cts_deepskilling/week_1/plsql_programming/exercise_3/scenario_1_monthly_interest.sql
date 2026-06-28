-- Scenario 1: Stored procedure to process monthly interest for savings accounts

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest AS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'SAVINGS';
    
    DBMS_OUTPUT.PUT_LINE('Monthly interest of 1% applied to all savings accounts.');
    COMMIT;
END ProcessMonthlyInterest;
/

-- Execute
BEGIN
    ProcessMonthlyInterest;
END;
/
