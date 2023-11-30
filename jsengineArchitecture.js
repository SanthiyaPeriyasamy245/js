// inside the javascript runtime environment the js engine get placed.
// browser can only execute js code only it has js runtime environment.
//js engine literally runs everywhere from smart watch to robots to browsers because of js runtime environment(JRE).
// jre is a container which has everything which are requires to run js code
// inside jre there is a set of API's to connect with outside environment,event loop callback queue etc..
// ECMA script is a governing body of js.it has set of rules which are followed by all js engines like(V8)-->chrome.
//js engine isn't a machine it's a software written in lowlevel language (c++).that takes in high-level code in js and spits out low level machine code.
//inside js engine.
/*
1.parsing:
-> code broken into tokens each keyword and values are known  as tokens.*/
var a=100;
/* -> var,a,100 ,= all are tokens.
->syntax parser
it takes a code and converts it into AST(abstract syntax tree) which is a json with alll key values like type,start,end body etc.

2.compilation:
js has something called jit just in time compilation
uses both interpreter and compiler.
compilation and execution both done in hand in hand
AST goes to interpreter whic ccnverts code to byte codes and moves to execution while interpreting compiler also works hand in hand to compile and form optimized code during run time

3.execution
two components
Memory heap and call stack
tere is alsoa carbage collector.it uses algo called Mark and sweap.
