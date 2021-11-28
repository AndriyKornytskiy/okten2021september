// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [];

users.push(new User(1, 'dima', 'popov', 'dimon@mail.com', '380978888888'));
users.push(new User(5, 'kolya', 'kokos', 'kolyan21@gmail.com', '380658866888'));
users.push(new User(10, 'anton', 'petrov', 'antWWW@mail.gb', '380973333333'));
users.push(new User(12, 'sara', 'pavlova', 'pava@mail.h', '38888888'));
users.push(new User(21, 'dasha', 'ivanova', 'dashOVA@mail.in.ua', '380508888666'));
users.push(new User(16, 'boris', 'borcov', 'borec@gmail.com', '380978654388'));
users.push(new User(13, 'anna', 'wind', 'annaWi@mail.yahho.com', '344488888'));
users.push(new User(2, 'katya', 'chill', 'chillout@mail.uk', '3580978888888'));
users.push(new User(8, 'james', 'bond', 'JB@mail.com.uk', '15444789'));
users.push(new User(99, 'alisa', 'milano', 'milana@mail.ch', '45265877'));

console.log(users);
console.log(users[0].id);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedAsc = users.sort((a, b) => a.id - b.id);
console.log(sortedAsc);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order = []) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
// створити пустий масив, наповнити його 10 об'єктами Client
let clientsList = [];

clientsList.push(new Client(1,'kolya', 'viter', 'wind@mail.ua', '3999777555', ['phone']));
clientsList.push(new Client(2, 'masha', 'hmara', 'email@mail.com', '877412214', ['lipstic', 'cosmetic']));
clientsList.push(new Client(3, 'dasha', 'denus', 'email@mail.com', '877412215', ['heir drier', 'polo', 'socks', 'bottle']));
clientsList.push(new Client(4, 'katya', 'koval', 'email@mail.com', '877412216', ['tv', 'dvd']));
clientsList.push(new Client(5, 'sasha', 'zhyk', 'enail@mail.com', '4659811789', ['lego']));
clientsList.push(new Client(6, 'boris', 'kohyt', 'enail@mail.com', '4659811789', ['bike', 'helm', 'bottle']));
clientsList.push(new Client(7, 'anton', 'avakov', 'enail@mail.com', '4659811789', ['saw', 'axe', 'hammer', 'drill']));
clientsList.push(new Client(8, 'roman', 'novak', 'enail@mail.com', '4659811789', ['iron', 'jacket']));
clientsList.push(new Client(9, 'bohdan', 'bilyi', 'enail@mail.com', '4659811789', ['screw', 'nails', 'hammer', 'axe', 'paint', 'lamp']));
clientsList.push(new Client(10, 'valya', 'puch', 'enail@mail.com', '4659811789', ['pc', 'printer']));

console.log(clientsList);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClientByOrderList = clientsList.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClientByOrderList);

