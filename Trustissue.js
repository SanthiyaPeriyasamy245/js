console.log("hello js")
setTimeout(function(){
    console.log("hii")
},3000)
console.log("bye js")
// setTimeout with timer it doesn't exactly guarantee that the callback function will execute exactly after 3 sec.
//block the main thread
console.log("hi")
console.log("fjake")
// here we are blocking the main thread eventhough the callback function timer is expired it still in the needs to execute the gec after that it immediately executes the callbac fuctions
let i=new Date().getTime();
let j=new Date().getTime();
while(j<i+10000)
{
    j=new Date().getTime();
}
console.log("while loop ends")
// eventhough the timer is 0sec it still takes some amount of time to execute because it get stored and pushed to callback then only pushed to callstack so it's take some time.

