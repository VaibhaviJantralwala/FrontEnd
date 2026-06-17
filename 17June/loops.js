// print number from 1 to 10
for(let i=1 ; i<11 ; i++){
    console.log(i+" ");
}

//rev loop
for(let i=10 ; i>0 ; i--){
    console.log(i+" ");
}

for(let i=1 ; i<20 ; i++){
    if( i % 2 == 0 ){
        console.log(i+" ");
    }
}

//odd num 
for(let i=1 ; i<20 ; i++){
    if( i % 2 != 0 ){
        console.log(i+" ");
    }
}

// sum of num 1 to 10
let sum = 0;
for( let i=1 ; i<11 ; i++){
    sum += i;
}
console.log(sum);

// multiplication table of 5 
console.log("Table of 5 : ");
let mul = 1;
for(let i=1 ; i<11 ; i++){
    console.log(" 5 * ",i," = ",i*5);
}

// factorial 
let fact = 1;
for(let i=1 ; i<6 ; i++){
    fact *= i;
}
console.log("Factorial of 5 : ",fact);

// while loop

// rev print 
let i=10;
while(i>=1){
    console.log(i);
    i--;
}

// pattern 1 

for(let i=1 ; i<=5 ; i++){
    console.log(" * ".repeat(i));
}

for(let i=1 ; i<=5 ; i++){
    let row = "";
    for(let j=1 ; j<=i ; j++){
        row+=j+" ";
    }
    console.log(row);
}

for(let i=1 ; i<=5 ; i++){
    let row = "";
    for(let j=1 ; j<=i ; j++){
        row+="*"+" ";
    }
    console.log(row);
}

// count vowels 
let st = "javascript";
let count= 0;
let consonent = 0;
for( let ch of st){
    if("aeiou".includes(ch)){
        count++;
    }else{
        consonent++;
    }
}
console.log(count);
console.log(consonent);

// rev string 
let st1 = "javascript";
let rev = "";
for(let i=st1.length-1 ; i>=0 ; i--){
    rev+=st1[i];
}
console.log(rev);
