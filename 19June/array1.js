// create array

let arr = ["a","bcd",1,34,true];
console.log(arr); //[ 'a', 'bcd', 1, 34, true ]

console.log(arr[0]);

arr.push(false);

console.log(arr);

arr.pop();

console.log(arr);

arr.unshift("tops");
console.log(arr);

arr.shift();
console.log(arr);

for(let i=0 ; i<arr.length ; i++){
    console.log(arr[i]);
}

let arr = [10,20,30,40,50,60];

let min = arr[0];
let max = arr[0];
for(let i=1 ; i<arr.length ; i++){
    if(min > arr[i]){
        min = arr[i];
    }
    if( max < arr[i]){
        max = arr[i];
    }
}
console.log(min); //10
console.log(max); // 60

// map- modify data
// let num = [1,2,3,4];
// console.log(num.map(n=>n*n));

// filter - condition
// let num = [1,2,3,4];
// console.log(num.filter(n=>n%2==0));

// let num = [1,2,3,4];
// console.log(num.find(n=>n>2));

// let str = ["kiwi","banana","apple"];
// console.log(str.sort());

// let arr2 = [87,90,67,33];
// sort in ascending
// console.log(arr2.sort((x,y)=>x-y));
// for 2nd largest element
// sort in descending order
// console.log(arr2.sort((x,y)=>y-x));
// console.log(arr2[1]);
// for reverse 
// console.log(arr2.reverse());

// let array = [1,2,3,3,2,1,1,1,8,9,0,3];
// // spread operator 
// let unique = [... new Set(array)];
// console.log(unique);

// let a = [1,2,3];
// let b = [4,5,6];
// console.log([...a,...b]);
