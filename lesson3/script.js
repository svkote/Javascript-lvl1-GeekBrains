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

});