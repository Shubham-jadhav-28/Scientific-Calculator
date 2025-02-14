document.addEventListener("DOMContentLoaded", function () {
    console.log("hello");
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');

    let currentValue = '';

    function evaluateResult() {
        console.log('currentValue', currentValue)
        const convertedValue = currentValue
            .replace("x", "*")
            .replace("+", "/")
            .replace("%", "*0.01");

        console.log('convertedValue', convertedValue)
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.addEventListener('click', function () {
            const value = button.innerText;
            try {
                if (value == "AC") {
                    currentValue = "";
                    display.value = currentValue;
                } else if (value == "=") {
                    evaluateResult();

                } else {
                    currentValue += value; 
                    display.value = currentValue;
                }

            } catch (error) {
                console.log(error);  
                currentValue = "ERROR";
                display.value = currentValue;

            }

        })
    }

})