DO $$ 
DECLARE

    finance_id INT;
    grocery_id INT;
    jewelry_id INT;
    supervisor_id INT;
    cashier_id INT;
    stocker_id INT;

BEGIN

    INSERT INTO department (name) VALUES ('Finance') RETURNING id INTO finance_id;
    INSERT INTO department (name) VALUES ('Grocery') RETURNING id INTO grocery_id;
    INSERT INTO department (name) VALUES ('Jewelry') RETURNING id INTO jewelry_id;


    INSERT INTO role (title, salary, department) VALUES ('Supervisor', 20000.00, finance_id) RETURNING id INTO supervisor_id;
    INSERT INTO role (title, salary, department) VALUES ('Cashier', 10000.00, grocery_id) RETURNING id INTO cashier_id;
    INSERT INTO role (title, salary, department) VALUES ('Stocker', 11000.00, jewelry_id) RETURNING id INTO stocker_id;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Antonia','Olindo', 1, NULL),
       ('Damokles','Liselott', 2 , 1),
       ('Gayathri','Felicja', 3 , 1);

    COMMIT;

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occurred: %', SQLERRM;
        ROLLBACK;
END $$;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;