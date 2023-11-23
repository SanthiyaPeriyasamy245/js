// A function that passed into the another function
setTimeout(function()
{
    console.log("hiii")
},5000)
//here a settimeout function has a anonymous call back function when the 5sec get finished the settimeout will call the anonyomous function
//Garbage collection and remove eventListener : eventlisteners are heavy which means the it takes more memory so remove event listener when we don't use it.
