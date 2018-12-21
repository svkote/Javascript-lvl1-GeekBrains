window.addEventListener('DOMContentLoaded', function () {
        // #1
    var tempCel = document.getElementById("tempCel"),
        tempFar = document.getElementById("tempFar");


        tempCel.addEventListener('change', () => {
            tempFar.value = (9 / 5) * tempCel.value + 32;
        });

        // #3
    var admin = document.getElementById('nameAdmin');
    var name;
    name = "Василий";
    admin.value = name;


});