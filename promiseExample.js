// promises is used to handle asynchronous task other option is callback async await

let flag =true;

const promise = new Promise((resolve,reject)=>
{
    if(flag)
    {
        resolve("Promise is Resolved.");
    }
    else{
        reject("Promise is rejected.");
    }
})


promise.then((data)=>console.log(data)).catch((err)=>console.error(err));


/*
resoleve() then then()
reject() then catch()
finally()
any()
all()
race()
*/