const inquirer = require('inquirer');
const logo = require("asciiart-logo");
const db = require("./db/index.js");
require("console.table");

init()

function init() {
  const logoHeader = logo({ name: "Employee Manager" }).render();
  console.log(logoHeader);
  loadQs();
}


function loadQs(){
    inquirer.prompt(
    [{
      type: "list",
      message: "Please select from the following:\n",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add a Department",
        "Add a Role",
        "Add an Employee",
        "Update an Employee Role",
        "Quit"],
      name: "options",
    },
    ]
  )
  .then((response) => {
      switch(response.options) {
      case "View All Departments":
        viewAllDepartments();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View All Employees":
        viewAllEmployees();
        break;
      case "Add a Department":
        addDepartment();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Add an Employee":
        addEmployee();
        break;
      case "Update an Employee Role":
        updateEmployeeRole();
        break;
      default:
        quit();
      }
    }
  )
}

function viewAllDepartments(){
  db.queryAllDepartments().then(([response]) =>{
    console.table(response)
  }).then(()=>loadQs());
}

function viewAllRoles(){
  db.queryAllRoles().then(([response]) =>{
    console.table(response)
  }).then(()=>loadQs());
}

function viewAllEmployees(){
  db.queryAllEmployees().then(([response]) =>{
    console.table(response)
  }).then(()=>loadQs());
}

function addDepartment(){
  inquirer.prompt(
    [{
      message: "What is the name of the new department?\n",
      name: "dept_name",
    },]
  )
  .then((response) =>
  db.queryAddDepartment(response.dept_name))

  .then(()=>loadQs());
}

function addRole(){
  // What is the name of the new role?
  // What is the salary of the new role?
  // Which department is the new role in?
  db.queryAllDepartments()
  .then(([response]) =>{
    const department = response.map(({id,dept_name})=>({
      name: dept_name,
      value: id
    }));

    inquirer.prompt(
      [
        {
        type: "input",
        message: "What is the name of the new Role?\n",
        name: "title",
      },
      {
        type: "input",
        message: "What is the salary of the new Role?\n",
        name: "salary",
      }
      ,
      {
        type: "list",
        message: "Which department is the new role in?\n",
        choices: department,
        name: "deptID"
      }
      ]
    )

  .then((response) =>{

    db.queryAddRole(response.title,response.salary,response.deptID)
  })

  .then(()=>loadQs());
})
}

function addEmployee(){
  // What is the first name of the new employee?
  // What is the last name of the new employee?
  inquirer.prompt(
    [{
      message: "What is the first name of the new Employee?\n",
      name: "first",
    },{
      message: "What is the last name of the new Employee?\n",
      name: "last",
    },]
  )
  .then((response) =>{
    let empFirstName = response.first;
    let emqLastName = response.last;

    // In which position will the new employee work?
    db.queryAllRoles()
      .then(([response]) => {
        const roles = response.map(({id,title})=>({
          name: title,
          value: id
        }));
        inquirer.prompt(
          [{
            type: "list",
            message: "What is the role of the new Employee?\n",
            name: "role",
            choices: roles
          },]
        )
        .then(response=>{
          let empRole = response.role;

          // Who is the manager of the new employee?
          db.queryAllEmployees()
          .then(([response]) => {
            const employees = response.map(({id,first_name,last_name})=>({
              name: `${first_name} ${last_name}`,
              value: id
            }));

            inquirer.prompt(
              [{
                type: "list",
                message: "Who is the manager of the new Employee?\n",
                name: "manager",
                choices: employees,
              },]
            )
            .then(response =>{
              let empManager = response.manager
              db.queryAddEmployee(empFirstName,emqLastName,empRole,empManager)
            })
            .then(()=>loadQs());
          });
        });
      });
  });
}

function updateEmployeeRole(){
  // Which Employee will be updated?
  db.queryAllEmployees()
    .then(([response])=>{
      const employees = response.map(({id,first_name, last_name})=>({
        name: `${first_name} ${last_name}`,
        value: id
      }))
    // What is the new role for the Employee?
      inquirer.prompt(
        [{
          type: "list",
          message: "What is the name of the Employee?\n",
          choices: employees,
          name: "employee",
        },])
    .then((response)=>{
      let employeeID = response.employee;
      db.queryAllRoles()
      .then(([response])=>{
        const roles = response.map(({id,title})=>({
          name: title,
          value: id
        }))
        inquirer.prompt(
          [{
            type: "list",
            message: "What is the new role for the Employee?\n",
            choices: roles,
            name: "role",
          }]
        )
        .then((response) =>
          db.queryUpdateEmployeeRole(employeeID,response.role))
        .then(()=>loadQs());
      });
    })
  })
}

function quit(){
  console.log("END");
  process.exit()
}
