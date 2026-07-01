class Person{
    display(){
        console.log("Person");
    }
}
class Employee extends Person{
    display(){
        super.display();
        console.log("Employee");
    }
}
class Manager extends Employee{
    display(){
        super.display();
        console.log("Manager");
    }
}

const emp = new Manager();
emp.display();


