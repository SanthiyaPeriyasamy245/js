// functions which can be passed as an  argument or return from a function is called higher order functions.
let values=[2,3,4,5];
let ans=[];
function square(values)
{
 
    for(let i=0;i<values.length;i++)
    {
        ans.push(values[i]*values[i])

    }
    return ans;
}
let sol=square(values)
console.log(sol)


function tripple(values)
{
    return values*values*values;
}
function newterm(values,method) // by passing logics like this we can write more number of functions with less number of codes
{
    let z=[];
    for(let i=0;i<values.length;i++)
    {
        z.push(method(values[i]))

    }
    return z;
}
function modoftwo(values)
{
    return values%2;
}
let r=newterm(values,tripple);
let e=newterm(values,modoftwo)
console.log(e);
console.log(r);
let o=values.map(tripple); //here map is iterates through array without loop
console.log(o);

