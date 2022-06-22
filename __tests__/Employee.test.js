const Employee = require("../lib/Employee");

//test for employee class name property
test("should create an employee with a name", () => {
  const employee = new Employee("John");
  expect(employee.name).toBe("John");
});

//test for employee class id property
test("should create an employee with an id", () => {
  const employee = new Employee("John", 1);
  expect(employee.id).toBe(1);
});

//test for employee class email property
test("should create an employee with an email", () => {
  const employee = new Employee("John", 1, "@gmail.com");
  expect(employee.email).toBe("@gmail.com");
});

//test for employee role property
test("should create an employee with a role", () => {
  const employee = new Employee("John", 1, "@gmail.com", "Employee");
  expect(employee.role).toBe("Employee");
});
