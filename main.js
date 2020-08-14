//function for displaying values
function dis(val) {
    document.getElementById("data").value += val;
}
//function for evaluation
function solve() {
    let x = document.getElementById("data").value;
    let y = eval(x);
    document.getElementById("data").value = y;
}
//function for clearing the display
function clr() {
    document.getElementById("data").value = "";
}
//trigger enter key
var input = document.getElementById("data");
input.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById("solve").click();
    }
});

