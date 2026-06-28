-- Scenario 2: Set IsVIP flag to TRUE for customers with balance over $10,000

DECLARE
    CURSOR c_customers IS
        SELECT CustomerID, Name, Balance
        FROM Customers;
    
    v_customer c_customers%ROWTYPE;
BEGIN
    OPEN c_customers;
    LOOP
        FETCH c_customers INTO v_customer;
        EXIT WHEN c_customers%NOTFOUND;
        
        IF v_customer.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = TRUE
            WHERE CustomerID = v_customer.CustomerID;
            
            DBMS_OUTPUT.PUT_LINE('VIP status set for Customer: ' 
                || v_customer.Name 
                || ' | Balance: $' || v_customer.Balance);
        END IF;
    END LOOP;
    CLOSE c_customers;
    COMMIT;
END;
/
