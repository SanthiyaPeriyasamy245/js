// let and const are hoisted if you want to access the variables which is declared as let and const you can't access them it throws an error the let and const variables are stored in a separate memory object called script.
// eventhough let and const intialised with undefined in memory it's in a separate memory so it can't be accessable before initailizing a value to that particular variable.
// the time to get intialized is known as tempornal dead zone at this time let and const are hoisted and not intialized.
// you can't redeclare and intialize same let variable
let a=10
// let a=199  redeclaration is not acceptable in let.
// for const initailizing should be done while declaring
const y=123
// const u;
// u=12;  it's not acceptable it will be syntac error.
var w=100;
function change()
{
    var w=10;

}
console.log(w)

// clouser is a function along with it's lexical environment.
function x()
{
    var z=19;
    function y()
    {
        console.log(z);
    }
    return y;
}
var q=x() // here the q will have function y but it has it's local memory +lexical scope (environment) of it's parent
q(); 
x()(); // to call inner function.