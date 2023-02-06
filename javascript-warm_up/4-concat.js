#!/usr/bin/node
const arg = process.argv.slice(2);
if (arg === null || arg === ""){
    console.log('No argument');
} else {
    const c = arg[0].concat(arg[1]);
    console.log('The two argument found is: \n'+c);
}
