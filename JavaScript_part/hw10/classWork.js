// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
let firstForm = document.createElement('form');
let firstFormFirstInput = document.createElement('input');
firstFormFirstInput.name = 'username';
firstFormFirstInput.type = 'text';
firstFormFirstInput.placeholder = 'enter your name';
let firstFormSecondInput = document.createElement('input');
firstFormSecondInput.name = 'sur_name';
firstFormSecondInput.type = 'text';
firstFormSecondInput.placeholder = 'enter your surname';
let secondForm = document.createElement('form');
let secondFormFirstInput = document.createElement('input');
secondFormFirstInput.name = 'age';
secondFormFirstInput.type = 'number';
secondFormFirstInput.placeholder = 'enter your age';
let secondFormSecondInput = document.createElement('input');
secondFormSecondInput.name = 'status';
secondFormSecondInput.type = 'text';
secondFormSecondInput.placeholder = 'enter your status';
firstForm.append(firstFormFirstInput, firstFormSecondInput);
secondForm.append(secondFormFirstInput, secondFormSecondInput);
document.body.append(firstForm, secondForm);
let formButton = document.createElement('button');
formButton.innerText = 'Read data';
formButton.onclick = () => {
    console.log(`hello my name is ${document.forms[1].username.value} ${document.forms[1].sur_name.value}. I'm ${document.forms[2].age.value} years old, my status is ${document.forms[2].status.value}`);
}
document.body.append(formButton);


// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
let htmlDivElementWrap = document.createElement('div');
htmlDivElementWrap.style.marginTop = '10px';
let inputColumns = document.createElement('input');
inputColumns.name = 'column';
inputColumns.type = 'number';
inputColumns.placeholder = 'number of column';
let inputLines = document.createElement('input');
inputLines.name = 'line';
inputLines.type = 'number';
inputLines.placeholder = 'number of lines';
let inputText = document.createElement('input');
inputText.name = 'innerText';
inputText.type = 'text';
inputText.placeholder = 'enter some text';
let btnTable = document.createElement('button');
btnTable.innerText = 'create table';
btnTable.onclick = () => {
    let table = document.createElement('table');
    for (let i = 0; i < inputColumns.value; i++) {
        if (inputColumns.value >= 1){
            let trElement = document.createElement('tr');
            table.append(trElement);
            for (let i = 0; i < inputLines.value; i++) {
                if (inputLines.value >= 1) {
                    let tdElem = document.createElement('td');
                    tdElem.innerText = inputText.value;
                    trElement.append(tdElem);
                }else  return;
            }
        } else return;
    }
    htmlDivElementWrap.append(table);
}
htmlDivElementWrap.append(inputColumns, inputLines, inputText, btnTable);
document.body.appendChild(htmlDivElementWrap);


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
let badWords = ['dork', 'bitch', 'fuck', 'shit', 'cock', 'pussy', 'asshole', 'ass', 'nigger', 'idiot'];
let badInput = document.createElement('input');
badInput.name = 'badInput';
badInput.type = 'text';
badInput.placeholder = 'don`t use bad words!!!';
let badButton = document.createElement('button');
badButton.innerText = 'Check';
badButton.onclick = () => {
    for (let badWord of badWords) {
        if (badInput.value.includes(badWord)) {
            alert('i`ll told you be polite');
            return;
        }
    }
    console.log(badInput.value);
}
document.body.append(badInput, badButton);
