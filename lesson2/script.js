window.addEventListener('DOMContentLoaded', function () {
    // #1
    var num1 = document.getElementById("num1"),
        num2 = document.getElementById("num2"),
        num3 = document.getElementById("num3");

    

    num1.addEventListener('change', () => {
        if (num1.value >= 0 && num2.value >= 0) {
            num3.value = num1.value - num2.value;
        } else if (num1.value < 0 && num2.value < 0){
            num3.value = num1.value * num2.value;
        } else{
            num3.value = Number(num1.value) + Number(num2.value); 
        }
    });

    num2.addEventListener('change', () => {
        if (num1.value >= 0 && num2.value >= 0) {
            num3.value = num1.value - num2.value;
        } else if (num1.value < 0 && num2.value < 0){
            num3.value = num1.value * num2.value;
        } else{
            num3.value = Number(num1.value) + Number(num2.value); 
        }
    });


    


});