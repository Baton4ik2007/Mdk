document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");
    const referenceTextElement = document.getElementById("text-to-type");
    const resultMessage = document.getElementById("result-message");
    const charsPerMinuteDisplay = document.getElementById("charsPerMinuteDisplay");
    const textHeader = document.getElementById("textHeader");

    const referenceText = referenceTextElement.innerText.trim();
    let currentIndex = 0;
    let startTime;
    let totalCharsTyped = 0;

  
    userInput.setAttribute("autocomplete", "off");
    userInput.setAttribute("autocorrect", "off");


    userInput.addEventListener("paste", function (e) {
        e.preventDefault(); 
    });

    function updateTextDisplay() {
        let highlightedText = '';
        for (let i = 0; i < referenceText.length; i++) {
            if (i === currentIndex) {
                highlightedText += '<span class="highlighted">' + referenceText[i] + '</span>';
            } else {
                highlightedText += referenceText[i];
            }
        }
        referenceTextElement.innerHTML = highlightedText;
    }

    userInput.addEventListener("input", function () {
        const inputText = this.value;
        totalCharsTyped++;

        if (inputText.length > 0 && inputText[inputText.length - 1] === referenceText[currentIndex]) {
            currentIndex++;
            resultMessage.innerText = "Правильно!";
            resultMessage.style.color = "green";
            this.style.backgroundColor = "lightgreen";
        } else if (inputText.length > 0) {
            resultMessage.innerText = "Некорректно! Продолжайте вводить.";
            resultMessage.style.color = "red";
            this.style.backgroundColor = "lightcoral";
        }

        if (currentIndex < referenceText.length) {
            updateTextDisplay();
        } else {
            resultMessage.innerText = "Вы правильно ввели текст!";
            currentIndex = 0;
            this.value = '';
            updateTextDisplay();
        }

      
        updateCharsPerMinute();
    });

    function updateCharsPerMinute() {
        const elapsedTime = (new Date() - startTime) / 1000; 
        if (elapsedTime > 0) {
            const charsPerMinute = Math.floor(totalCharsTyped / (elapsedTime / 60)); 
            charsPerMinuteDisplay.innerText = 'Символов в минуту: ' + charsPerMinute; 
        }
    }

    
    startTime = new Date();

  
    setInterval(updateCharsPerMinute, 1000);

    window.clearInput = function() {
        userInput.value = '';
        resultMessage.innerText = '';
        currentIndex = 0;
        totalCharsTyped = 0; 
        startTime = new Date(); 
        updateTextDisplay();
        charsPerMinuteDisplay.innerText = 'Символов в минуту: 0'; 
        userInput.focus();
    }

    updateTextDisplay(); 
});


const userAgent = navigator.userAgent.toLowerCase();
const isMobile = /mobile|iphone|ipad|ipod|android|blackberry|mini|windows\sce|palm/i.test(userAgent);

if (isMobile) {

    alert("Данная страница недоступна с телефона. Вы будете перенаправлены на главную страницу.");
    

    window.location.href = 'index.html'; 
}