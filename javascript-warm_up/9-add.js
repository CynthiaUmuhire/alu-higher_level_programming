#!/usr/bin/node
function add(a,b) {
    return (a+b);
}
let arg=prompt("Enter any argument: ");
let a1=parseInt(arg[0]);
let a2=parseInt(arg[1]);
if (arg===null || arg===""){
    console.log("No argument");
}
else if (a1,a2===undefined || isNaN(a1,a2)){
    console.log("One of the arguments is not a nbr");
}
else {
    console.log(add(a1,a2));
   } 