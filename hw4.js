// 4 hw
// 1
let hello = 0;
while (hello < 2) {
    console.log("Привет");
    hello++
}

// 2
let numPlus = 1;
while (numPlus < 6) {
    console.log(numPlus);
    numPlus++    
}

// 3
let numpl = 7;
while (numpl < 23) {
    console.log(numpl);
    numpl++    
}

// 4
const obj = {
    "Коля":'200',
    "Вася":'300',
    "Петя":'400'
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {   const element = obj[key]; // не совсем понял зачем мне сниппед предложил это, но я оставил
    }
    console.log(`${key} - зарплата ${obj[key]}`);
}

// 5 
let n = 1000;
let num = 0;
while (n >= 50) {
  n /= 2;
  num++;
}
console.log("Результат деления:", n);
console.log("Количество итераций:", num);

// 6
let day = 4;

while (day < 32) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`)
    day += 7;
}

// доп 1
let k = 100;
let iterations = 0;
while (k >= 0) {
    k -= 7;
    iterations++;
}
console.log("Результат разности:", k);
console.log("Количество итераций:", iterations);

// доп 2
const month = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
]

for (let i = 0; i < month.length; i++) {
    console.log(`Месяц ${i + 1}: ${month[i]}`);
}

// доп 3
const book = {
    "Название": "Мастер и Маргарита",
    "Автор": "Михаил Булгаков",
    "Год издания": 1967,
    "Жанр": "Фантастика"
}
  
for (const key in book) {
    console.log(`${key}: ${book[key]}`);
}

// доп 4 (gpt помог, а самому было интересно узнать как это работает)
const randomNum = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1);
console.log("Массив случайных чисел:", randomNum);
const minNum = Math.min(...randomNum);
console.log("Минимальное число в массиве:", minNum);