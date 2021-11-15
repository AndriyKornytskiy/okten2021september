// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let arrOfNums = [0,99,-100,3.14,21];
let arrOfStrings = ['hello', 'moto', 'dota', 'okten', 'neo'];
let arrMix = [true, 88, false, 44, 'lviv'];
console.log(arrOfNums);
console.log(arrOfStrings);
console.log(arrMix);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let newArr = [];
newArr[0] = 2016;
newArr[1] = true;
newArr[2] = 'ok10';
newArr[3] = 'java script';
newArr[4] = 2021;
console.log(newArr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write('<div>java script</div>')
}
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>just do it ${i}</div>`)
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write('<h1>i see dead people</h1>');
    i++;
}
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write(`<h1>winter is coming ${j}</h1>`);
    j++;
}
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
for (const value of arrOfNums) {
    console.log(value);
}
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
for (const value of arrOfStrings) {
    console.log(value);
}
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
for (const value of arrMix) {
    console.log(value);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
for (const value of arrMix) {
    if (typeof value === 'boolean')
    console.log(value);
}
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (const value of arrMix) {
    if (typeof value === 'number')
        console.log(value);
}
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (const value of arrMix) {
    if (typeof value === 'string')
        console.log(value);
}
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
for (const element of newArr) {
    console.log(element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    document.write(i);
    console.log(i);
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i++) {
    document.write(i);
    console.log(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i+=2) {
    document.write(i);
    console.log(i);
}
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i = 1; i < 100; i+=2) {
    document.write(i);
    console.log(i);
}

//------------------------------------------------------CLASS WORK--------------------------------------------
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let numbers = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
let k = 0;
while (k < numbers.length) {
    console.log(numbers[k]);
    k++;
}
// 2. перебрати його циклом for
for (let elem of numbers){
    console.log(elem);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
let l = 1;
while (l < numbers.length) {
    console.log(numbers[l]);
    l+=2;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = 1; i < numbers.length; i+=2) {
    console.log(numbers[i]);
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
let m = 0;
while (m < numbers.length) {
    console.log(numbers[m]);
    m+=2;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let i = 0; i < numbers.length; i+=2) {
    console.log(numbers[i]);
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0) {
        numbers[i] = 'okten';
    }
}
console.log(numbers);
// 8. вивести масив в зворотньому порядку.
for (let i = numbers.length - 1; i >= 0; i--) {
    console.log(numbers[i]);
}
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//перебрати його циклом while
let q = numbers.length - 1;
while (q >= 0) {
    console.log(numbers[q]);
    q--;
}
//перебрати його циклом for
for (let i = numbers.length - 1; i >= 0; i--){
    console.log(numbers[i]);
}
//перебрати циклом while та вивести  числа тільки з непарним індексом
let w = numbers.length - 1;
while (w >= 1) {
    console.log(numbers[w]);
    w-=2;
}
//перебрати циклом for та вивести  числа тільки з непарним індексом
for (let i = numbers.length - 1; i >= 1; i-=2) {
    console.log(numbers[i]);
}
//перебрати циклом while та вивести  числа тільки парні  значення
let n = numbers.length - 2;
while (n >= 0) {
    console.log(numbers[n]);
    n-=2;
}
//перебрати циклом for та вивести  числа тільки парні  значення
for (let i = numbers.length - 2; i >= 0; i-=2) {
    console.log(numbers[i]);
}
//замінити кожне число кратне 3 на слово "okten"
for (let i = numbers.length - 1; i >= 0; i--) {
    if (numbers[i] % 3 === 0) {
        numbers[i] = 'okten';
    }
}
