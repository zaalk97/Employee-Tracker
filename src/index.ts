import inquirer from "inquirer";
import pg from "pg";

const { Client } = pg;

const client = new Client ({
    host: 'localhost',
    user: 'postgres',
    password: 'Kmd.i321',
    database: 'employee_tracker',
    port: 5432,

});

await client.connect();

async function mainMenu() {
    const { action } = await inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "View All Departments", 
                "View All Roles", 
                "View All Employees", 
                "Add a Department",
                "Add a Role", 
                "Add an Employee", 
                "Update an Employee Role",
                "Quit"
            ],
        }
    ]);

    //user actions
    switch (action) {
        case "Add a Department":
            await addDepartment();
            break;
        case "Add a Role":
            await addRole();
            break;
        case "Add an Employee":
            await addEmployee();
            break;
        case "Quit":
            console.log("Goodbye!");
            return; 
        default:
            break;
    }
    mainMenu();
}
//add department
async function addDepartment() {
    const { department } = await inquirer.prompt([
        {
            type: "input",
            message: "Add a department",
            name: "department",
        }
    ]);
    await client.query ('INSERT INTO department (name) VALUES ($1)', [department]);
}
//add role
async function addRole() {
    const { roleName, roleSalary } = await inquirer.prompt([
        {
            type: "input",
            message: "Add a name",
            name: "roleName",
        },
        {
            type: "input",
            message: "Add a salary",
            name: "roleSalary",
        },
        {
            type: "input",
            message: "Add a department",
            name: "roleDepartment",
        },
    ]);
    await client.query ('INSERT INTO role (title, salary, department) VALUES ($1, $2, $3)', [roleName, roleSalary]);
}
//add employee name, role, and manager
async function addEmployee() {
    const { employeeFirstName, employeeLastName, employeeRole, employeeManager } = await inquirer.prompt([
        {
            type: "input",
            message: "Add the employee's first name",
            name: "employeeFirstName",
        },
        {
            type: "input",
            message: "Add the employee's last name",
            name: "employeeLastName",
        },
        {
            type: "input",
            message: "Add the employee's role",
            name: "employeeRole",
        },
        {
            type: "input",
            message: "Add the employee's manager",
            name: "employeeManager",
        },
    ]);
    await client.query ('INSERT INTO employee (first_name, last_name, role, manager) VALUES ($1, $2, $3, $4)', [employeeFirstName, employeeLastName, employeeRole, employeeManager]);
}

mainMenu();