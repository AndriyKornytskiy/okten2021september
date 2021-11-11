// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let a = 'hello';
console.log(a);
document.write(a);
// alert(a);
let b = 'owu';
console.log(b);
document.write(b);
// alert(b);
let c = 'com';
console.log(c);
document.write(c);
// alert(c);
let d = 'ua';
console.log(d);
document.write(d);
// alert(d);
let one = 1;
console.log(one);
document.write(one);
// alert(one);
let ten = 10;
console.log(ten);
document.write(ten);
// alert(ten);
let g = -999;
console.log(g);
document.write(g);
// alert(g);
let h = 123;
console.log(h);
document.write(h);
// alert(h);
let PI = 3.14;
console.log(PI);
document.write(PI);
// alert(PI);
let j = 2.7;
console.log(j);
document.write(j);
// alert(j);
let k = 16;
console.log(k);
document.write(k);
// alert(k);
let b1 = true;
console.log(b1);
document.write(b1);
// alert(bool1);
let b2 = false;
console.log(b2);
document.write(b2);
// alert(bool2);

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
a = 'hi';
console.log(a);
document.write(a);
// alert(a);
b = 'world';
console.log(b);
document.write(b);
// alert(b);
c = 'tru';
console.log(c);
document.write(c);
// alert(c);
d = 'Ukraine';
console.log(d);
document.write(d);
// alert(d);
one = '1';
console.log(one);
document.write(one);
// alert(one);
ten = 'ten';
console.log(ten);
document.write(ten);
// alert(ten);
g = 0;
console.log(g);
document.write(g);
// alert(g);
h = 123.321;
console.log(h);
document.write(h);
// alert(h);
PI = true;
console.log(PI);
document.write(PI);
// alert(PI);
j = 'false';
console.log(j);
document.write(j);
// alert(j);
k = 'key';
console.log(k);
document.write(k);
// alert(k);
b1 = false;
console.log(b1);
document.write(b1);
// alert(b1);
b2 = 'false';
console.log(b2);
document.write(b2 + '<br>');
// alert(b2);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = 'Andriy';
let middleName = 'Anatoliyovuch';
let lastName = 'Kornytskiy';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);
document.write(person + '<br>');

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
// let name = prompt('enter your name: ');
// let midName = prompt('enter you middle Name: ');
// let age = prompt('how old are you?');
// console.log(`Вітаю ${name} ${midName}. Тобі ${age} років`);

// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a1 = 100; let b11 = '100'; let c1 = true;
console.log(typeof a1);
console.log(typeof b11);
console.log(typeof c1);

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 > 6 -> false
// 5 == 6 -> false
// 5 >= 6 -> false
// 10 == 10 -> true
// 10 >= 10 -> true
// 10 < 10 -> false
// 10 > 10 -> false
// 10 != 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let aa = 5;
// document.write(str + aa + "<br/>"); ->205
// document.write(str - aa + "<br/>"); ->15
// document.write(str * "2" + "<br/>");->40
// document.write(str / 2 + "<br/>");  ->10

//------------------------------------------------CLASS WORK-------------------------------
// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let nums = [1,3,55,41,-99,8,3.14,5,2.5,100]
let resolt = nums[0] + nums[1] + nums[2] + nums[3] + nums[4] + nums[5] + nums[6] + nums[7] + nums[8] + nums[9];
console.log(resolt);

// 2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let firstBook = {
    title: 'LONDON: THE BIOGRAPHY',
    pages: 664,
    genre: 'Non-fiction'
};

// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let lastBook = {
    title: 'American Gods',
    pages: 696,
    genre: 'Modern prose',
    authors: 'Neil Gaiman'
}

// 4. Створити масив об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let booksArr = [
    lastBook,
    {title: 'The Fault in Our Stars',
        pages: 288,
        genre: 'Сучасний бестселер',
        authors: 'Джон Грін'},
    {title: 'The Tattooist of Auschwitz',
        pages: 320,
        genre: 'Азбука-бестселлер',
        authors: 'Хезер Моррис'},
    {title: 'Guns, germs and steel',
        pages: 512,
        genre: 'Non-fiction',
        authors: 'Джаред Даймонд'}
];
console.log(booksArr[0]);
console.log(booksArr[1]);
console.log(booksArr[2]);
console.log(booksArr[3]);

// 5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
// Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = width * height;
console.log(s);

// 6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
// результат помістіть у змінну v.
let heightC = 10;
let dC = 4;
let v = 3.14 * dC * heightC;
console.log(v);

// 7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
// Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let kk = (Math.sqrt(Math.pow(n,2)+Math.pow(m,2)));
console.log(kk);


