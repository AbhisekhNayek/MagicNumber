function performMagic() {
    const inputElement = document.getElementById('numberInput');
    const resultElement = document.getElementById('result');

    const userInput = inputElement.value;
    
    if (/^\d{3}$/.test(userInput)) {
        const descending = parseInt(userInput.split('').sort((a, b) => b - a).join(''));
        const ascending = parseInt(userInput.split('').sort().join(''));

        const difference = descending - ascending;
        const reversed = parseInt(difference.toString().split('').reverse().join(''));
        const finalResult = difference + reversed;

        resultElement.innerHTML = `Result: ${finalResult}`;
    } else {
        resultElement.innerHTML = 'Please enter a valid three-digit number.';
    }
}
