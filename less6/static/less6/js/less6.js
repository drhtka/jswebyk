mycart= document.getElementsByClassName('myCart')[0];  // глобальная переменная в ней вся корзина
count_tovars_cart = 0 // глобальная переменная в ней будет количество товаров в корзине

function openModal(name, y, myThis, num_product) {
//Функция вывода товаров в модалку
    let price_old = y // начальная цена
    console.log(name, y, myThis, num_product)
    console.log('name, y, myThis, num_product')
    my_sale = ''  // переменая для скидки
    count_tovars_cart++ // при любом действии openModal

    if (count_tovars_cart > 1){
        // alert('zdes6 skidka')
        // alert(y)
        my_sale = 'sale' // для скидки
        multiply_twenty_procent = y * 0.2 // высчитываем скидку 20 процентов
        y = y - multiply_twenty_procent // вычитаем скидку 20 процентов и з цены товара
        // alert(y)

    }
    document.getElementsByClassName('myModal')[0].classList.add('visible') // корзина видна, отображаем в ней
    var myGoodsDiv = "<div class='goods_data' style=''>" + ''+name+' - ' + y + "<button onclick='minus(this)' class='minus'> -</button>" +
                    "<span class='title' title='"+y+"'>1</span>" +  //
                    "<button onclick='plus(this)' class='plus'>+</button>" +
                    "<span class='cursor-close-goods delete_x' title="+price_old+" onclick='del(this, "+num_product+", "+price_old+")'> x </span><span class='my_sale'>"+my_sale+"</span>" +
                    "</div>"
    mycart.innerHTML = mycart.innerHTML + myGoodsDiv // заносим в корзину все для вывода в шабоне
    myThis.disabled = true // из js принудительн блочим кнопку купить после одного нажатия
    document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) + y // стоимость каждого товара плюсутся при попадании в корзину
    // innerHTML) + y срабатывет когда мы добавляем товар в корзину

}
function closeModal() {
    //Функция закрываем модалку
    document.getElementsByClassName('myModal')[0].classList.remove('visible')
}

function modalShow(){  // функция открытия корзина
    //Функция показываем модалку, т.е корзину
    document.getElementsByClassName('myModal')[0].classList.add('visible')
}

function plus(thisplus) {
    //Функция плюсования при нажатии на плюсик

    if (Number(thisplus.previousElementSibling.innerHTML < 10)){ // все что больше 10 заблокировано
        var plusone = Number(thisplus.previousElementSibling.innerHTML) + 1; // плюсуем 1 при нажатии на батон с плюсом
        thisplus.previousElementSibling.innerHTML = plusone; // обращаемся к цифре >1< и увеличиваем при нажатии на батон
        let all_sum = ''
        //console.log('plus')
        //console.log(Number(thisplus.previousElementSibling.title))
        all_sum = Number(document.getElementById('summ').innerHTML) + Number(thisplus.previousElementSibling.title)// при нажатиии к сумме плюсуется price т.е. title='"+y+"'
        document.getElementById('summ').innerHTML = all_sum  // перзаписываем общую сумму для вывода на сплюсованную сумму всех товаров в корзине
        //console.log(all_sum)
    }

}

function minus(thisminus) {
    //Функция минусования при нажатии на плюсик

    if (Number(thisminus.nextElementSibling.innerHTML > 1)){
        var minusone = thisminus.nextElementSibling.innerHTML - 1; // минусуем 1 при нажатии на батон с минусом
        thisminus.nextElementSibling.innerHTML = minusone
        let all_sum = ''
        all_sum = Number(document.getElementById('summ').innerHTML) + Number(thisminus.nextElementSibling.title)
        document.getElementById('summ').innerHTML = all_sum
    }
}

