class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    } // short hand syntax and it only work with access modifiers
    // public get format() { // to make it readonly and not assignable function
    //   return `${this.client} owes $${this.amount} because of ${this.details}`;
    // }
    format() {
        return `${this.client} owes $${this.amount} because of ${this.details}`;
    }
}
export default Invoice;
