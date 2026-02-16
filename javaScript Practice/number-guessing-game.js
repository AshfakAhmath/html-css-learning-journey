const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let guess;
let attempt = 0;
let running = true;

while (running) {
    guess = window.prompt(`Enter a number between ${minNum} - ${maxNum}`);

    if (guess === null) {
        window.alert("Game cancelled!");
        break;
    }

    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert("Invalid Input!");
    }
    else if (guess < minNum || guess > maxNum) {
        window.alert("Invalid Input!");
    }
    else {
        attempt++;
        if (guess > answer) {
            window.alert(`${guess} is TOO high!`);
        }
        else if (guess < answer) {
            window.alert(`${guess} is TOO low!`);
        }
        else {
            window.alert(`${guess} is CORRECT!. Attempt is ${attempt}`);
            running = false;
        }
    }
}