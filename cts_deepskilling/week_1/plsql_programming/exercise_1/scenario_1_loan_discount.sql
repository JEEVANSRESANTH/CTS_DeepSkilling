-- Scenario 1: Apply 1% discount on loan interest rates for customers above 60 years old

DECLARE
    CURSOR c_customers IS
        SELECT c.CustomerID, c.Name, c.Age, l.LoanID, l.InterestRate
        FROM Customers c
        JOIN Loans l ON c.CustomerID = l.CustomerID;
    
    v_customer c_customers%ROWTYPE;
BEGIN
    OPEN c_customers;
    LOOP
        FETCH c_customers INTO v_customer;
        EXIT WHEN c_customers%NOTFOUND;
        
        IF v_customer.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE LoanID = v_customer.LoanID;
            
            DBMS_OUTPUT.PUT_LINE('Applied 1% discount for Customer: ' 
                || v_customer.Name 
                || ' | Age: ' || v_customer.Age 
                || ' | New Rate: ' || (v_customer.InterestRate - 1) || '%');
        END IF;
    END LOOP;
    CLOSE c_customers;
    COMMIT;
END;
/