function del(delcart, num_product, price_old) {
// функция удаления товара из корзины
    if (count_tovars_cart >= 2){// если товаров 2 или больше тогда мы что то делаем
    //alert(count_tovars_cart)
        if (delcart.nextElementSibling.innerHTML == 'sale'){ // если скидочный товар равен sale
            // delcart.nextElementSibling.innerHTML = ''
            document.getElementsByClassName('bay')[num_product].disabled = false // кнопку купить делаем активной
            delcart.parentNode.remove();  // удаляем родиителя this-а onclick='del(this,onclick='del(this, "+num_product+")')'
            let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" в которй посчитано количество нажатий
            // <span title='"+y+"'>1</span>" при нажатии удалить
            let sum_minus = ''
            let all_sum_minus = ''
            //let test_allsumm = ''
            sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart)

            all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus // вычитаеем из общей суммы полученный результат
            document.getElementById('summ').innerHTML = all_sum_minus // выводим общую сумму в шаблон
            count_tovars_cart--  // минус товар из корзины

        }else{// если товар не скидочный
            // console.log('maya')

                delcart.parentNode.nextElementSibling.childNodes[5].innerHTML  = ''  // затираем sale

            // console.log('22')
            // console.log(delcart.parentNode.nextElementSibling.childNodes[0])
            let split_price = delcart.parentNode.nextElementSibling.childNodes
            // var my_price1 = JSON.parse(JSON.stringify(split_price))
            // split_price[0] = 'hello'
              // tmp_div1.append(copy)
            // console.log('tmp_div')
            // console.log(tmp_div1.innerHTML.split('-')[1])
            // console.log(String(split_price).split('-'))
            // console.log('iphone 8x -6880'.split('-'))
            // console.log('11')
            // console.log(split_price[1])
            let cliner_price = delcart.parentNode.nextElementSibling.childNodes[4].title  // чистая цена
            let sale_price = delcart.parentNode.nextElementSibling.childNodes[2].title  // скидочная цена цена
            let count_tovars = delcart.parentNode.nextElementSibling.childNodes[2].innerHTML // количество товаров

            var copy = Object.assign({}, split_price);
            //console.log(copy); // { baz: 3 }

            // console.log('my_price1')
            // console.log(my_price1)

            // console.log('copy')
            // console.log(copy[0])
            // console.log(copy[0].textContent.split('- ')[1] = cliner_price)
            copy[0].textContent = copy[0].textContent.split('- ')[0] + cliner_price
            var tmp_div1 = document.getElementsByClassName("hidden")[0].innerHTML=copy// дает возможность записать тег чтоб разобрать его на части


            // console.log('1')
            // console.log(document.getElementById('summ').innerHTML)
            let summ_product_count = (sale_price * count_tovars)
            // сумма товара со кидкой, который сейчас станет без скидки
            let new_summ = cliner_price * count_tovars //чистая цена за один товар умножить на количество
            delcart.parentNode.nextElementSibling.childNodes[2].title =  cliner_price // скидочная цена цена
// мучаем этот блок
            let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" в которй посчитано количество нажатий
            // <span title='"+y+"'>1</span>" при нажатии удалить
            let sum_minus = ''
            let all_sum_minus = ''
            //let test_allsumm = ''
            sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart)
            alert('sum_minus')
            alert(sum_minus)
            all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus // вычитаеем из общей суммы полученный результат
            document.getElementById('summ').innerHTML = all_sum_minus // выводим общую сумму в шаблон
            count_tovars_cart--  // минус товар из корзины
//      мучаем этот блок

// надо вернуть 24.11.20
            document.getElementById('summ').innerHTML = document.getElementById('summ').innerHTML - summ_product_count
            document.getElementById('summ').innerHTML =  Number(document.getElementById('summ').innerHTML) + Number(new_summ)


        }
    }
    else{
        document.getElementsByClassName('bay')[num_product].disabled = false  // кнопку купить делаем активной
        delcart.parentNode.remove();  // удаляем родиителя this-а onclick='del(this,onclick='del(this, "+num_product+")')'
        let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" в которй посчитано количество нажатий
        // <span title='"+y+"'>1</span>" при нажатии удалить
        let sum_minus = ''
        let all_sum_minus = ''
        //let test_allsumm = ''
        sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart)

        all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus // вычитаеем из общей суммы полученный результат
        document.getElementById('summ').innerHTML = all_sum_minus // выводим общую сумму в шаблон
        count_tovars_cart--  // минус товар из корзины

    }
    document.getElementsByClassName('bay')[num_product].disabled = false // кнопку купить делаем активной
    delcart.parentNode.remove();  // удаляем родиителя this-а onclick='del(this,onclick='del(this, "+num_product+")')'
    let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" в которй посчитано количество нажатий
    // <span title='"+y+"'>1</span>" при нажатии удалить
    let sum_minus = ''
    let all_sum_minus = ''
    //let test_allsumm = ''
    sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart) // title это  У в title='"+y+"' т.е стоимость товара умнажаем на количество нажатий
    //dz


    //minus_count_tovars = sum_minus - sum_minus * 0.2

    //alert(Number(document.getElementById('summ').innerHTML - minus_count_tovars)) // вычитае из общей суммы сумму со скидкой
    //dz
    // это надо вернуть 24.11.20
    // all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus // вычитаеем из общей суммы полученный результат
    // document.getElementById('summ').innerHTML = all_sum_minus // выводим общую сумму в шаблон
    // count_tovars_cart--  // минус товар из корзины


}

// если поле пустое
function chekForm(x, event) {
    // console.log('event')
    // console.log(event)
    // event.preventDefault()
    if (document.getElementsByName('chek')[0].value.length == 0){
        alert('Поле Фамилия не заполнено');
        event.preventDefault()
    } else{
        if (document.getElementsByName('chek2')[0].value.length == 0){
            alert('Поле Телефон не заполнено');
            event.preventDefault()
        }   else{
            if (document.getElementsByName('chek3')[0].value.length == 0){
                alert('Поле Почта не заполнено');
                event.preventDefault()
            } else {
                // document.getElementsByClassName('form_order')[0].submit()
            }
        }
    }
}

function myCartsend(){ // по событию нажатия кнопки отправлям

    mycart_send = mycart.innerHTML // данные корзины в перменную
    localStorage.setItem('datacard', mycart_send); //  заносим в лока сторедж
    // document.getElementsByClassName('form_order')[0].submit()

}