// Hoisting is a concept which enaables you to extract value from variables and functions.before even get initialized it happens because pf the  memory creation phase.
//examples
console.log(x); // memory get created for the x variable even before the code get executed. x=undefined.
greet();
var x=10;
function greet()   //function whole code get stored in memory creation phase.
{
  console.log("hi");
} 

console.log(y)
let y=10;   // you can't access a value of variable y because it's declared with let because for let and const the seperate memory object get created. eventhough it has undefined you can't access before it get initialized this time is known as tempornal dead zone