// classes
import Invoice from "./classes/Invoice.js"; // we have to use .js because .ts is not recognizeable by browser
const me = {
    name: 'andro',
    age: 21,
    speak: (name) => `hello ${name}`,
    spend: (params) => params
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
const invOne = new Invoice("lyssa", "utang", 1500);
const invTwo = new Invoice("friends ni doms", "utang", 1500);
console.log({
    format1: invOne.format,
    format2: invTwo.format,
});
let invoices = [];
invoices.push(invOne, invTwo);
