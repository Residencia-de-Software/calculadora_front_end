var display = document.getElementById("display");

function pressNumber(number){
   display.value = display.value + number;
}

function pressDec(){
    if (display.value.indexOf(".")<0){
        if (display.value == ""){
            display.value = "0.";
        }
        else {
            display.value = display.value + ".";
        }
    }
}

function pressCE(){
    display.value = "";
}

function pressC(){
    display.value = display.value.substring(0,display.value.length-1);
}

function pressOP(op){
    switch (op){
        case "div":
            break;
        case "sum":
            break;
        case "sub":
            break;
        case "mult":
            break;
    }
}

function pressResult(){

}