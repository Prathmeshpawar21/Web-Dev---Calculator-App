let screen = document.getElementById("screen");

function display(num) {
    screen.value += num;
}
function equal() {
    try {
        screen.value = eval(screen.value);
    }
    catch (err) {
        alert("Wrong Input")
    }
}

function AC() {
    screen.value = "";
}
function DEL() {
    screen.value = screen.value.slice(0, -1);
}