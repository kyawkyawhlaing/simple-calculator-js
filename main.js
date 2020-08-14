var operands = document.querySelectorAll("#number");
var operators = document.querySelectorAll("#operator");

operands.forEach((operand) => {
    operand.addEventListener(
        'click', function () {
            document.querySelector("#history-value").innerHTML = Number(operand.textContent);
        }
    )
})

