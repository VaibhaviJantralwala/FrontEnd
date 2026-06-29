// promise is a js object which is used to handle asynchronized operation 
// get data from db , timer (set timeout) , read file . future result predicate 
// pending -> task is still running
// fullfill -> completed 
// rejected -> when error in task 

const myPromise = new Promise((resolve,reject)=>{

    let success = false;
    setTimeout(()=>{
        if(success){
            resolve("Data Loaded");
        }
        else{
            reject("Failed to load data");
        }
    },4000);
});

myPromise.then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.log(error);
})


