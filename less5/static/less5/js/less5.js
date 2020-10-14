mycart= document.getElementsByClassName('myCart')[0];
function openModal(x, y, myThis, num_product) {
//Функция вывода товаров в модалку

    document.getElementsByClassName('myModal')[0].classList.add('visible')
    var myGoodsDiv = "<div>" + ''+x+'' + y + "<button onclick='minus(this)'>-</button>" +
                    "<span title='"+y+"'>1</span>" +
                    "<button onclick='plus(this)'>+</button>" +
                    "<span style='color: #ff0000; cursor: pointer;' onclick='del(this, "+num_product+")'> x </span></div>"
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
    //console.log(thisplus)

    if (Number(thisplus.previousElementSibling.innerHTML < 10)){
        var plusone = Number(thisplus.previousElementSibling.innerHTML) + 1; // плюсуем нажатие на батон
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
        var minusone = thisminus.nextElementSibling.innerHTML - 1;// Операция ++ по-научному называется инкремент, а операция -- называется декремент.
        thisminus.nextElementSibling.innerHTML = minusone
        let all_sum = ''
        all_sum = Number(document.getElementById('summ').innerHTML) + Number(thisminus.nextElementSibling.title)
        document.getElementById('summ').innerHTML = all_sum
    }
}

function del(delcart, num_product) {
    //Функция у
    //alert(num_product)
    let num_buttom = document.getElementsByClassName('bay')[0].button
    //alert(num_buttom)
    document.getElementsByClassName('bay')[num_product].disabled = false
    delcart.parentNode.remove();
    let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" <span title='"+y+"'>1</span>" при нажатии удалить
    let sum_minus = ''
    let all_sum_minus = ''
    //let bay_num_product = ''
    sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart) // title это  У в title='"+y+"'
    all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus
    document.getElementById('summ').innerHTML = all_sum_minus
    //document.getElementsByClassName('bay')[]
}