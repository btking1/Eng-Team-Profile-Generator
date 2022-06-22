const Intern = require("../lib/Intern");

//test for intern class name property
test("should create an intern with a name", () => {
  const intern = new Intern("John", 1, "@gmail.com");
  expect(intern.name).toBe("John");
});

//test for intern class id property
test("should create an intern with an id", () => {
  const intern = new Intern("John", 1, "@gmail.com");
  expect(intern.id).toBe(1);
});

//test for intern class email property
test("should create an intern with an email", () => {
  const intern = new Intern("John", 1, "@gmail.com");
  expect(intern.email).toBe("@gmail.com");
});

//test for intern class school property
test("should create an intern with a school", () => {
  const intern = new Intern("John", 1, "@gmail.com", "UNC");
  expect(intern.school).toBe("UNC");
});

//test for intern class getRole property
test("should create an engineer with a role", () => {
  const intern = new Intern("John", 1, "@gmail.com", "UNC");
  expect(intern.getRole()).toBe("Intern");
});
