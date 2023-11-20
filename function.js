// if a variable get declared and initialized inside a function it's only accessable in that function.
// examples
function add()
{
    let a=10;
    let b=20;
    console.log(a+b)
}
// console.log(b)
add();
var e=100;
{
    e=12;
    console.log(e) // it's shadowing the outer value get sadowed by the inner value.
}
var d=100; //global scope.
function subtract()
{
    var c=10;
    var d=20; // local scope
    console.log(c-d)
}
 console.log(d)
subtract()