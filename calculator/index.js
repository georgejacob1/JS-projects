let button_input = document.querySelectorAll(".input-button");
console.log(button_input);
let equal_pressed = 0;   
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

button_input.forEach((button_class) => {
button_class.addEventListener("click", () => {
if(equal_pressed == 1){
    input.value="";
    equal_pressed = 0;
}
input.value += button_class.value;
})
})

equal.addEventListener("click",() => {
    equal_pressed = 1;
    let result = input.value;
    try {
        let final_result = eval(result);
        console.log(final_result);
        if(Number.isInteger(final_result)){
            input.value=final_result;
        } else{
            input.value=final_result.toFixed(2);
        }
        
    }
    catch (err) {
        alert("Invalid Input");
        console.log(err);
    }

})

clear.addEventListener("click", () => {
    input.value = "";
  });

  erase.addEventListener("click", () => {
    input.value = input.value.substr(0,input.value.length -1);
  });