// // - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// // (в першу, другу, третю или четверту частину години).
let time = Math.floor(Math.random() * 60);
if (time >= 0 && time <= 15) {
    console.log(`${time} in first quarter`);
} else if (time >=16 && time <= 30) {
    console.log(`${time} in second quarter`);
} else if (time >=31 && time <= 45) {
    console.log(`${time} in third quarter`);
} else if (time >=46 && time <= 59) {
    console.log(`${time} in fourth quarter`);
} else {
    console.log('wrong time!!!');
}
// // - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = Math.floor(Math.random() * (32 - 1) + 1);
if (day >= 1 && day <=10) {
    console.log(`${day} in first decade`);
} else if (day >= 11 && day <=20) {
    console.log(`${day} in second decade`);
} else if (day >= 21 && day <=31) {
    console.log(`${day} in third decade`);
} else {
    console.log('wrong date');
}
// // - У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// //     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = '';
if (test) {
    console.log('Неправильно');
} else {
    console.log('Вірно');
}
// //----------------------ТЕРНАРКА
test ? console.log('Неправильно') : console.log('Вірно');
// // - Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = 0;
if (a !== 0) {
    console.log('Вірно');
} else {
    console.log('Невірно');
}
// // - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let dayOfWeek = +prompt('day of week');
switch (dayOfWeek) {
    case 1 :
        console.log('20:00 visit ZOOM meeting');
        break;
    case 2 :
        console.log('20:00 visit practice');
        break;
    case 3 :
        console.log('19:45 visit ZOOM meeting');
        break;
    case 4 :
        console.log('18:00 visit practice');
        break;
    case 5 :
        console.log('20:00 visit ZOOM meeting');
        break;
    case 6 :
        console.log('english lessons');
        break;
    case 7 :
        console.log('day off');
        break;
    default :
        console.log('no plans');
}
// // - Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = +prompt('enter year','2021');
if (year % 4 === 0) {
    console.log(`${year} a leap year`);
} else {
    console.log(`${year} isn't a leap year`);
}
// // - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// // Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let answer = prompt('Яка «офіційна» назва JavaScript?');
if (answer === 'ECMAScript') {
    console.log('Правильно!');
} else {
    console.log('Не знаєте? ECMAScript!');
}

//----------------------------------------------------------CLASS WORK----------------------------------
// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.
let firstNum = +prompt('enter first number');
let secondNum = +prompt('enter second number');
if (firstNum > secondNum) {
    console.log(`${firstNum} is maximal`);
} else if (firstNum === secondNum) {
    console.log('numbers are equal');
} else {
    console.log(`${secondNum} is maximal`);
}
// - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let flat = +prompt('enter flat number');
if (flat >= 1 && flat <= 20) {
    console.log(`${flat} in first entrance`);
} else if (flat >= 21 && flat <= 48) {
    console.log(`${flat} in second entrance`);
} else if (flat >= 49 && flat <= 90) {
    console.log(`${flat} in third entrance`);
} else {
    console.log('wrong flat');
}
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = +prompt('enter number');
number !== 10 ? console.log('НЕВІРНО') : console.log('ВІРНО');
// - Ми маємо змінну x в яку користувач задає  значення,  якщо в змінну записане число, вивести 1,
//     якщо в змінну записали стрінгу вивести 2, якщо булеве значення - 3, якщо об'єкт або масив - 3. якщо в змінну записали щось інше, спрацьовує else
let x = {};
let type = typeof x;
if (type === 'number') {
    console.log(1);
} else if (type === 'string') {
    console.log(2);
} else if (type === 'boolean') {
    console.log(3);
} else if (type === 'object') {
    console.log(4);
} else {
    console.log('undefined');
}
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = prompt('what temperature is outside?');
temperature >= 10 && temperature <= 22 ? console.log('ми йдемо ВЧИТИСЯ!!!') : console.log('сидимо вдома і вчимося ОНЛАЙН');
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let value = +prompt('enter number from 1 to 5');
switch (value) {
    case 1 :
        console.log('you won Phone!!!');
        break;
    case 2 :
        console.log('try again!');
        break;
    case 3 :
        console.log('you won Auto!!!');
        break;
    case 4 :
        console.log('try again!');
        break;
    case 5 :
        console.log('you won Moto!!!');
        break;
    default :
        console.log('wrong value');
}