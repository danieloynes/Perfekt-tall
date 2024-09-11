function checkNumber() {
    const number = document.getElementById('numberInput').value;
    if (isPerfectNumber(number)) {
        alert(`${number} er et perfekt nummer!`);
    } else {
        alert(`${number} er ikke et perfekt nummer.`);
    }
}

function randomNumber() {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById('numberInput').value = randomNum;
}

function setColor() {
    const red = document.getElementById('redSlider').value;
    const green = document.getElementById('greenSlider').value;
    const blue = document.getElementById('blueSlider').value;
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum == num;
}
