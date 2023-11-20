// inner function has an access to it's outer function .function with it's local memory space and it's lexical environment of it's parents.
//example
function call()
{
    
    dial();
  
    function dial()
    {
        console.log(t); // here this function will check is there any variable named t inside it's local memory space if it's not present it'll check it's lexical environment of it's parent function.here it's parent function has var t so it's prints the value instead of printing undefined.
    }
}
let t=10;
  
call();