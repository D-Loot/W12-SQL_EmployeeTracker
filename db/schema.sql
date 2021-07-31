DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  dept_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30) NOT NULL,
  salary INT NOT NULL,

  department_id INT NOT NULL,
  INDEX department_index (department_id),
  CONSTRAINT fk_department_id FOREIGN KEY (department_id)
  REFERENCES departments(id)

  -- department_id INT NOT NULL
  -- FOREIGN KEY (department_id)
  -- REFERENCES departments(id)
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,

-- REF: https://www.cockroachlabs.com/docs/stable/foreign-key.html
  role_id INT NOT NULL,
  INDEX role_index (role_id),
  CONSTRAINT fk_role_id FOREIGN KEY (role_id)
  REFERENCES roles(id),

  manager_id INT,
  INDEX manager_index (manager_id),
  CONSTRAINT fk_manager_id FOREIGN KEY (manager_id)
  REFERENCES employee(id)
);