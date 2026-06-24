function changeText(){
    document.getElementById("heading1").innerHTML = "welcome!!";
}

function showData(){
    let value =  document.getElementById("username").value;
    document.getElementById("result").innerHTML = value;
}

function changeColor(){
    document.body.style.backgroundColor = "pink";
}

function hideText(){
    document.getElementById("demo").style.display = "none";
}

function showDate(){
    document.getElementById("date").innerHTML = new Date();
}

function addItemS(){
   let li = document.createElement("li");
    li.innerHTML = "python";
    document.getElementById("list").appendChild(li);
}

function addItemD(){
    let item = document.getElementById("item").value;
    let li = document.createElement("li");
    li.innerHTML = item;
    document.getElementById("list").appendChild(li);
}

let count = 0;
function increase(){
    count++;
    document.getElementById("count").innerHTML = count;
}