// variables are the containers to store a values.
/* 
variable declaration
 1.var-global scope
 2.let-block scope
 3.const-constant.
 */
var price=100
var product="panda toy"// mentioned within double cotation is a string , without double cotation it's a variable.
var tax=20 
console.log(product)
console.log(price+tax) // total amount including tax.
var fruitname="watermelon"
var count=5
var price=30
var total=count*price
console.log(fruitname)
console.log(total)

//operators
//Increment and decrement operators
var a=5
var b=5
var g=++a //incremented and stored pre increment.
console.log(g)
var c=b++ // here b value is 5 because 5 get stored in  c then get incremented post increment.
console.log(c)
console.log(b)

//type of function - it'll give data type of a value.
var v=10       //number
var f          //undefined
var b=true     //boolean
var n=null     //null object
var w="js"     //string 
var d=12.79    //number
console.log( typeof(v),typeof(w),typeof(d),typeof(b),typeof(n),typeof(f))

//functions
function call()
{
    console.log("hi")
}
call()
// function with parameters
function add(a,b)
{ 
    return a+b

}
console.log(add(10,30))
function fav(a,b,c)
{
    console.log("favourite cricketer :" +a)
    console.log("favourite actor :" +b)
    console.log("favourite movie :" +c)
}
fav("dhoni","sk","managaram")

// conditional statements
function isitraining(a)
{
    if(a=="yes")
    {
        return "take umberlla"
    }
    else{
        return "enjoy the sunshine"
    }
}
console.log(isitraining("no"))