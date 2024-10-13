const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function hapus () {
    display.value = "";
}

function hasil () {
    try{
        display.value = eval(display.value)
    }
    catch (error){
        display.value = "error";
    }
   
}