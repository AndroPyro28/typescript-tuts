// let greet: Function;

let greet: (x:string, y:string) => void;

greet = (fname, lname) => {
    console.log(`hello ${fname} ${lname}`);
}

let calc: (x:number, y:number,z:string) => number

calc = (fnum=0, snum=0, action="") => {
    if(action == "+") return fnum + snum;
    if(action == "-") return fnum - snum;
    if(action == "*") return fnum * snum;
    if(action == "/") return fnum / snum;

    return -1;
}

console.log(calc(1,2,'+'))

type obj = {name:string, age:number}
let logDetails: (yes: obj) => object;

logDetails = (obj) => { // assume this will take an object argument
    console.log(`hello i am ${obj.name} and i am ${obj.age} yrs old`)
    return obj;
}

const person1 = {
    name: "jean correa",
    age: 21
}


console.log(logDetails(person1))
