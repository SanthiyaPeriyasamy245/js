// inside the browser js engine get placed inside that js engine call stack get placed in call stack our js program runs.
// web APIs:set timeout,dom apis,fetch(),local storage,console,location.
// inside the browser there is a js engine which has the call stack.
// the setTimeout timer and console  all are provided by browser we access it through window object these all are in global scope we don't need to use window object.

setTimeout(function()
{
    console.log(100);
},1000)

// In setTimeout the call back function get stored somewhere and it can't be get into call stack automatically it will go to the call stack through callback queue when the timer is expired the call back function will put into callback queue 
// from the call back queue the call back function get into the call stack through event loop.
// when we write console log the statememt inside the console.log() willl log into the console.
//addeventListener it's dom apis when you use eventListeners the call back function is stored and it attaches it's event to it.
//fetch() -->to call another server (eg:netflix) 
/*
fetch("https://api.netflix.com").then(function cbf()
{
    console.log("cb netflix");
});
*/
// here by using fetch we reach the netflix server and get some data after getting some data it'll comeback to it's call back function then the callback function doesn't go to callback queue instead of cb queue it'll go to microtask queue because microtask queue has higher priority.so the cb function will go to microtask queue.

// event loop will continuosly check whether the call stack is empty or not once it's empty it'll check in microtask queue and call back if there is any function exist it'll push that into call stack.

//what will come inside the microtask queue
// all the promise call back function and mutation observer comes inside the microtask queue.rest will go to callback queue(task queue).









