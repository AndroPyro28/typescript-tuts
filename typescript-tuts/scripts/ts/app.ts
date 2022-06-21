// classes

class Invoice {
  constructor(
    public client: string,
    public details: string,
    public amount: number
  ) {} // short hand syntax and it only work with access modifiers

  public get format() {
    return `${this.client} owes $${this.amount} because of ${this.details}`;
  }
}

const invOne = new Invoice("lyssa", "utang", 1500);
const invTwo = new Invoice("friends ni doms", "utang", 1500);

console.log({
  format1: invOne.format,
  format2: invTwo.format,
});

let invoices: Invoice[] = [];
invoices.push(invOne, invTwo);
