//Map is used to map through the array like iteration
let arr=[11,2,3,4]
function sqr(x)
{
    return x*x
}
console.log(arr.map(sqr));
console.log(arr.map(function sqr(x)
{
    return x*x;
}));
console.log(arr.map((x)=>{return x*x;})) // arrow function
//filter is used to filter based on the logic;
console.log(arr.filter(function(x)
{
    return x<3;
}))
console.log(arr.filter((x)=>{return x%2===0}))
//Reduce is used to write large number of code in simple lines.like below sumof values in an array.
console.log(arr.reduce(function(acc,curr){ 
    acc=acc+curr;
    return acc;},0 // herhe we are using two things one is a function with acc,curr and next we are initialising the acc to 0)
    ));

    console.log(arr.reduce((acc,curr)=>{
        if(acc<curr)
        {
            acc=curr;
        }
        return acc;
    },0));

    //Array of objects.
    const users=[
        {field:"doctor",age:21},
        {field:"developer",age:19},
        {field:"police",age:21}
    ];
    //to merge field anda ge together
    const list=users.map((x)=>{return x.field+x.age});
    console.log(list);
    let ans=users.reduce(function(ans,curr){
      if(curr.age<20)
      {
        ans.push(curr.field)
      }
      return ans;
    },[]);
    console.log(ans);
