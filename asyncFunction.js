let promise = new Promise((resolve,reject)=>
{
    setTimeout(()=>resolve(" 5 seconds left."),5000);
})

async function asyncFunction()
{
   let p = await promise;
   console.log(p);
   console.log("Hello");

}

asyncFunction();
/*
 output after 5 second
  5 seconds left.
Hello

 */ 

// now above code run synchronously