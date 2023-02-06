#!/usr/bin/node
const arg = process.argv.slice(2);
if (arg === null || arg === ""){
    console.log('o argument');
} else {
    console.log(' The first argument found is: \n'+arg[0]);
}
