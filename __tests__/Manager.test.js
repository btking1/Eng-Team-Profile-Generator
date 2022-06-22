const Manager = require("../lib/Manager");

//test for manager class name property
test("should create an manager with a name", () => {
  const manager = new Manager("John", 1, "@gmail.com");
  expect(manager.name).toBe("John");
});

//test for manager class id property
test("should create an manager with an id", () => {
  const manager = new Manager("John", 1, "@gmail.com");
  expect(manager.id).toBe(1);
});

//test for manager class email property
test("should create an manager with an email", () => {
  const manager = new Manager("John", 1, "@gmail.com");
  expect(manager.email).toBe("@gmail.com");
});

//test for manager class officeNumber property
test("should create an manager with an officeNumber", () => {
  const manager = new Manager("John", 1, "@gmail.com", "123");
  expect(manager.officeNumber).toBe("123");
});

//test for manager class getRole property

test("should create an manager with a role", () => {
  const manager = new Manager("John", 1, "@gmail.com", "123");
  expect(manager.getRole()).toBe("Manager");
});
