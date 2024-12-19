

BEGIN;

INSERT INTO department (name)
VALUES ('Finance'),
       ('Grocery'),
       ('Sporting Goods');
       
INSERT INTO role (title, salary, department)
VALUES ('Supervisor', 20, (SELECT id FROM department WHERE name = 'Finance')),
       ('Cashier', 200, (SELECT id FROM department WHERE name = 'Grocery')),
       ( 'Stocker', 300, (SELECT id FROM department WHERE name = 'Sporting Goods'));

INSERT INTO employee ( first_name, last_name, role_id, manager_id)
VALUES ('Antonia','Olindo', (SELECT id FROM role WHERE title = 'Supervisor'), NULL),
       ('Damokles','Liselott', (SELECT id FROM role WHERE title = 'Cashier') ,NULL),
       ('Gayathri','Felicja', (SELECT id FROM role WHERE title = 'Stocker') , NULL);




COMMIT;


SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;