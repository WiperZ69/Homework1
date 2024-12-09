// 1
let minNum = (a, b) => {return a < b ? a : b};
console.log(minNum(8, 4));

// 2
let parity = (a) => {
    if (a % 2 == 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
}
parity(7);
parity(8);

// 3 
let pow = (a) => a * a;
console.log(pow(5));

let power = (powerNum) => {return powerNum * powerNum};
console.log(power(6));

// 4
let getAge = () => {
    let age = prompt('Сколько вам лет?');
    age = Number(age);
    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else if (age >= 13) {
        console.log('Добро пожаловать!');
    } else {
        console.log('Что-то не так...');
    }
}
getAge();

// 5
function testNum(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    if (isNaN(num1) || isNaN(num2)) {
      return 'Одно или оба значения не являются числом';
    }
    return num1 * num2;
}
console.log(testNum(3, 4));
console.log(testNum('2', '5'));
console.log(testNum('abc', 7));

// 6 
let perNum = () => {
    userNum = prompt('Введите число');
    if (isNaN(userNum)) {
        console.log('Переданный параметр не является числом');
    } else {
        console.log(`${userNum} в кубе равняется ${userNum ** 3}`)
    }
}
perNum();

// 7 
function getArea() {
    console.log(Math.PI * this.radius ** 2);
}

function getPerimeter() {
    console.log(Math.PI * 2 * this.radius);
}

const circle1 = {
    radius: 8,
    area: getArea,
    perimeter: getPerimeter,
}
const circle2 = {
    radius: 5,
    area: getArea,
    perimeter: getPerimeter,
}

circle1.area();
circle2.area();
circle1.perimeter();
circle2.perimeter();

