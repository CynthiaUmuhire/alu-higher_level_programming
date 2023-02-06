#!/usr/bin/node
const arg = process.argv.slice(2);
if (arg === null || arg === '') {
    console.log('No argument');
} else {
    console.log(arg[0]);
}
