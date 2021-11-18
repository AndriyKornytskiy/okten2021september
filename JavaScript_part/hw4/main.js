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

//---------------------------------------------CLASS WORK-------------------------------------------
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
function findMin(a, b, c) {
    if (a <= b && a <= c) {
        console.log(`the min number is ${a}`);
    } else if (b <= a && b <= c) {
        console.log(`the min number is ${b}`);
    } else {
        console.log(`the min number is ${c}`);
    }
}

findMin(10, 10, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
function findMax(a, b, c) {
    if (a >= b && a >= c) {
        console.log(`the max number is ${a}`);
    } else if (b >= a && b >= c) {
        console.log(`the max number is ${b}`);
    } else {
        console.log(`the max number is ${c}`);
    }
}

findMax(10, 19, 28);

// - створити функцію яка повертає найбільше число з масиву
let numbersArr = [12, 23, 45, 670, 89, 90, 65, 43, 1111, 6];

function maxReturn(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

let maxReturn1 = maxReturn(numbersArr);
console.log(maxReturn1);

// - створити функцію яка повертає найменьше число з масиву
function minReturn(array) {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

let minReturn1 = minReturn(numbersArr);
console.log(minReturn1);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
function addArrayItems(array) {
    let sum = 0;
    for (let item of array) {
        sum = sum + item;
    }
    return sum;
}

let addArrayItems1 = addArrayItems(numbersArr);
console.log(addArrayItems1);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
function arithmeticMean(array) {
    let sum = 0;
    for (let item of array) {
        sum = sum + item;
    }
    return sum / array.length;
}

let arithmeticMean1 = arithmeticMean(numbersArr);
console.log(arithmeticMean1);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
function maxMinFind() {
    let max = arguments[0];
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(`the max number is ${max}`);
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

let maxMinFind1 = maxMinFind(2, 5, 8, 4, 1);
console.log(maxMinFind1);

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomArray = [];
let randomArray2 = [];

function fillArray(arrayToFill, lengthOfArray) {
    for (let i = 0; i < lengthOfArray; i++) {
        arrayToFill[i] = Math.round(Math.random() * 100);
    }
}
fillArray(randomArray, 10);
console.log(randomArray);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
function fillArrayMod(arrayToFill, lengthOfArray, limit) {
    for (let i = 0; i < lengthOfArray; i++) {
        arrayToFill[i] = Math.round(Math.random() * limit);
    }
}
fillArrayMod(randomArray2, 10, 1000);
console.log(randomArray2);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrForRevers = [11,27,8,9,10,20,100];

function reverseArray(array) {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse[array.length - 1 - i] = array[i];
    }
    return reverse;
}
let reversed = reverseArray(arrForRevers);
console.log(reversed);
