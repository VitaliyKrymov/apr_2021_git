// -створити класс пeопелюшка з полями ім'я, вік, розмір ноги
// class Popelushka{
//     constructor(name,age,sizeFoot) {
//         this.name=name||'No name';
//         this.age=age||99;
//         this.sizeFoot=sizeFoot||42;
//     }
// }
// // --Створити 10 попелюшок , покласти їх в масив
// const Kristi=new Popelushka('Kristi',19,37);
// const Katia=new Popelushka('Katia',20,38);
// const Karina=new Popelushka('Karina',21,39);
// const Klara=new Popelushka('Klara',22,37);
// const Klava=new Popelushka('Klava',21,36);
// const Kira=new Popelushka('Kira',23,39);
// const Olia=new Popelushka('Olia',24,38);
// const Tania=new Popelushka('Tania',26,39);
// const Sveta=new Popelushka('Sveta',15,38);
// const Sasha=new Popelushka('Sasha',18,36);
//
// let PopelushkaArr=[Kristi,Katia,Karina,Klara,Klava,Kira,Olia,Tania,Sveta,Sasha];
// console.log(PopelushkaArr);
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Prins {
//     constructor(name,age,sizeSlipper) {
//         this.name=name||'No name';
//         this.age=age||99;
//         this.sizeSlipper=sizeSlipper||42;
//     }
// }
// const PrinsVasia = new Prins('Vasia',21,36);

// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// let i=0;
// for (const Pop of PopelushkaArr) {
//          if (Pop.sizeFoot === PrinsVasia.sizeSlipper){
//             console.log(`Prins ${PrinsVasia.name} find Popelushka ${Pop.name}`);
//              i++;
//              }
//              }
// if (i===0){ console.log(`Prins ${PrinsVasia.name} dont find Popelushka`)};
// if (i>1){ console.log(`Prins ${PrinsVasia.name} dont know what to do???`)};
//
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// function Popelushka(name,age,sizeFoot) {
//         this.name=name||'No name';
//         this.age=age||99;
//         this.sizeFoot=sizeFoot||42;
// }
// // --Створити 10 попелюшок , покласти їх в масив
//  Kristi=new Popelushka('Kristi',19,37);
//  Katia=new Popelushka('Katia',20,38);
//  Karina=new Popelushka('Karina',21,39);
//  Klara=new Popelushka('Klara',22,37);
//  Klava=new Popelushka('Klava',21,36);
//  Kira=new Popelushka('Kira',23,39);
//  Olia=new Popelushka('Olia',24,38);
//  Tania=new Popelushka('Tania',26,39);
//  Sveta=new Popelushka('Sveta',15,38);
//  Sasha=new Popelushka('Sasha',18,36);
// let PopelushkaArr=[Kristi,Katia,Karina,Klara,Klava,Kira,Olia,Tania,Sveta,Sasha];

// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік,
// туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// function Prins (name,age,sizeSlipper) {
//         this.name = name || 'No name';
//         this.age = age || 99;
//         this.sizeSlipper = sizeSlipper || 42;
//         this.Fainder = function(PopelushkaArr){
//               let i=0;
//                  for (const Pop of PopelushkaArr) {
//                    if (Pop.sizeFoot === sizeSlipper){
//                      console.log(`Prins ${name} find Popelushka ${Pop.name}`);
//                    i++;
//                    }
//                    }
//                    if (i===0){ console.log(`Prins ${name} dont find Popelushka`)};
//                    if (i>1){ console.log(`Prins ${name} dont know what to do???`)};
//         }
// }
//
// let Oleg= new Prins('Oleg',25,39);
// Oleg.Fainder(PopelushkaArr);
//


// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
// -назва тегу
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
//         action: Каждый элемент <area> определяет активные области изображения, которые являются ссылками...,
//     attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//     ]
//
// }
// function Tegs(titleOfTag, action, attrs) {
//     this.titleOfTag = titleOfTag || 'no name';
//     this.action = action || 'no descriptionTag';
//     this.attrs = attrs || 'no attributs';
// }
//
// let title = '<a>'
// let action = 'Tег <a>  предназначен для создания ссылок,устанавливает ссылку или якорь.';
// let atributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Активация ссылки с помощью комбинации клавиш.'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области.'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
// ];
// let a = new Tegs(title, action, atributes);
// console.log(a);
// let div = new Tegs('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента' +
//     ' документа с целью изменения вида содержимого.', [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Задает выравнивание содержимого тега <div>.'
// }, {titleOfAttr: 'title', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'}]);
// console.log(div);
// let h1 = new Tegs('<h1>', 'Тег <h1> представляет собой наиболее важный заголовок первого уровня. ' +
//     "По умолчанию, заголовок первого уровня отображается самым крупным шрифтом жирного начертания.", [{
//     titleOfAttr: 'align',
//     actionOfAttr: 'Определяет выравнивание заголовка.'
// },]);
// console.log(h1);
// let span = new Tegs('<span>', 'Тег <span> предназначен для определения строчных элементов документа. В отличие от' +
//     ' блочных элементов, таких как <table>, <p> или <div>, с помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
// }, {
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }]);
// console.log(span);
// let input = new Tegs('<input>', 'Тег <input> является одним из разносторонних элементов формы и ' +
//     'позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. Главным образом <input> ' +
//     'предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.'
// }, {
//     titleOfAttr: 'class',
//     actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'
// }]);
// console.log(input);
// let form = new Tegs('<form>', 'Тег <form> Связывает поле с формой по её идентификатору.', [{
//     titleOfAttr: '',
//     actionOfAttr: ''
// },]);
// console.log(form);
// let option = new Tegs('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.', [{
//     titleOfAttr: 'disabled',
//     actionOfAttr: 'Заблокировать для доступа элемент списка.'
// }, {
//     titleOfAttr: 'label',
//     actionOfAttr: 'Указание метки пункта списка.'
// }, {
//     titleOfAttr: 'selected',
//     actionOfAttr: 'Заранее устанавливает определенный пункт списка выделенным.'
// }]);
// console.log(option);
// let select = new Tegs('<select>', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее. Конечный вид зависит от использования атрибута size тега <select>, который устанавливает высоту списка.', [{
//     titleOfAttr: 'accesskey',
//     actionOfAttr: 'Позволяет перейти к списку с помощью некоторого сочетания клавиш.'
// }, {
//     titleOfAttr: 'autofocus',
//     actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
// }, {
//     titleOfAttr: 'disabled',
//     actionOfAttr: 'Блокирует доступ и изменение элемента.'
// }]);
// console.log(select);


// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// function User (id, name, surname , email, phone){
//     this.id = id || 9999;
//     this.name=name ||'no name' ;
//     this.surname=surname || '??????';
//     this.email=email || 'hjkhkhh@ukr.net';
//     this.phone=phone || '+380951111111';
// }
// створити пустий масив, наповнити його 10 об'єктами User
//  Kristi=new User(1,'Kristi','Smith','Kristi@ukr.net','+380675748574');
//  Katia=new User(2,'Katia','Smith','Katia@ukr.net','+380675567574');
//  Karina=new User(3,'Karina','Williams','Karina@ukr.net','+380675748543');
//  Klara=new User(4,'Klara','22','Klara@ukr.net','+380675721574');
//  Klava=new User(5,'Klava','Brown','Klava@ukr.net','+380676748574');
//  Kira=new User(6,'Kira','Jones','Kira@ukr.net','+380675748974');
//  Olia=new User(7,'Olia','Garcia','Olia@ukr.net','+380675118574');
//  Tania=new User(8,'Tania','Miller','Tania@ukr.net','+380675747851');
//  Sveta=new User(9,'Sveta','Davis','Sveta@ukr.net','+380675748333');
//  Sasha=new User(10,'Sasha','Dias','Sasha@ukr.net','+380675748444');
//
//  let UserArr =[Kristi,Katia,Karina,Klara,Klava,Kira,Olia,Tania,Sveta,Sasha];
// console.log(UserArr);

// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor (id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const Kristi = new Client(1,'Kristi','Smith','Kristi@ukr.net','+380675748574',['vine Martini']);
// const Katia = new Client(2, 'Katia', 'Smith', 'Katia@ukr.net', '+380675567574', ['Solianka', 'vodka Khlibniy Dar']);
// const Karina = new Client(3, 'Karina', 'Williams', 'Karina@ukr.net', '+380675748543', ['Borsh', 'vine Martini Bianka']);
// const Klara = new Client(4, 'Klara', '22', 'Klara@ukr.net', '+380675721574', ['Sup', 'vine Martini ']);
// const Klava = new Client(5, 'Klava', 'Brown', 'Klava@ukr.net', '+380676748574', ['Okroshka', 'vine Massandra 7 Sky']);
// const Kira = new Client(6, 'Kira', 'Jones', 'Kira@ukr.net', '+380675748974', ['French fries', 'vine Martini']);
// const Olia = new Client(7, 'Olia', 'Garcia', 'Olia@ukr.net', '+380675118574', ['Chop', 'French fries', 'vodka Nemiroff']);
// const Tania = new Client(8, 'Tania', 'Miller', 'Tania@ukr.net', '+380675747851', ['Dumplings', 'vine Massandra Muskat']);
// const Sveta = new Client(9, 'Sveta', 'Davis', 'Sveta@ukr.net', '+380675748333', ['Ear', 'vine Martini']);
// const Sasha = new Client(10, 'Sasha', 'Dias', 'Sasha@ukr.net', '+380675748444', ['Pilaf', 'vine Martini Bianka']);
//
// let ClientArr = [Kristi, Katia, Karina, Klara, Klava, Kira, Olia, Tania, Sveta, Sasha];
// console.log(ClientArr);

// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//
// function Car (model,produser,year,maxSpid,engineСapacity,driver) {
//     this.model = model || 'no name';
//     this.produser = produser || 'no produser';
//     this.year = year || 1900;
//     this.maxSpid = maxSpid || 5;
//     this.engineСapacity = engineСapacity || 1000;
//     this.driver = driver || [];
//     this.drive = () => {
//         console.log(`Їдемо зі швидкістю- ${maxSpid} км на годину.`)
//     };
//     this.info = () => {
//         console.log(`Model- ${model},  Produser- ${produser},  Year- ${year},  Max Spid- ${maxSpid} km/h,  Engine Сapacity-${engineСapacity} cm3.`)
//     };
//
//     this.increaseMaxSpeed = (newSpeed) => {
//         this.maxSpid += newSpeed;
//         console.log(`New Max Speed= ${this.maxSpid} km/h.`)
//     };
//
//     this.changeYear = (newValue) => {
//         this.year = newValue;
//         console.log(`New produse year- ${this.year}.`)
//     };
//     this.addDriver = (driver) => {
//         this.driver = driver;
//         console.log(this.driver)
//     }
// }
// let FordFusion= new Car('Fusion','Ford',2011,160,1400);
// FordFusion.drive();
// FordFusion.info();
// FordFusion.increaseMaxSpeed(20);
// FordFusion.increaseMaxSpeed(10);
// FordFusion.changeYear(2012);
// FordFusion.addDriver ({id:3, name:'Karina', surname:'Williams',email: 'Karina@ukr.net',phone: '+380675748543',zakaz: ['Borsh', 'vine Martini Bianka']})
// console.log(FordFusion);


// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// class   Car {
//     constructor(model,produser,year,maxSpid,engineСapacity,driver) {
//         this.model = model || 'no name';
//         this.produser = produser || 'no produser';
//         this.year = year || 1900;
//         this.maxSpid = maxSpid || 5;
//         this.engineСapacity = engineСapacity || 1000;
//         this.driver = driver || [];
//         this.drive = () => {
//             console.log(`Їдемо зі швидкістю- ${maxSpid} км на годину.`)
//         };
//         this.info = () => {
//             console.log(`Model- ${model},  Produser- ${produser},  Year- ${year},  Max Spid- ${maxSpid} km/h,  Engine Сapacity-${engineСapacity} cm3.`)
//         };
//
//         this.increaseMaxSpeed = (newSpeed) => {
//             this.maxSpid += newSpeed;
//             console.log(`New Max Speed= ${this.maxSpid} km/h.`)
//         };
//
//         this.changeYear = (newValue) => {
//             this.year = newValue;
//             console.log(`New produse year- ${this.year}.`)
//         };
//         this.addDriver = (driver) => {
//             this.driver = driver;
//             console.log(this.driver)
//         }
//     }
// }
// const FordFusion= new Car('Fusion','Ford',2011,160,1400);
// FordFusion.drive();
// FordFusion.info();
// FordFusion.increaseMaxSpeed(20);
// FordFusion.increaseMaxSpeed(10);
// FordFusion.changeYear(2012);
// FordFusion.addDriver ({id:3, name:'Karina', surname:'Williams',email: 'Karina@ukr.net',phone: '+380675748543',zakaz: ['Borsh', 'vine Martini Bianka']})
// console.log(FordFusion);

// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id


