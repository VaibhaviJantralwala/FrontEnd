function first(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("First test");
        },2000);
    });
}

function second(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Second test");
        },2000);
    });
}

async function execute(){
    const data1 = await first();
    console.log(data1);
    const data2 = await second();
    console.log(data2);
}

execute();