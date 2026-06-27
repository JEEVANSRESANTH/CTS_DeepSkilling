-- Scenario 3: Stored procedure to transfer funds between accounts

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_source_account_id IN NUMBER,
    p_target_account_id IN NUMBER,
    p_amount            IN NUMBER
) AS
    v_source_balance NUMBER;
BEGIN
    -- Check source account balance
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account_id;
    
    IF v_source_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    END IF;
    
    -- Deduct from source
    UPDATE Accounts
    SET Balance = Balance - p_amount
    WHERE AccountID = p_source_account_id;
    
    -- Credit to target
    UPDATE Accounts
    SET Balance = Balance + p_amount
    WHERE AccountID = p_target_account_id;
    
    DBMS_OUTPUT.PUT_LINE('Transferred $' || p_amount 
        || ' from Account ' || p_source_account_id 
        || ' to Account ' || p_target_account_id);
    COMMIT;

EXCEPTION
    WHEN OTHERS THEN
        ROLLBACK;
        DBMS_OUTPUT.PUT_LINE('Transfer failed: ' || SQLERRM);
END TransferFunds;
/

-- Execute
BEGIN
    TransferFunds(101, 202, 500);
END;
/
