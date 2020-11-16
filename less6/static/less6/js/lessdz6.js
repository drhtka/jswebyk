mycart= document.getElementsByClassName('myCart')[0];
count_tovars_cart = 0 // количечиво товаров в карзине

function openModal(x, y, myThis, num_product) {
//Функция вывода товаров в модалку
    console.log('x, y, myThis, num_product')
    console.log(x, y, myThis, num_product)

    my_sale = ''
    count_tovars_cart++
    document.getElementById('my_rub').innerHTML = 'руб.'
    if (count_tovars_cart > 1){
        // alert('zdes6 skidka')
        // alert(y)
        my_sale = 'sale'

        multiply_twenty_procent = y * 0.2
        y = y - multiply_twenty_procent
        // alert(y)
    }

    document.getElementsByClassName('myModal')[0].classList.add('visible')
    var myGoodsDiv = "<div class='goods_data'>" + ''+x+'' + y + "<button onclick='minus(this)'>-</button>" +
        "<span title='"+y+"'>1</span>" +
        "<button onclick='plus(this)'>+</button>" +
        "<span class='cursor-close-goods' onclick='del(this, "+num_product+")'> x </span><span>"+my_sale+"</span></div>"
    mycart.innerHTML = mycart.innerHTML + myGoodsDiv
    myThis.disabled = true // из js принудительн блочим при нажатии один раз на кнопку купить
    document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) + y // стоимость каждого товара плюсутся при попадании в корзину
    // innerHTML) + y срабатывет когда мы добавляем товар в корзину
    //console.log(mycart.innerHTML)
    // document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) + my_rub
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
        var plusone = Number(thisplus.previousElementSibling.innerHTML) + 1; // плюсуем нажатие на батон
        thisplus.previousElementSibling.innerHTML = plusone; // обращаемся к цифре >1< и увеличиваем при нажатии на батон
        let all_sum = ''
        //console.log('plus')
        //console.log(Number(thisplus.previousElementSibling.title))
        all_sum = Number(document.getElementById('summ').innerHTML) + Number(thisplus.previousElementSibling.title)// при нажатиии к сумме плюсуется price т.е. title='"+y+"'
        document.getElementById('summ').innerHTML = all_sum  // перзаписываем общую сумму для вывода на сплюсованную сумму
        //console.log(all_sum)
    }

}

function minus(thisminus) {
    //Функция минусования при нажатии на плюсик

    if (Number(thisminus.nextElementSibling.innerHTML > 1)){
        var minusone = thisminus.nextElementSibling.innerHTML - 1;// Операция ++ по-научному называется инкремент, а операция -- называется декремент.
        thisminus.nextElementSibling.innerHTML = minusone
        let all_sum = ''
        all_sum = Number(document.getElementById('summ').innerHTML) + Number(thisminus.nextElementSibling.title)// при нажатиии от суммы минусуется price т.е. title='"+y+"'
        document.getElementById('summ').innerHTML = all_sum // перзаписываем общую сумму для вывода на сминусованную сумму
    }
}

function del(delcart, num_product) {
    //Функция удаления выбранного товара из корзины
        // вычитаем из общей суммы цены выбраных товаров, сумму цены удаляемого товара
    //let num_buttom = document.getElementsByClassName('bay')[0].button
    if (count_tovars_cart >= 2){

        if (delcart.nextElementSibling.innerHTML == 'sale'){

            }else{
            delcart.parentNode.nextElementSibling.childNodes[5].innerHTML = ''
            // console.log(delcart.parentNode)
            // console.log('1')
            // console.log(delcart.parentNode.nextElementSibling)
            // console.log('2')
            // console.log(delcart.parentNode.nextElementSibling.childNodes)
        }
    }
    console.log('num_product')
    console.log(num_product)
    document.getElementsByClassName('bay')[num_product].disabled = false
    delcart.parentNode.remove();
    let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" <span title='"+y+"'>1</span>" при нажатии удалить
    // <span title='"+y+"'>1</span>" при нажатии удалить
    let sum_minus = ''
    let all_sum_minus = ''
    sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart) // title это  У в title='"+y+"'
    all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus
    document.getElementById('summ').innerHTML = all_sum_minus
    count_tovars_cart--
    //alert(count_tovars_cart)
}

// если поле пустое
function chekForm(x, event) {
    //alert(123)
    // console.log(event)
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