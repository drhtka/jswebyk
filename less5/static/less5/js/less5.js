mycart= document.getElementsByClassName('myCart')[0];
count_tovars_cart = 0

function openModal(x, y, myThis, num_product) {
//Функция вывода товаров в модалку
    count_tovars_cart++
    if (count_tovars_cart > 1){
        alert('zdes6 skidka')
        alert(y)
        multiply_twenty_procent = y * 0.2
        y = y - multiply_twenty_procent
        alert(y)

    }
    document.getElementsByClassName('myModal')[0].classList.add('visible')
    var myGoodsDiv = "<div class='goods_data' style=''>" + ''+x+'' + y + "<button onclick='minus(this)'>-</button>" +
                    "<span title='"+y+"'>1</span>" +
                    "<button onclick='plus(this)'>+</button>" +
                    "<span class='cursor-close-goods' onclick='del(this, "+num_product+")'> x </span></div>"
    mycart.innerHTML = mycart.innerHTML + myGoodsDiv
    myThis.disabled = true // из js принудительн блочим
    document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) + y // стоимость каждого товара плюсутся при попадании в корзину
    // innerHTML) + y срабатывет когда мы добавляем товар в корзину
    //console.log(mycart.innerHTML)
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

function del(delcart, num_product) {
    //Функция удаления выбранного товара из корзины
    // вычитаем из общей суммы цены выбраных товаров, сумму цены удаляемого товара
    //let num_buttom = document.getElementsByClassName('bay')[0].button
    console.log(num_product)
    document.getElementsByClassName('bay')[num_product].disabled = false
    delcart.parentNode.remove();  // удаляем родиителя this-а onclick='del(this,onclick='del(this, "+num_product+")')'
    let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" в которй посчитано количество нажатий
    // <span title='"+y+"'>1</span>" при нажатии удалить
    let sum_minus = ''
    let all_sum_minus = ''
    sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart) // title это  У в title='"+y+"' т.е стоимость товара умнажаем на количество нажатий
    all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus // вычитаеем из общей суммы полученный результат
    document.getElementById('summ').innerHTML = all_sum_minus // выводим общую сумму в шаблон
    count_tovars_cart--
    //alert(count_tovars_cart)
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