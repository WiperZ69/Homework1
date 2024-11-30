// // 1
// let a = 10;
// alert(a);
// let b = 20;
// alert(b);

// // 2
// const iphone = 2007;
// alert(iphone);

// // 3
// const js = "Brendan Eich";
// alert(js);

// // 4
// let oneNumber = 10;
// let twoNumBer = 2;
// let sumNum = oneNumber + twoNumBer;
// let difNum = oneNumber - twoNumBer;
// let mpNum = oneNumber * twoNumBer;
// let divNum = oneNumber / twoNumBer;
// alert(sumNum);
// alert(difNum);
// alert(mpNum);
// alert(divNum);

// // 5
// let degree = 2;
// let result = degree ** 5;
// alert(result);

// // 6
// let remainderOne = 9;
// let remainderTwo = 2;
// let resRemainder = remainderOne % remainderTwo;
// alert(resRemainder);

// // 7
// let num = 1;
// num += 5;
// num -= 3;
// num *= 7;
// num /= 3;
// num ++;
// num --;
// alert(num);

// // 8 
// let age = prompt("Сколько вам лет?");
// alert(age);

// // 9 
// const user = {
//     nAme: "Yurii",
//     age: 21,
//     isAdmin: true
// }

// // 10 
// let userName = prompt("Ваше имя: ");
// alert(`Привет, ${userName}`)

// // 11
// let numBer = Number(prompt("Загадайте любое число: "));
// let twoNumber = numBer * 2;
// alert(twoNumber);
// let threeNumber = twoNumber + 10;
// alert(threeNumber);
// let fourNumber = threeNumber / 2;
// alert(fourNumber);
// let fiveNumber = fourNumber - numBer;
// alert(fiveNumber);


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