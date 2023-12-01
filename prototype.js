let arr=[1,2,3,4];
let s=[];
//simply one obj try to access another obj.
function calc(b)
{ 
     return b*b;
}
function see (method)
{
   s=arr.map(method)
}
see(calc);
console.log(s)
Array.prototype.double=function(opt)
{
    const out=[];
    for(let i=0;i<arr.length;i++)
    {
        out.push(opt(this[i]))
    }
    return out;
}
console.log(arr.double(calc))