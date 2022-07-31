import HasFormatter from "../interfaces/HasFormatter.js";

class Payment implements HasFormatter {
  constructor(
    public recipient: string,
    public details: string,
    public amount: number
  ) {}



  // public get format() { // to make it readonly and not assignable function
  //   return `${this.client} owes $${this.amount} because of ${this.details}`;
  // }

  format = (): string => {
    return `${this.recipient} owes $ ${this.amount} for ${this.details}`;
  };
}

export default Payment;
