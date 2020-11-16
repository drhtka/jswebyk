mycart= document.getElementsByClassName('myCart')[0];
count_tovars_cart = 0

function openModal(x, y, myThis, num_product) {
//Функция вывода товаров в модалку
    let price_old = y
    console.log(x, y, myThis, num_product)
    console.log('x, y, myThis, num_product')
    my_sale = ''
    count_tovars_cart++ // при любом действии openModal

    if (count_tovars_cart > 1){
        // alert('zdes6 skidka')
        // alert(y)
        my_sale = 'sale'
        multiply_twenty_procent = y * 0.2
        y = y - multiply_twenty_procent
        // alert(y)

    }
    document.getElementsByClassName('myModal')[0].classList.add('visible')
    var myGoodsDiv = "<div class='goods_data' style=''>" + ''+x+'<span>:after</span>' + y + "<button onclick='minus(this)' class='minus'> -</button>" +
                    "<span class='title' title='"+y+"'>1</span>" +
                    "<button onclick='plus(this)' class='plus'>+</button>" +
                    "<span class='cursor-close-goods delete_x' title="+price_old+" onclick='del(this, "+num_product+", "+price_old+")'> x </span><span>"+my_sale+"</span>" +
                    "</div>"
    mycart.innerHTML = mycart.innerHTML + myGoodsDiv
    myThis.disabled = true // из js принудительн блочим
    document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) + y // стоимость каждого товара плюсутся при попадании в корзину
    // innerHTML) + y срабатывет когда мы добавляем товар в корзину
    // console.log('mycart.innerHTML')
    // console.log(mycart.innerHTML)
}
function closeModal() {
    //Функция закрываем модалку
    document.getElementsByClassName('myModal')[0].classList.remove('visible')
}

function modalShow(){
    //Функция показываем модалку
    document.getElementsByClassName('myModal')[0].classList.add('visible')
}

function plus(thisplus) {
    //Функция плюсования при нажатии на плюсик

    if (Number(thisplus.previousElementSibling.innerHTML < 10)){
        var plusone = Number(thisplus.previousElementSibling.innerHTML) + 1; // плюсуем 1 при нажатии на батон
        thisplus.previousElementSibling.innerHTML = plusone; // обращаемся к цифре >1< и увеличиваем при нажатии на батон
        let all_sum = ''
        //console.log('plus')
        //console.log(Number(thisplus.previousElementSibling.title))
        all_sum = Number(document.getElementById('summ').innerHTML) + Number(thisplus.previousElementSibling.title)// при нажатиии у сумме плюсуется price т.е. title='"+y+"'
        document.getElementById('summ').innerHTML = all_sum  // перзаписываем общую сумму для вывода на сплюсованную сумму
        //console.log(all_sum)
    }

}

function minus(thisminus) {
    //Функция минусования при нажатии на плюсик

    if (Number(thisminus.nextElementSibling.innerHTML > 1)){
        var minusone = thisminus.nextElementSibling.innerHTML - 1;// Операция ++ инкремент, а операция -- называется декремент.
        thisminus.nextElementSibling.innerHTML = minusone
        let all_sum = ''
        all_sum = Number(document.getElementById('summ').innerHTML) + Number(thisminus.nextElementSibling.title)
        document.getElementById('summ').innerHTML = all_sum
    }
}

function del(delcart, num_product, price_old) {

    if (count_tovars_cart >= 2){// если товаров 2 или больше тогда мы что то делаем
    //alert(count_tovars_cart)
        if (delcart.nextElementSibling.innerHTML == 'sale'){ // если скидочный товар равен sale
            // delcart.nextElementSibling.innerHTML = ''


        }else{// если товар не скидочный
            // console.log('maya')

                delcart.parentNode.nextElementSibling.childNodes[5].innerHTML  = ''  // затираем sale
            //delcart.nextElementSibling.innerHTML = delcart.nextElementSibling.innerHTML
            // alert('tovar NEscid')
            //console.log('1')
            //console.log(delcart.parentNode.nextElementSibling)
            // console.log('1')
            // console.log(delcart.parentNode.nextElementSibling)
            console.log('22')
            console.log(delcart.parentNode.nextElementSibling.childNodes)
            // console.log('3')
            // console.log(delcart.parentNode.nextElementSibling.childNodes[4].title)
            let cliner_price = delcart.parentNode.nextElementSibling.childNodes[4].title  // чистая цена
            let sale_price = delcart.parentNode.nextElementSibling.childNodes[2].title  // скидочная цена цена
            let count_tovars = delcart.parentNode.nextElementSibling.childNodes[2].innerHTML // количество товаров
            console.log('1')
            console.log(document.getElementById('summ').innerHTML)
            let summ_product_count = (sale_price * count_tovars)
            let new_summ = cliner_price * count_tovars
            // document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) - summ_product_count
            console.log('3')
            console.log(document.getElementById('summ').innerHTML)
            // document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) + new_summ
            console.log('4')
            console.log(document.getElementById('summ').innerHTML)
            console.log('5')
            console.log(cliner_price, sale_price, count_tovars, summ_product_count, new_summ)
            console.log('new_summ')
            console.log(new_summ)
            console.log('summ_product_count')
            console.log(summ_product_count)
        }
    }
    console.log('num_product')
    console.log(num_product)
    document.getElementsByClassName('bay')[num_product].disabled = false
    delcart.parentNode.remove();  // удаляем родиителя this-а onclick='del(this,onclick='del(this, "+num_product+")')'
    let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" в которй посчитано количество нажатий
    // <span title='"+y+"'>1</span>" при нажатии удалить
    let sum_minus = ''
    let all_sum_minus = ''
    //let test_allsumm = ''
    sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart) // title это  У в title='"+y+"' т.е стоимость товара умнажаем на количество нажатий
    //dz
    // console.log('sum_minus')
    // console.log(sum_minus)
    // console.log(' sum_minus = sum_minus 0.2')
    // console.log( sum_minus - sum_minus * 0.2) // сумма скидочной цены умноженной на количество нажатий
    // console.log('all_sum_minus')
    // console.log(all_sum_minus)

    //minus_count_tovars = sum_minus - sum_minus * 0.2

    //alert(Number(document.getElementById('summ').innerHTML - minus_count_tovars)) // вычитае из общей суммы сумму со скидкой
    //dz
    all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus // вычитаеем из общей суммы полученный результат
    document.getElementById('summ').innerHTML = all_sum_minus // выводим общую сумму в шаблон
    count_tovars_cart--  // минус товар из корзины

    // console.log('all_sum_minus')
    // console.log(all_sum_minus)
    //
    // minus_count_tovars = sum_minus - sum_minus * 0.2
    // test_allsumm = all_sum_minus - minus_count_tovars
    // alert(test_allsumm)

}

// если поле пустое
function chekForm(x, event) {
    //alert(123)
    console.log(event)
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
                document.getElementsByClassName('form_order')[0].submit()
            }
        }
    }

}

function myCartsend(){ // по событию нажатия кнопки отправлям

    mycart_send = mycart.innerHTML // данные корзины в перменную
    // console.log('storage1')
    // console.log(mycart_send)
    localStorage.setItem('datacard', mycart_send); //  заносим в лока сторедж
    console.log('storage')
    console.log(localStorage.getItem('datacard'));
    // document.getElementById('datacard').value = localStorage.getItem('datacard').value;
    // console.log('out')
    // console.log(document.getElementById('datacard').innerHTML)
    document.getElementsByClassName('form_order')[0].submit()

}