"use strict";
// let greet: Function;
let greet;
greet = (fname, lname) => {
    console.log(`hello ${fname} ${lname}`);
};
let calc;
calc = (fnum = 0, snum = 0, action = "") => {
    if (action == "+")
        return fnum + snum;
    if (action == "-")
        return fnum - snum;
    if (action == "*")
        return fnum * snum;
    if (action == "/")
        return fnum / snum;
    return -1;
};
console.log(calc(1, 2, '+'));
let logDetails;
logDetails = (obj) => {
    console.log(`hello i am ${obj.name} and i am ${obj.age} yrs old`);
    return obj;
};
const person1 = {
    name: "jean correa",
    age: 21
};
console.log(logDetails(person1));
