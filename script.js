
function performMagic() {
    const inputElement = document.getElementById('numberInput');
    const stepsElement = document.getElementById('steps');
    const resultElement = document.getElementById('result');

    const userInput = inputElement.value;

    if (/^\d{3}$/.test(userInput)) {
        const steps = [];
        steps.push(`Start with the three-digit number: ${userInput}`);

        const descending = parseInt(userInput.split('').sort((a, b) => b - a).join(''));
        steps.push(`Arrange the digits in descending order: ${descending}`);

        const ascending = parseInt(userInput.split('').sort().join(''));
        steps.push(`Arrange the digits in ascending order: ${ascending}`);

        const difference = descending - ascending;
        steps.push(`Subtract the smaller number from the larger one: ${descending} - ${ascending} = ${difference}`);

        const reversed = parseInt(difference.toString().split('').reverse().join(''));
        steps.push(`Reverse the result: ${reversed}`);

        const finalResult = difference + reversed;
        steps.push(`Add the reversed result to the original number: ${difference} + ${reversed} = ${finalResult}`);

        // Display the steps
        stepsElement.innerHTML = steps.map(step => `<p>${step}</p>`).join('');

        // Display the final result
        resultElement.innerHTML = `Result: ${finalResult}`;
    } else {
        stepsElement.innerHTML = '';
        resultElement.innerHTML = 'Please enter a valid three-digit number.';
    }
}
