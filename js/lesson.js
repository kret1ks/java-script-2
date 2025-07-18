//Створити змінні celsius, fahrenheit для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.

let celsius = -15;

let fahrenheit =  (celsius * 9/5) + 32;

console.log(celsius);
console.log(fahrenheit);


//Створити змінну daysInMonth для зберігання кількості днів у місяці. Обчислити кількість hoursInMonth годин та minutesInMonth хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.


let daysInMonth = 30;

let hoursInMonth = daysInMonth * 60;

let minutesInMonth = hoursInMonth * 60

console.log(daysInMonth);
console.log(hoursInMonth);
console.log(minutesInMonth);


//Створити змінні health, energy для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.


let health = 100;
let energy = 100;

health = health - 80
energy = energy - 45

console.log(health);
console.log(energy);



//Створити змінну totalPrice для зберігання суми покупки в магазині. Застосувати знижку discount в розмірі 10% до цієї суми за допомогою оператора множення.
//  Результат зберегти в змінній discountedPrice та вивести результат в консоль.

let totalPrice = 500;
let discount = 0.10;
let discountedPrice = totalPrice * (1 - discount);   //це незнав тому дивився в інтернеті

console.log(totalPrice);
console.log(discountedPrice);



//Створити змінну const floatNumber = 12.78 для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого.
//  Результат зберегти в змінній roundedDown та вивести результат в консоль.

const floatNumber = 12.78;
const roundedDown = Math.floor(floatNumber)

console.log(floatNumber);
console.log(roundedDown);



//Створити змінну const floatString = "45.67"  для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число. 
// Результат зберегти в змінній parsedFloat та вивести результат в консоль.

const floatString = 45.67;
const parsedFloat = parseFloat(floatString)

console.log(floatString);
console.log(parsedFloat);



//Створити змінну const intString = "123" для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число.
//  Результат зберегти в змінній parsedIntта вивести результат в консоль.

const intString = 123;                                                          
const parsedIntта = parseInt(intString);

console.log(intString);
console.log(parsedIntта);



//Створити змінну number для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа. Результат зберегти в змінній sqrtNumber та вивести результат в консоль.


let number = 10;
let sqrtNumber = Math.sqrt(number);

console.log(number);
console.log(sqrtNumber);



//Створити змінні const integer = 42 та const stringNumber = "256" для зберігання цілочисельного значення та рядка з числом у вигляді рядка.
//  Використати метод parseInt() для перетворення рядка у ціле число. Результат зберегти в змінній convertedInt та вивести результат в консоль.
//  Потім використати метод toString() для перетворення цілочисельного значення у рядок. Результат зберегти в змінній convertedString та вивести результат в консоль.


const integer = 42;
const stringNumber = "256";


let convertedInt = parseInt(stringNumber, 10);
console.log(convertedInt);


const convertedString = integer.toString();
console.log(convertedString);

