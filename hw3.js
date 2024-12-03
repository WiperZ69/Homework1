// 3 homework
// 1
let password = 'okeydokey';
let openPass = String(prompt("Введите пароль"));
if (password === openPass) {
    console.log ("Пароль введен верно");
} else {
    console.log ("Пароль введен неверно");
}

// 2
let c = 2

if (c >= 0 && c <= 10) {
    console.log("Верно");
} else {
    console.log("Неверно");
}

// 3 
let d = 345;
let e = 99;
if (d > 100 || e > 100) {
    console.log("Верно")
} else {
    console.log("Неверно")
}

// 4
let a = '2';
let b = '3';
a = Number(a);
b = Number(b);
alert(a + b);

// 5
let monthNumber = Number(prompt("Введите число месяца"));

switch (monthNumber) {
    case 12:
        console.log("Зима");
        break;
    case 1:
        console.log("Зима");
        break;
    case 2:
        console.log("Зима");
        break;
    case 3:
        console.log("Весна");
        break;
    case 4:
        console.log("Весна");
        break;
    case 5:
        console.log("Весна");
        break;
    case 6:
        console.log("Лето");
        break;
    case 7:
        console.log("Лето");
        break;
    case 8:
        console.log("Лето");
        break;
    case 9:
        console.log("Осень");
        break;
    case 10:
        console.log("Осень");
        break;
    case 11:
        console.log("Осень");
        break;
    default:
        console.log("Вы ввели не правильное число")
        break;
}

// доп 1
let anyNum = prompt("Пожалуйста, введите любое число");
anyNum = Number(anyNum);
anyNum = anyNum % 2;
switch (anyNum) {
    case 0:
        console.log("Число четное");
        break;
    case 1:
        console.log("Число нечетное");
        break;
    default:
        console.log("NaN");
        break;
}