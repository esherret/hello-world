document.addEventListener('DOMContentLoaded', function () {
    const lengthInput = document.getElementById('length');
    const intervalInput = document.getElementById('interval');
    const wordInput = document.getElementById('word');
    const submitBtn = document.getElementById('submitBtn');
    const changeStyleBtn = document.getElementById('changeStyleBtn');
    const resultArea = document.getElementById('resultArea');
    const wordArea = document.getElementById('wordArea');
    const stylesheetLink = document.getElementById('stylesheet');

    submitBtn.addEventListener('click', function () {
        // Clear previous results
        resultArea.innerHTML = '';
        wordArea.innerHTML = '';

        const lengthVal = lengthInput.value.trim();
        const intervalVal = intervalInput.value.trim();
        const wordVal = wordInput.value.trim();

        // Validate inputs
        if (lengthVal === '' || intervalVal === '' || wordVal === '') {
            alert('All fields (Length, Interval, Word) are required.');
            return;
        }

        const lengthNum = parseInt(lengthVal, 10);
        const intervalNum = parseInt(intervalVal, 10);

        if (isNaN(lengthNum) || lengthNum <= 0) {
            alert('Length must be a number greater than 0.');
            return;
        }

        if (isNaN(intervalNum)) {
            alert('Interval must be a valid number.');
            return;
        }

        // If validation passes, call functions from interval.js
        displayIntervalNumbers(lengthNum, intervalNum, resultArea);
        displayFibonacciSequence(lengthNum, resultArea);

        // Display the entered word
        const wordText = document.createElement('p');
        wordText.textContent = `Entered word: ${wordVal}`;
        wordArea.appendChild(wordText);
    });

    changeStyleBtn.addEventListener('click', function () {
        if (stylesheetLink.getAttribute('href') === 'default.css') {
            stylesheetLink.setAttribute('href', 'alternate.css');
        } else {
            stylesheetLink.setAttribute('href', 'default.css');
        }
    });
});
