// object array :
// it is a type of array in which each element is an object . 

// create
const student = [
    {
    id:1,
    name : "user1",
    age:22
    },
    {
    id:2,
    name : "user2",
    age:23
    },
    {
    id:3,
    name : "user3",
    age:21
    },
];

// console.log(student);

// we can print every property of object using . 
// student.forEach(s=>{
//     console.log(s.name);
// })

// add new student 
student.push({id:4,name:"user4",age:24});

// console.log(student);

// find student whose id = 2
const stud = student.find(s=>s.id==2);
// console.log(stud);

// find student whose age is > 22
// console.log(student.filter(s=>s.age>22));
// console.log(student);

// update student age whose id = 1
// student.forEach(s=>{
//     if(s.id == 1){
//         s.age = 25;
//     }
// });
// console.log(student);

// delete stud whose id = 2
// console.log(student.filter(s=>s.id !== 2));
// original array is not affected

// find total salary of all emp
const emp = [
    {
        id:1,
        name:"emp1",
        salary:5000
    },
    {
        id:2,
        name:"emp2",
        salary:35000
    },
    {
        id:3,
        name:"emp3",
        salary:50000
    },
    {
        id:4,
        name:"emp4",
        salary:45000
    }
]
// console.log(emp.reduce((sum,emp)=>sum+emp.salary,0));

// convert all stud name into uppercase 
// student.forEach(s=>{
//     console.log(s.name.toUpperCase());
// });

// map will make a new array
const arr = [
    {id:1,name:"a"},
    {id:2,name:"b"},
];
// const name = arr.map(s=>s.name);
// console.log(name);

// max salary 
// when we want to print only hhighest salary
// console.log(emp.reduce((maxSal,employee)=>Math.max(maxSal,employee.salary),0));
// when we want to print all details along with highest salary 
// console.log(
//     emp.reduce((max,emp)=>emp.salary > max.salary ? emp : max)
// );



