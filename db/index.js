import mysql from 'mysql2';
import connection from "../config/connection.js";

const db = mysql.createConnection(connection);

const databaseQuery = {
  queryAllDepartments(){
    return db.query(`Select * FROM departments.db`, function (err, result) {
      if (err) {
        console.log(err);
      }
    })
  },
  queryAllRoles(){
    db.query(`DELETE FROM favorite_books`, variable, (err, result) => {
      if (err) {
        console.log(err);
      }
    })
  },
  queryAllEmployees(){
    db.query(`DELETE FROM favorite_books`, variable, (err, result) => {
      if (err) {
        console.log(err);
      }
    })

  },
  queryAddDepartment(){

  },
  queryAddRole(){

  },
  queryAddEmployee(){

  },
  queryAddEmployeeRole(){

  }
}


// Query database
//   db.query('SELECT * FROM favorite_books', function (err, results) {
//     console.log(results);
//   });
// }

// Query database

export default databaseQuery;
