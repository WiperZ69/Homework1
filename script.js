function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gameOne() {
    const randomInt = getRandomInt(1, 100);
    let userInput;

    while (true) {
        userInput = prompt("Введите число от 1 до 100 (или нажмите 'Отмена' для выхода):");
        
        if (userInput === null) {
            alert("Игра окончена. Спасибо за игру!");
            break;
        }

        let userInt = Number(userInput);

        if (isNaN(userInt) || userInt < 1 || userInt > 100) {
            alert("Пожалуйста, введите корректное число от 1 до 100.");
            continue;
        }

        if (userInt < randomInt) {
            alert("Загаданное число больше.");
        } else if (userInt > randomInt) {
            alert("Загаданное число меньше.");
        } else {
            alert(`Поздравляем! Вы угадали число ${randomInt}.`);
            break;
        }
    }
}