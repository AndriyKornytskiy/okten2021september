// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
strDirty = ' dirty string   ';
console.log(strDirty.trim());

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
let str = 'Каждый охотник желает знать';
let stringToArray = (str) => str.split(' ');
let toArray = stringToArray(str);
console.log(toArray);

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
let delete_characters = (str, length) => str.slice(0, length);
let characters = delete_characters(str, 7);
console.log(characters);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
let strSkills = "HTML JavaScript PHP";
let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');
let insertDash = insert_dash(strSkills);
console.log(insertDash);

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
let name = 'andriy';
let upperStrChar = (str) => {
    let split = str.split('');
    split[0] = split[0].toUpperCase();
    return split.join('');
};
let upperStrChar1 = upperStrChar(name);
console.log(upperStrChar1);

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
let book = 'harry potter the prisoner of azkaban ';
let capitalize = (str) => {
    let trim = str.trim();
    let splitedArr = trim.split('');
    splitedArr[0] = splitedArr[0].toUpperCase();
    for (let i = 0; i < splitedArr.length; i++) {
        if (splitedArr[i] === ' ') {
            splitedArr[i + 1] = splitedArr[i + 1].toUpperCase();
        }
    }
    return splitedArr.join('');
}
let capitalize1 = capitalize(book);
console.log(capitalize1);

//-------------------------------------------------------------class work-------------------------------------------------------------
// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
let nameValidator = (str) => {
    let trim = str.trim();
    if (trim.includes('.')) {
        let replaced = trim.replaceAll('.', ' ');
        let splited = replaced.split('');
        splited.splice(splited.indexOf(' '), splited.lastIndexOf(' ') - splited.indexOf(' '));
        return splited.join('');
    } else if (trim.includes('-')) {
        let replaced = trim.replaceAll('-', ' ');
        let splited = replaced.split('');
        splited.splice(splited.indexOf(' '), splited.lastIndexOf(' ') - splited.indexOf(' '));
        return splited.join('');
    } else if (trim.includes('_')) {
        let replaced = trim.replaceAll('_', ' ');
        let splited = replaced.split('');
        splited.splice(splited.indexOf(' '), splited.lastIndexOf(' ') - splited.indexOf(' '));
        return splited.join('');
    }
}
console.log(nameValidator(n1));
console.log(nameValidator(n2));
console.log(nameValidator(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomiser = (arrLength) => {
    let arr = [];
    for (let i = 0; i < arrLength; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let sort = randomiser(10).sort((a, b) => a - b);
console.log(sort);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
let filter = randomiser(20).filter(value => value % 2 === 0);
console.log(filter);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let strings = randomiser(10).map(value => value + '');
console.log(strings);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
let nums = [11, 21, 3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let sortNums = (arr, direction = 'ascending') => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    } else {
        return 'something wrong!!??'
    }
};
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let sort1 = coursesAndDurationArray
    .filter(value => value.monthDuration > 5)
    .sort((a, b) => b.monthDuration - a.monthDuration);
console.log(sort1);
