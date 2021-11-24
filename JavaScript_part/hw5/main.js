// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника висотою
let rectangleS = (a, b) => a * b;
console.log(rectangleS(10, 5));

// - створити функцію яка обчислює та повертає площу кола
let circleS = (radius) => Math.round(Math.PI * Math.pow(radius, 2));
console.log(circleS(5));

// - створити функцію яка обчислює та повертає площу циліндру
let cylinderS = (height, radius) => Math.round(2 * Math.PI * radius * (height + radius));
console.log(cylinderS(5,5));

// - створити функцію яка приймає масив та виводить кожен його елемент
let mixArray = ['hello', 'js', 1, 2, 3, true, false];
let arrayPrinter = (array) => {
    for (let item of array) {
        console.log(item);
    }
}
arrayPrinter(mixArray);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент
let paragraphMaker = (some_text) => document.write(`<p>${some_text}</p>`);
paragraphMaker('hello');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let fixedListMaker = (inside_text) => {
    document.write(`<ul>
        <li>${inside_text}</li>
        <li>${inside_text}</li>  
        <li>${inside_text}</li>
    </ul>`);
}
fixedListMaker('wow');

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let definiteListMaker = (inside_text, numberOfListItems = 3) => {
    document.write(`<ul>`);
    for (let i = 0; i < numberOfListItems; i++) {
        document.write(`<li>${inside_text}</li>`);
    }
    document.write(`</ul>`);
}
definiteListMaker('zorro',5);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listMaker = (array) => {
    document.write(`<ul>`);
    for (let item of array) {
        document.write(`<li>${item}</li>`);
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
let objectPrinter = (array) => {
    for (let item of array) {
        document.write(`<div>`);
        for (let elementKey in item) {
            document.write(`<div>${elementKey} : ${item[elementKey]}</div>`);
        }
        document.write(`</div>`);
    }
}
objectPrinter(usersWithId);

//-------------------------------------------------class work---------------------------------------------------------------
// Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
let findMin = (a, b, c) => {
    if (a <= b && a <= c) {
        console.log(`the min number is ${a}`);
    } else if (b <= a && b <= c) {
        console.log(`the min number is ${b}`);
    } else {
        console.log(`the min number is ${c}`);
    }
}
findMin(10, 100, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
let findMax = (a, b, c) => {
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

let maxReturn = (array) => {
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
let minReturn = (array) => {
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
let addArrayItems = (array) => {
    let sum = 0;
    for (let item of array) {
        sum = sum + item;
    }
    return sum;
}
let addArrayItems1 = addArrayItems(numbersArr);
console.log(addArrayItems1);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
let arithmeticMean = (array) => addArrayItems(array) / array.length;
let arithmeticMean1 = arithmeticMean(numbersArr);
console.log(arithmeticMean1);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
let maxMinFind = (...args) => {
    let max = args[0];
    let min = args[0];
    for (let i = 1; i < args.length; i++) {
        if (args[i] > max) {
            max = args[i];
        }
        if (args[i] < min) {
            min = args[i];
        }
    }
    console.log(`the max number is ${max}`);
    return min;
}
let maxMinFind1 = maxMinFind(0, 2, 5, 8, 44, 1, -100);
console.log(maxMinFind1);

// - створити функцію яка заповнює масив рандомними числами (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
let randomArray = [];

let fillArray = (arrayToFill, lengthOfArray) => {
    for (let i = 0; i < lengthOfArray; i++) {
        arrayToFill[i] = Math.round(Math.random() * 100);
    }
}
fillArray(randomArray, 10);
console.log(randomArray);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
let randomArray2 = [];
let fillArrayMod = (arrayToFill, lengthOfArray, limit) => {
    for (let i = 0; i < lengthOfArray; i++) {
        arrayToFill[i] = Math.round(Math.random() * limit);
    }
}
fillArrayMod(randomArray2, 10, 1000);
console.log(randomArray2);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
let arrForRevers = [11,27,8,9,10,20,100];

let reverseArray = (array) => {
    let reverse = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reverse[array.length - 1 - i] = array[i];
    }
    return reverse;
}
let reversed = reverseArray(arrForRevers);
console.log(reversed);