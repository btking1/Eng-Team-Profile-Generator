const Engineer = require("../lib/Engineer");


//test for engineer class name property
test("should create an engineer with a name", () => {
  const engineer = new Engineer("John", 1, "@gmail.com");
  expect(engineer.name).toBe("John");
});

//test for engineer class id property
test("should create an engineer with an id", () => {
  const engineer = new Engineer("John", 1, "@gmail.com");
  expect(engineer.id).toBe(1);
});

//test for engineer class email property
test("should create an engineer with an email", () => {
  const engineer = new Engineer("John", 1, "@gmail.com");
  expect(engineer.email).toBe("@gmail.com");
});

//test for engineer class GitHub Username property
test("should create an engineer with a GitHub username", () => {
  const engineer = new Engineer("John", 1, "@gmail.com", "johndoe");
  expect(engineer.github).toBe("johndoe");
});

//test for engineer class getRole property
test("should create an engineer with a role", () => {
  const engineer = new Engineer("John", 1, "@gmail.com", "johndoe");
  expect(engineer.getRole()).toBe("Engineer");
});
