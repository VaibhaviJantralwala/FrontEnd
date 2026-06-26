 async function getUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json();
    let output = "";
    data.forEach(element => {
        output += `<li>${element.username} :${element.address.zipcode}  </li>`
    });
    document.getElementById("userList").innerHTML = output;
}