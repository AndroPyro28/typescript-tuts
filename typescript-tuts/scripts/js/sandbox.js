"use strict";
let greet;
greet = () => {
    console.log(`hello ${name}`);
};
const add = (x, y = 11) => {
    console.log({ x, y });
};
add(5, 50);
const minus = (x, y) => {
    return x + y;
};
let result = minus(5, 5);
