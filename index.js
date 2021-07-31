// with "import" method change package json '"type": module'



// see 13-08 for sequalize function
// import express from "express";
// const express = require('express');

// Import inquire
import inquirer from 'inquirer';
// const inquirer = require('inquirer');

// import mysql2

// import asciiart-logo
// import asciiart-logo
import asciiartlogo from "asciiart-logo";

import db from "./db/index.js"

function addTeamMembers(){
  inquirer.prompt(
    [{
      message: "Please select from the following:\n",
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
      name: "options",
    },
    ]
  )
  .then((response) =>
    {
      switch(response.options) {
      case "view all departments":
        viewAllDepartments();
        break;
      case "view all roles":
        viewAllRoles();
        break;
      case "view all employees":
        viewAllEmployees();
        break;
      case "add a department":
        addDepartment();
        break;
      case "add a role":
        addRole();
        break;
      case "add an employee":
        addEmployee();
        break;
      case "update an employee role":
        addEmployeeRole();
        break;
      }
    }
  )
}

function init(){
    inquirer.prompt(
    [{
      message: "Please select from the following:\n",
      choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
      name: "options",
    },
    ]
  )
  .then((response) =>
    {
      switch(response.options) {
      case "view all departments":
        viewAllDepartments();
        break;
      case "view all roles":
        viewAllRoles();
        break;
      case "view all employees":
        viewAllEmployees();
        break;
      case "add a department":
        addDepartment();
        break;
      case "add a role":
        addRole();
        break;
      case "add an employee":
        addEmployee();
        break;
      case "update an employee role":
        addEmployeeRole();
        break;
      }
    }
  )
}

// GIVEN a command-line application that accepts user input

    // WHEN I start the application
        // THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

    // WHEN I choose to view all departments
        // THEN I am presented with a formatted table showing department names and department ids

    // WHEN I choose to view all roles
      // THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role

    // WHEN I choose to view all employees
        // THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

    // WHEN I choose to add a department
        // THEN I am prompted to enter the name of the department and that department is added to the database

    // WHEN I choose to add a role
        // THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

    // WHEN I choose to add an employee
        // THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database

    // WHEN I choose to update an employee role
        // THEN I am prompted to select an employee to update and their new role and this information is updated in the database





// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // turn on routes
// app.use(routes);


// TODO : add all functions
// Todo : correctquery functions to take variables and make queries based on the variables from "db.query..."
// todo: display the results from the variables
function viewAllDepartments(){
  db.queryAllDepartments().then((response) =>{
    console.log(response);
  })
}

function viewAllRoles(){
//   inquirer.prompt(
//   [{
//     message: "Please select from the following:\n",
//     choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update an employee role"],
//     name: "options",
//   },
//   ]
// )
// .then((response) =>
// {
//   switch(response.options) {
//   case "view all departments":
//     viewAllDepartments();
//     break;
//   case "view all roles":
}

function viewAllEmployees(){

}

function addDepartment(){

}

function addRole(){

}

function addEmployee(){

}

function addEmployeeRole(){

}