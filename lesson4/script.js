window.addEventListener('DOMContentLoaded', function () {
    
    let prime = 1;
    let primeArr = [];

    while (prime <= 100) {
        if (prime == 1) {
            primeArr.push(1)
        } else {
            let result = 2;
            let i = 2;
            while (prime % i !== 0 ){
                i += 1;
                result +=1;
              } 
            if (result == prime) {
                primeArr.push(result);
            }
        }
        prime += 1;
    }

    console.log(primeArr);


    var max = 999;
        var digit = {
          number: prompt('Введите число от 0 до 999'),
          units: 0,
          tens: 0,
          hundreds: 0,
        };
        if (digit.number <= 9){
          digit.units = digit.number;
        } else if (digit.number <= 999){
          digit.units = Math.floor(digit.number % 10);
          digit.tens = Math.floor(digit.number / 10 % 10);
          digit.hundreds = Math.floor(digit.number / 100 % 10);
        }else {
            digit.number = 0;
            console.log('Вы ввели число за диапазоном 0 - 999');
        }
        console.log(digit);

});