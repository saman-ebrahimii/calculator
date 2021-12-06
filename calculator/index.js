let display = document.querySelector("input");
let buttons = document.querySelectorAll("button");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", show);
}

function show() {
    if (this.innerHTML === "=") {
        display.value = eval(display.value);
    } else if (this.innerHTML === "c") {
        display.value = "0";
    } else if (this.innerHTML === "0" && display.value == "0") {
        display.value += "";
    } else {
        if (display.value === "0") {
            display.value = "";
        }
        display.value += this.innerHTML;
    }
}