-- Scenario 3: Send reminders for loans due within the next 30 days

DECLARE
    CURSOR c_loans IS
        SELECT c.Name, l.LoanID, l.DueDate
        FROM Loans l
        JOIN Customers c ON l.CustomerID = c.CustomerID
        WHERE l.DueDate BETWEEN SYSDATE AND SYSDATE + 30;
    
    v_loan c_loans%ROWTYPE;
BEGIN
    OPEN c_loans;
    LOOP
        FETCH c_loans INTO v_loan;
        EXIT WHEN c_loans%NOTFOUND;
        
        DBMS_OUTPUT.PUT_LINE('REMINDER: Dear ' 
            || v_loan.Name 
            || ', your Loan ID ' || v_loan.LoanID 
            || ' is due on ' || TO_CHAR(v_loan.DueDate, 'DD-MON-YYYY') 
            || '. Please ensure timely payment.');
    END LOOP;
    CLOSE c_loans;
END;
/