//---------------------------------------------------------CLASS WORK-----------------------------------------------------------------------
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car (model, producer, year, maxSpeed, vEngine) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.vEngine = vEngine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    this.info = function () {
        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`vEngine - ${this.vEngine}`);
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
    };
    this.addDriver = function (name, age, experience) {
        this.driver = {name: name, age: age, experience: experience};
    }
}
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class Cars {
    constructor(model, producer, year, maxSpeed, vEngine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.vEngine = vEngine;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`);
    };
    info () {
        console.log(`model - ${this.model}`);
        console.log(`producer - ${this.producer}`);
        console.log(`year - ${this.year}`);
        console.log(`maxSpeed - ${this.maxSpeed}`);
        console.log(`vEngine - ${this.vEngine}`);
    };
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = newSpeed;
    };
    changeYear (newYear) {
        this.year = newYear;
    };
    addDriver (name, age, experience) {
        this.driver = {name: name, age: age, experience: experience};
    };
}

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
let princesses = [];
princesses.push(new Cinderella('Alisa', 18, 25));
princesses.push(new Cinderella('Milana', 19, 26));
princesses.push(new Cinderella('Alina', 20, 28));
princesses.push(new Cinderella('Alla', 17, 31));
princesses.push(new Cinderella('Fatima', 18, 32));
princesses.push(new Cinderella('Sara', 21, 30));
princesses.push(new Cinderella('Zola', 22, 35));
princesses.push(new Cinderella('Salma', 23, 36));
princesses.push(new Cinderella('Agata', 25, 37));
princesses.push(new Cinderella('Bella', 20, 29));
console.log(princesses);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    };
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    findCinderella (arr) {
        for (let princes of arr) {
            if (princes.footSize === this.shoeSize) {
                console.log(`${princes.name} finally i find you!!! `);
            }
        }
    };
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
    findPrincess (arr) {
        arr.find(value => {
            if (value.footSize === this.shoeSize) {
                console.log(`${value.name} finally i find you!!! `);
            }
        });
    };
}

let prince = new Prince('alladin', 21, 37);
prince.findCinderella(princesses);
prince.findPrincess(princesses);

//-----------------------------------------------------ADDITIONAL---------------------------------------------------------
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//     suite: 'Apt. 556',
//     city: 'Gwenborough',
//     zipcode: '92998-3874',
//     geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
// }
// }
// //
class Employee {
    constructor(id, name, userName, email, addressStreet, addressSuit, addressCity, addressZipcode, addressGeoLat, addressGeoLng, phone, website, companyName, companyCatchPhrase, companyBs)
    {
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.address =
        {
            street: addressStreet,
            suit: addressSuit,
            city: addressCity,
            zipcode: addressZipcode,
            geo: {
                lat: addressGeoLat,
                lng: addressGeoLng
            }
        }
        this.phone = phone;
        this.website = website;
        this.company =
         {
            name: companyName,
            catchPhrase: companyCatchPhrase,
            bs: companyBs
        }
    }
}

// -  Створити функцію конструктор / клас  який описує об'єкт тегу

// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }


class Tag {

    constructor(titleOfTag, action, [...attrs]) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [...attrs];
    }
}

let tagA = new Tag('a',`Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.`,
    [{titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
        {titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.'},
        {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда браузер будет загружать документ.'}]);
console.log(tagA);
let tagDiv = new Tag('div',`Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.`,
    [{titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.'},
        {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
console.log(tagDiv);
let tagH1 = new Tag('h1',`Тег <h1> представляет собой наиболее важный заголовок первого уровня.`,
    [{titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'},
        {titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.'}]);
console.log(tagH1);
let tagSpan = new Tag('span',`Тег <span> предназначен для определения строчных элементов документа. В отличие от блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.`,
    [{titleOfAttr: 'class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением'},
        {titleOfAttr: 'dir', actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'}]);
console.log(tagSpan);
let tagInput = new Tag('input',`Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.`,
    [{titleOfAttr: 'checked', actionOfAttr: 'Предварительно активированный переключатель или флажок.'},
        {titleOfAttr: 'type', actionOfAttr: 'Сообщает браузеру, к какому типу относится элемент формы.'},
        {titleOfAttr: 'value', actionOfAttr: 'Значение элемент'}]);
console.log(tagInput);
let tagForm = new Tag('form',`Тег <form> устанавливает форму на веб-странице. Форма предназначена для обмена данными между пользователем и сервером. Область применения форм не ограничена отправкой данных на сервер, с помощью клиентских скриптов можно получить доступ к любому элементу формы, изменять его и применять по своему усмотрению.`,
    [{titleOfAttr: 'action', actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы.'},
        {titleOfAttr: 'name', actionOfAttr: 'Имя формы.'},
        {titleOfAttr: 'target', actionOfAttr: 'Имя окна или фрейма, куда обработчик будет загружать возвращаемый результат.'}]);
console.log(tagForm);
let tagOption = new Tag('option',`Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. Ширина списка определяется самым широким текстом, указанным в теге <option>, а также может изменяться с помощью стилей. Если планируется отправлять данные списка на сервер, то требуется поместить элемент <select> внутрь формы. Это также необходимо, когда к данным списка идет обращение через скрипты.`,
    [{titleOfAttr: 'disabled', actionOfAttr: 'Заблокировать для доступа элемент списка.'},
        {titleOfAttr: 'selected', actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'},
        {titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}]);
console.log(tagOption);
let tagSelect = new Tag('select',`Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.`,
    [{titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.'},
        {titleOfAttr: 'required', actionOfAttr: 'Список обязателен для выбора перед отправкой формы.'},
        {titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка'}]);
console.log(tagSelect);