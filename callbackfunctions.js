// A function that passed into the another function
setTimeout(function()
{
    console.log("hiii")
},5000)
//here a settimeout function has a anonymous call back function when the 5sec get finished the settimeout will call the anonyomous function
//Garbage collection and remove eventListener : eventlisteners are heavy which means the it takes more memory so remove event listener when we don't use it.
function add(plus)
{
    console.log("adding a and b");
    plus();
}
add(function plus()
{
    let a=12;
    let b=22;
    console.log(a+b);
}
 ); //here we are calling a add function by passing plus function into it and the plus function is a call back function .
 // call back function is passing a function into the another function as an argument it'll be called sometimes later in the program.
 