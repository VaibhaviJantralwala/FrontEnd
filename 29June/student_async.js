function checkResult(mark){
    return new Promise((resolve,reject)=>{
        if(mark>35){
            resolve("pass");
        }else{
            reject("fail");
        }
    });
}

async function result(){
    try{
        const res = await checkResult(5);
        console.log(res);
    }
    catch(error){
        console.log(error);
    }
}

result();