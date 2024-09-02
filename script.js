let displayValue="0";

function updateDisplay(){
    document.getElementById("display").textContent = displayValue;
}
function appendToDisplay(value){
    if(displayValue === "0"){
        displayValue = value; 
    } else {
        displayValue += value;
    }
    updateDisplay();
}
function calculateResult(){
    try{
        displayValue=eval(displayValue).toString();
    }catch(error){
        displayValue="Error"
    }
    updateDisplay();
    }
    function clearDisplay(){
        displayValue="0";
        updateDisplay();
    }
