#!/usr/bin/node
let arg=prompt("Enter any argument: ");
let c = parseInt(arg[0]);
if (c=== undefined || isNaN(c)){
    console.log("Not a number");
}
else{
console.log("My number: "+c);
}