// In JavaScript, closure provides access to the outer scope of a function from inside the inner function, even after the outer function has closed. 
//Generally, closures are used for data privacy.

function outerFunction(name)
{
  function innerFunction()
  {
    console.log(`my name is ${name}`);
  }

  return innerFunction;
}

let resultFunction = outerFunction("ashish bhujbal");
console.log(resultFunction);// display defination
resultFunction();// call