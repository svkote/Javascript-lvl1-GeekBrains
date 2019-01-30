function myProcessor() {
    const addBtn = document.getElementById('addInBasket'); // Кнопка добавления в корзину
    let currentId; // айди текущего товара
    let basketList = document.getElementById('basketList'); // Вывод содержимого корзины
    let basketSumm = document.getElementById('basketSumm'); // Общая сумма
    let infoProduct = document.getElementById('infoProduct'); // Название и цена

    // Список товаров, уже имеющийся
    const basket = [
        {name: 'Полтонны сладкого безобразия', price: 1000,},
        {name: 'Одна вкусная печенька', price: 100,},
        {name: 'Вполне себе домашний кот', price: 30000,},
        {name: 'Ром для настоящего пирата', price: 1900,},
        {name: 'Букет весенних тюльпанов', price: 1000,},
        {name: 'Луна для истинных романтиков', price: 6000000,},
    ];
    const currentBasket = [];

    function addBasket() {
        console.log('клиик' + currentId);
        // Проверка выбран ли товар
        if (currentId === undefined) {
            alert('Нажмите на изображение и затем кнопку купить!');
        } else {
            // Добавление товара в корзину
            currentBasket.push(basket[currentId]);
            console.log(currentBasket);
            for (i = 0; i < currentBasket.length; i++) {
                const li = document.createElement("li");
                // Добавление в лист корзины только последнего элемента
                if ((currentBasket.length - 1) == i) {
                    li.innerHTML = currentBasket[currentBasket.length - 1].name + ' — ' + currentBasket[currentBasket.length - 1].price + ' руб.';
                    basketList.appendChild(li);
                }
            }
            function countBasketPrice() {
                let basket_price = 0;
                for (i = 0; i < currentBasket.length; i++) { 
                    basket_price = Number(basket_price) + Number(currentBasket[i].price);
                }
                return basket_price;
            }
            basketSumm.innerHTML = countBasketPrice(currentBasket) + ' руб.';

        }
    }


    function showBig(event) {
        const element = event.target;
        const src = element.getAttribute('data-big-src');
        const bigElement = document.getElementById('bigPicture');
        bigElement.innerHTML = '<img height="600" src="./' + src + '"  onerror="alert(\'Такое мы не доставляем. Уж сами как-нибудь. (Проверка на отсутствие)\')"/>';
        
        // Присваиваем нынешний айди товара
        currentId = element.getAttribute('data-basket');

        // Показываем стоимость на данный товар и его название
        infoProduct.innerHTML = basket[currentId].name + ' — ' + basket[currentId].price + ' руб.';
    }
  
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
      const element = images[i];
      element.addEventListener('click', showBig);
      addBtn.addEventListener('click', addBasket);
    }
  }

window.onload = myProcessor;