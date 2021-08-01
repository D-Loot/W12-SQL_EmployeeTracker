// const mysql = require('mysql2');
const dbConnection = require("../config/connection.js");

// In order to connect the database to a query, I need to create an object, assign a connection to it and use it in the query.
// https://www.tabnine.com/code/javascript/modules/mysql2

class Database {
  constructor(dbConnection) {
    this.dbConnection = dbConnection;
  }
  queryAllDepartments(){
    return this.dbConnection.query(`
    SELECT
    departments.id, departments.dept_name
    FROM
    departments;`)
  }
  queryAllRoles(){
    return this.dbConnection.query(`
    SELECT
    roles.id, roles.title, roles.salary, roles.department_id,
    departments.dept_name

    FROM roles

    JOIN departments ON roles.department_id = departments.id

    ORDER BY
    roles.id ASC;`)
  }
  queryAllEmployees(){
    return this.dbConnection.query(`
    SELECT
    employee.id, employee.first_name, employee.last_name, employee.manager_id, roles.title, roles.salary,
    departments.dept_name

    FROM employee
    JOIN roles ON employee.role_id = roles.id
    JOIN departments ON roles.department_id = departments.id

    ORDER BY
    employee.id ASC;`
    )
  }

  queryAddDepartment(newDept){
    return this.dbConnection.query(`
    INSERT INTO departments(dept_name)
    VALUES (?)`,newDept)
  }
  queryAddRole(title,salary,deptID){
    return this.dbConnection.query(`
    INSERT INTO roles(title,salary,department_id)
    VALUES (?,?,?)`,[title,salary,deptID])
  }
  queryAddEmployee(first, last, role, manager){
    return this.dbConnection.query(`
    INSERT INTO employee(first_name,last_name,role_id,manager_id)
    VALUES (?,?,?,?)`,[first, last, role, manager])
  }
  queryUpdateEmployeeRole(employeeID,roleID){
    return this.dbConnection.query(`
    UPDATE employee
    SET role_id = ?
    WHERE id = ?;`,[roleID,employeeID])
  }
  }

module.exports = new Database(dbConnection)
