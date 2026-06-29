function getData(){
    return new Promise((resolve,reject)=>{

    let success = true;
    setTimeout(()=>{
        if(success){
            resolve("Data Loaded");
        }
        else{
            reject("Failed to load data");
        }
    },4000);
});

} 

async function displayData(){
    try{
        const result = await getData();
        console.log(result);
    }
    catch(error){
        console.log(error);
    }
}

displayData();


