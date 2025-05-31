function displayIntervalNumbers(length, interval, outputElement) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push((i + 1) * interval);
    }
    const intervalText = document.createElement('p');
    intervalText.textContent = `Interval numbers: ${result.join(', ')}`;
    outputElement.appendChild(intervalText);
}

function displayFibonacciSequence(length, outputElement) {
    let sequence = [];
    if (length >= 1) {
        sequence.push(0);
    }
    if (length >= 2) {
        sequence.push(1);
    }
    for (let i = 2; i < length; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    // Adjust if length is 0, though primary validation should be in submit.js
    if (length === 0) {
        sequence = [];
    } else if (length === 1) {
        sequence = [0];
    }

    const fibonacciText = document.createElement('p');
    fibonacciText.textContent = `Fibonacci sequence: ${sequence.join(', ')}`;
    outputElement.appendChild(fibonacciText);
}
