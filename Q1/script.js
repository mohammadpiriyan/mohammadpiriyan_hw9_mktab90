

const table = document.querySelector("#age-table");
console.log(table);

const labels = table.querySelectorAll("label");
console.log(labels);

const age = table.querySelector("td:first-child").innerHTML;
console.log(age);


const form = document.querySelector('[name="search-person"]');
console.log(form);

const firstInput = form.querySelector("input:first-child");
console.log(firstInput);

const lastInputs = form.querySelectorAll("input:last-child");
const lastInput = lastInputs[lastInputs.length - 1];
console.log(lastInput);