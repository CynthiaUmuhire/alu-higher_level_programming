#!/usr/bin/node
let arg= prompt("Enter anything:");
if (arg===null || arg===""){
    console.log("No argument");
}
else {
    console.log(" The first argument found is: \n"+arg[0]);
}
