// classes
import Invoice from "./classes/Invoice.js"; // we have to use .js because .ts is not recognizeable by browser
import Payment from "./classes/Payment.js";
const invOne = new Invoice("lyssa", "utang", 1500);
const invTwo = new Invoice("friends ni doms", "utang", 1500);
console.log({
    format1: invOne.format(),
    format2: invTwo.format(),
});
let invoices = []; //you can only stored here with Invoice type object
invoices.push(invOne, invTwo);
let docOne;
let docTwo;
docOne = new Payment('yoshi', 'utang', 250);
docTwo = new Payment('yoshi', 'work', 250);
let docs = [];
docs.push(docOne, docTwo);
