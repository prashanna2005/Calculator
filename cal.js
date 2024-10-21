const display = document.getElementById("display");

function one(input) {
  display.value += input;
}

function cl() {
  display.value = "";
}
function delet() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Invalid input";
  }
}
