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
export default Invoice;
