//functions are hoisted.
a();
// function statement :creating a function.
//function declaration :another name for function statement.
function a()
{
    console.log("hi,Santhiya");
}
// function expression : assigning a function to a variable.

var q=function()
{
    console.log("bye,Santhiya");
}
q();

// Anonymous function : A function without a name.
// function()
// {

// } it throws an error because a function should have name anonymous function can be used as value example:function expression
//

// Named function expression.
var w=function z()
{
    console.log("superb,Santhiya");
}
w();
//but when you call it using  function name z() it'll throw you an error because we know that in memory for a variable intilially it'll store undefined then it replace it while executing a code.
// here this function is a value to that variable it's not in a global space.
//parameter and arguments in function
let r=10
let s=12
function add(r,s) //parameters
{
    return r+s
}
let ans=add(r,s) // these are arguments
console.log(ans)
//first class function : An  ability of function as a used as values ,used as  parameters,return from the function
// we can function as an argument to the function :first class citizens.
var s1=function()
{
    return function welcone()
    {
        return 3;
    }
}
console.log(s1()())

//Arrow functions
var arrow=()=>{
    console.log("hii");
}
arrow();



