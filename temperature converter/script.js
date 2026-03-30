const textbox=document.getElementById("textbox");
const tofahrenheit=document.getElementById("tofahrenheit");
const toCelsius=document.getElementById("toCelsius");
const button=document.getElementById("button");
let temp;

function convert(){
    if(tofahrenheit.checked){
        temp=Number(textbox.value);  //mai keha input type jidi number hi ode jo vi textbox vich value hovegi onu temp vich pa dyo 
        temp=temp*9/5+32;  
        result.textContent=temp.toFixed(1)+"°F";
    }
    else if(toCelsius.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(1)+"°C";
    }
    else{
        result.textContent="select a unit"
    }
}