// classes
import Invoice from "./classes/Invoice.js"; // we have to use .js because .ts is not recognizeable by browser


interface isPerson {
    name:string,
    age: number,
    speak(param: string):void,
    spend(param: number):number,
}

const me: isPerson = {
    name:'andro',
    age:21,
    speak: (name:string):string => `hello ${name}`,
    spend: (params:number):number => params
}

const greetPerson = (person: isPerson) => {
    console.log('hello', person.name)
}

greetPerson(me)

const invOne = new Invoice("lyssa", "utang", 1500);
const invTwo = new Invoice("friends ni doms", "utang", 1500);

console.log({
  format1: invOne.format,
  format2: invTwo.format,
});


let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
