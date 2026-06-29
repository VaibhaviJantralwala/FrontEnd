function getEmployee(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([
                {
                id : 1,
                name : "user1",
                salary : 30000
            },{
                id : 2,
                name : "user2",
                salary : 40000
            }])
        },3000);
    });
}

async function employeeDetails(){
    const emp = await getEmployee();
    emp.forEach(e => {
        console.log(e.id);
        console.log(e.name);
        console.log(e.salary);
    });
}

employeeDetails();


