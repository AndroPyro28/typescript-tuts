class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
        // public get format() { // to make it readonly and not assignable function
        //   return `${this.client} owes $${this.amount} because of ${this.details}`;
        // }
        this.format = () => {
            return `${this.recipient} owes $ ${this.amount} for ${this.details}`;
        };
    }
}
export default Payment;
