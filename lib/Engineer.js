//Employee child class for Engineer

import { Employee } from "./Employee.js";

export class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getGitHubUsername() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

// module.exports = Engineer;
