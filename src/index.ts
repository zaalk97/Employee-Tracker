import inquirer from "inquirer";

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
            return; // Exit the function
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
        }
    ]);
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
}

mainMenu();