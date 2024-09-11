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
    const colorPicker = document.getElementById('colorPicker').value;
    const colorName = document.getElementById('colorName').value;

    if (colorName) {
        document.body.style.backgroundColor = colorName;
    } else if (colorPicker) {
        document.body.style.backgroundColor = colorPicker;
    } else {
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
}

document.getElementById('redSlider').addEventListener('input', setColor);
document.getElementById('greenSlider').addEventListener('input', setColor);
document.getElementById('blueSlider').addEventListener('input', setColor);
document.getElementById('colorPicker').addEventListener('input', setColor);
document.getElementById('colorName').addEventListener('input', setColor);

function randomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;
    document.getElementById('colorPicker').value = `#${randomRed.toString(16).padStart(2, '0')}${randomGreen.toString(16).padStart(2, '0')}${randomBlue.toString(16).padStart(2, '0')}`;
}

document.getElementById('randomColorButton').addEventListener('click', randomColor);

function isPerfectNumber(num) {
    let sum = 0;
    for (let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum == num;
}
