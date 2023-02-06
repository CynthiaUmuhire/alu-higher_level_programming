#!/usr/bin/node
let arg=prompt("Enter any argument: ");
if (arg===null || arg===""){
    console.log("No argument");
}
else {
    let c=arg[0].concat(arg[1]);
    console.log(" The two argument found is: \n"+c);
}
