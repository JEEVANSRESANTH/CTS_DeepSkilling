-- Scenario 3: Secure fund transfer with transaction handling
DELIMITER //

CREATE PROCEDURE TransferFunds(
    IN source_id INT,
    IN target_id INT,
    IN amount DECIMAL(10,2)
)
BEGIN
    DECLARE current_balance DECIMAL(10,2);

START TRANSACTION;

-- Verify balance
SELECT balance INTO current_balance FROM Accounts WHERE id = source_id;

IF current_balance >= amount THEN
        -- Perform transfer
UPDATE Accounts SET balance = balance - amount WHERE id = source_id;
UPDATE Accounts SET balance = balance + amount WHERE id = target_id;
COMMIT;
ELSE
        -- Insufficient funds; undo changes
        ROLLBACK;
END IF;
END //

DELIMITER ;