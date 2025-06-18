
function checkAnswer(questionNumber, correctValue) {
    const options = document.getElementsByName('answer' + questionNumber);
    let selectedOption;
    
    for (let i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedOption = options[i];
            break;
        }
    }
    
    if (selectedOption) {
        // Clear previous highlights
        const optionsContainer = selectedOption.parentElement.parentElement;
        optionsContainer.querySelectorAll('.option').forEach(option => {
            option.classList.remove('correct', 'incorrect');
        });

        // Highlight the correct answer
        if (selectedOption.value == correctValue) {
            selectedOption.parentElement.classList.add('correct');
        } else {
            selectedOption.parentElement.classList.add('incorrect');
            // Also highlight the correct answer
            optionsContainer.querySelector(`input[value="${correctValue}"]`).parentElement.classList.add('correct');
        }
    }
}

function resetTest(questionNumber) {
    const options = document.getElementsByName('answer' + questionNumber);
    options.forEach(option => {
        option.checked = false;
        option.parentElement.classList.remove('correct', 'incorrect');
    });
}