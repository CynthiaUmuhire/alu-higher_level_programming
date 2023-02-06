#!/usr/bin/node
let arg=prompt("Enter any argument: ");
let c = parseInt(arg[0]);
if (c=== undefined || isNaN(c)){
    console.log("Missing number of occurences");
}
else{
    for (i=1;i<=c;i++){
        console.log("C is fun \n");
    }
}