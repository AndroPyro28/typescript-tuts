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

  export default Invoice;