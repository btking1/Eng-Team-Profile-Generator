const Employee = require('../src/Employee');


//write test  looks foor following properties of employee parent class
//name, id, email, getName(), getId(), getEmail(), getRole()

//write test for employee class name property
test('should return name property', () => {
    const employee = new Employee('John', 1, 'John', 'John', 'John');   //create new employee object
    expect(employee.getName()).toBe('John');                           //check if name property is equal to 'John'
}
);


