function getUsers(){

    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>response.json())
    .then( data=>{
        let output = "";
        data.forEach(element => {
            output += `<li>${element.username} : ${element.address.street}</li>`;
        });
        document.getElementById("userList").innerHTML = output;
    })
    .catch(error=>{
        console.log(error);
    })
}