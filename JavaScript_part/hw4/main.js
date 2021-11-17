// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function rectangleSquare(a, b) {
    return a * b;
}

let rectangle = rectangleSquare(4, 5);
console.log(rectangle);

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function circleSquare(radius) {
    return Math.round(Math.PI * Math.pow(radius, 2));
}

let circle = circleSquare(5);
console.log(circle);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderSquare(height, radius) {
    return Math.round(2 * Math.PI * radius * (height + radius));
}

let cylinder = cylinderSquare(2, 3);
console.log(cylinder);

// - створити функцію яка приймає масив та виводить кожен його елемент
let mixArray = ['hello', 'js', 1, 2, 3, true, false];

function arrayPrinter(array) {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
}

arrayPrinter(mixArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function paragraphMaker(some_text) {
    document.write(`<p>${some_text}</p>`);
}

paragraphMaker('i see dead people');
paragraphMaker('winter is coming');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function fixedListMaker(inside_text) {
    document.write(`<ul>
        <li>${inside_text}</li>
        <li>${inside_text}</li>  <!--так може бути чи все потрібно в окремий документ врайт брати?-->
        <li>${inside_text}</li>
    </ul>`);
}

fixedListMaker('hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function definiteListMaker(inside_text, numberOfListItems = 3) {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfListItems; i++) {
        document.write(`<li>${inside_text}</li>`);
    }
    document.write(`</ul>`);
}

definiteListMaker('world of warcraft');
definiteListMaker('world of warcraft', 10);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function listMaker(array) {
    document.write(`<ul>`);
    for (let arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

listMaker(mixArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let usersWithId = [
    {id: 1, name: 'vasya', age: 31},
    {id: 2, name: 'petya', age: 30},
    {id: 3, name: 'kolya', age: 29},
    {id: 4, name: 'olya', age: 28}
];
function objectPrinter (array) {
    document.write(`<div class="users">`);
    for (let arrayElement of array) {
        document.write(`<div>`);
        for (let elementKey in arrayElement) {
            document.write(`<div>${elementKey} : ${arrayElement[elementKey]}</div>`);
        }
        document.write(`</div>`);
    }
    document.write(`</div>`);
}

objectPrinter(usersWithId);