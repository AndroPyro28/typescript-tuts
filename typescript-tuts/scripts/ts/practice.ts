// classes
import Invoice from "./classes/Invoice.js"; // we have to use .js because .ts is not recognizeable by browser
import Payment from "./classes/Payment.js";
import HasFormatter from "./interfaces/HasFormatter.js";
import ObjectFormatter from "./interfaces/ObjectInterface.js";
const invOne = new Invoice("lyssa", "utang", 1500);
const invTwo = new Invoice("friends ni doms", "utang", 1500);

console.log({
  format1: invOne.format(),
  format2: invTwo.format(),
});

let invoices: Invoice[] = []; //you can only stored here with Invoice type object
invoices.push(invOne, invTwo);

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Payment("yoshi", "utang", 250);
docTwo = new Payment("yoshi", "work", 250);

let docs: HasFormatter[] = [];
docs.push(docOne, docTwo);

// GENERICS - is like a type or interface but it works in dynamically datatypes it could be interfaces, classes or primitive datatypes like number string bool etc

// normally in typescript when you pass a object in function it does not automatically  include its property
// you can extend this with object or {..props} or even interfaces or class
const addUID = <T extends ObjectFormatter<string>>(obj: T) => {
  const uid = Math.floor(Math.random() * 100);

  return { ...obj, uid }; // we maybe include ...obj but under the hood but it does not included in returned object
}; // thats why we use generics to keep track what data is passed, generics may beome object or any data type

const doc = addUID({ name: "yoshi", age: 1000, data: "..." });

const docAgain:ObjectFormatter<number[]> = {
  name: 'andro',
  age:50,
  data: [1,2,3,4,5]
}

console.log(doc, docAgain);

// ENUMS - is like a index based that return a number based on index

enum Resource {
  Instrument,
  Book,
  Food,
  Gadget,
  Vehicles
}

const anotherDoc:ObjectFormatter<Resource> = { // we pass enums in generics
  name:"jean",
  age:20,
  data: Resource.Food,
}
console.log(anotherDoc);

