// classes
import Invoice from "./classes/Invoice.js"; // we have to use .js because .ts is not recognizeable by browser
import Payment from "./classes/Payment.js";
import HasFormatter from "./interfaces/HasFormatter.js";

const invOne = new Invoice("lyssa", "utang", 1500);
const invTwo = new Invoice("friends ni doms", "utang", 1500);

console.log({
  format1: invOne.format(),
  format2: invTwo.format(),
});

let invoices: Invoice[] = []; //you can only stored here with Invoice type object
invoices.push(invOne, invTwo);

let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne = new Payment('yoshi', 'utang', 250);
docTwo = new Payment('yoshi', 'work', 250);

let docs: HasFormatter[] = [];
docs.push(docOne, docTwo);