//
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// const Kristi = new Client(9, 'Kristi', 'Smith', 'Kristi@ukr.net', '+380675748574', ['Ear', 'vine Martini','bread','salad','tea','ice cream']);
// const Katia = new Client(10, 'Katia', 'Smith', 'Katia@ukr.net', '+380675567574', ['Solianka', 'vodka Khlibniy Dar']);
// const Karina = new Client(3, 'Karina', 'Williams', 'Karina@ukr.net', '+380675748543', ['Borsh', 'vine Martini Bianka','coffe',,'salad','tea',]);
// const Klara = new Client(4, 'Klara', '22', 'Klara@ukr.net', '+380675721574', ['Sup', 'vine Martini ']);
// const Klava = new Client(7, 'Klava', 'Brown', 'Klava@ukr.net', '+380676748574', ['Okroshka', 'vine Massandra 7 Sky','salad','tea',]);
// const Kira = new Client(6, 'Kira', 'Jones', 'Kira@ukr.net', '+380675748974', ['French fries']);
// const Olia = new Client(5, 'Olia', 'Garcia', 'Olia@ukr.net', '+380675118574', ['Chop', 'French fries', 'vodka' +
// ' Nemiroff']);
// const Tania = new Client(8, 'Tania', 'Miller', 'Tania@ukr.net', '+380675747851', ['Dumplings', 'vine Massandra' +
// ' Muskat','salad','tea','salad','mint tea','salad shuba','tea',]);
// const Sveta = new Client(1, 'Sveta', 'Davis', 'Sveta@ukr.net', '+380675748333', ['Ear', 'vine Martini']);
// const Sasha = new Client(2, 'Sasha', 'Dias', 'Sasha@ukr.net', '+380675748444', ['Pilaf', 'vine Martini Bianka','salad']);
//
// let ClientArr = [Kristi, Katia, Karina, Klara, Klava, Kira, Olia, Tania, Sveta, Sasha];
// console.log(ClientArr);

// let newArr=[];
// for (const clientId of ClientArr){
//     if(clientId.id%2 === 0){
//         newArr.push(clientId)
//     }
// }
// console.log(newArr);
// - Відсортувати його по id. по зростанню

// let newArr=[];
// for (let n=0; n<ClientArr.length; n++) {
//     for (let i = 0; i < ClientArr.length; i++) {
//         if (ClientArr[n].id === i + 1) {
//             newArr.push(ClientArr[i]);
//             break
//         }
//     }
// }
// console.log(newArr);
// - Відсортувати його по id. по спаданню
// let newArr = [];
// for (i = ClientArr.length; i > 0; i--) {
//     for (let n = 0; n < ClientArr.length; n++) {
//         if (ClientArr[n].id === i) {
//             newArr.push(ClientArr[n]);
//             break;
//         }
//     }
// }
// console.log(newArr);


// 6. Взяти масив з завдання 2.
// Відсортувати його по кількості товарів в полі order. по спаданню
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const Kristi = new Client(9, 'Kristi', 'Smith', 'Kristi@ukr.net', '+380675748574', ['Ear', 'vine Martini', 'bread', 'salad', 'tea', 'ice cream']);
const Katia = new Client(10, 'Katia', 'Smith', 'Katia@ukr.net', '+380675567574', ['Solianka', 'vodka Khlibniy Dar']);
const Karina = new Client(3, 'Karina', 'Williams', 'Karina@ukr.net', '+380675748543', ['Borsh', 'vine Martini Bianka', 'coffe', , 'salad', 'tea',]);
const Klara = new Client(4, 'Klara', '22', 'Klara@ukr.net', '+380675721574', ['Sup', 'vine Martini ']);
const Klava = new Client(7, 'Klava', 'Brown', 'Klava@ukr.net', '+380676748574', ['Okroshka', 'vine Massandra 7 Sky', 'salad', 'tea',]);
const Kira = new Client(6, 'Kira', 'Jones', 'Kira@ukr.net', '+380675748974', ['French fries']);
const Olia = new Client(5, 'Olia', 'Garcia', 'Olia@ukr.net', '+380675118574', ['Chop', 'French fries', 'vodka' +
' Nemiroff']);
const Tania = new Client(8, 'Tania', 'Miller', 'Tania@ukr.net', '+380675747851', ['Dumplings', 'vine Massandra' +
' Muskat', 'salad', 'tea', 'salad', 'mint tea', 'salad shuba', 'tea',]);
const Sveta = new Client(1, 'Sveta', 'Davis', 'Sveta@ukr.net', '+380675748333', ['Ear', 'vine Martini']);
const Sasha = new Client(2, 'Sasha', 'Dias', 'Sasha@ukr.net', '+380675748444', ['Pilaf', 'vine Martini Bianka', 'salad']);

let ClientArr = [Kristi, Katia, Karina, Klara, Klava, Kira, Olia, Tania, Sveta, Sasha];
console.log(ClientArr);

let newArr = [];
let maxOder = 0;
for (i = ClientArr.length; i > 0; i--) {
    if (ClientArr[i - 1].order.length > maxOder) {
        maxOder = ClientArr[i - 1].order.length
    }
}
console.log(maxOder);
while (maxOder > 0) {
    for (i = ClientArr.length; i > 0; i--) {
        if (ClientArr[i - 1].order.length === maxOder) {
            newArr.push(ClientArr[i - 1])
        }
    }
    maxOder = maxOder - 1;
}
console.log(newArr);


