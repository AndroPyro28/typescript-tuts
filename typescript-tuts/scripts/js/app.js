"use strict";
// classes
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } // short hand syntax and it only work with access modifiers
    get format() {
        return `${this.client} owes $${this.amount} because of ${this.details}`;
    }
}
const invOne = new Invoice("lyssa", "utang", 1500);
const invTwo = new Invoice("friends ni doms", "utang", 1500);
console.log({
    format1: invOne.format,
    format2: invTwo.format,
});
let invoices = [];
invoices.push(invOne, invTwo);
