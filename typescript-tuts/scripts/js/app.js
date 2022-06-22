import Invoice from "./classes/Invoice.js"; // we have to use .js because .ts is not recognizeable by browser
import Payment from "./classes/Payment.js";
import ListTemplate from "./classes/ListTemplate.js";
const form = document.querySelector('.new-item-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.querySelector('#type');
    const toFrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    // list template instance
    const ul = document.querySelector('ul');
    const List = new ListTemplate(ul);
    let doc;
    let tupleValues = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...tupleValues); // same params params datatype
    }
    else {
        doc = new Payment(...tupleValues); // same params params datatype
    }
    List.render(doc, type.value, 'end');
});
