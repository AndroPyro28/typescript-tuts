import Invoice from "./classes/Invoice.js"; // we have to use .js because .ts is not recognizeable by browser
import Payment from "./classes/Payment.js";
import HasFormatter from "./interfaces/HasFormatter.js";
import ListTemplate from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form')!;

form.addEventListener('submit', (e: Event):void => {
    e.preventDefault();

    const type = document.querySelector('#type') as HTMLSelectElement;
    const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
    const details = document.querySelector('#details') as HTMLInputElement;
    const amount = document.querySelector('#amount') as HTMLInputElement;

    // list template instance

    const ul = document.querySelector('ul') !;
    const List = new ListTemplate(ul);

    let doc:HasFormatter;

    let tupleValues:[string, string, number] = [toFrom.value, details.value, amount.valueAsNumber]

    if(type.value === 'invoice') {
        doc = new Invoice(...tupleValues); // same params params datatype
    }

    else {
        doc = new Payment(...tupleValues); // same params params datatype
    }

    List.render(doc, type.value, 'end');
})