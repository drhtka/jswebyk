console.log('1')
mycart= document.getElementsByClassName('myCart')[0];
console.log('2')
//console.log()
function openModal(x, y, myThis) {
//Функция вывода товаров в модалку
    console.log('3')
    document.getElementsByClassName('myModal')[0].classList.add('visible')
    var myGoodsDiv = "<div>" + ''+x+'' + y + "<button onclick='minus(this)'>-</button>" +
        "<span title='"+y+"'>1</span>" +
        "<button onclick='plus(this)'>+</button>" +
        "<span style='color: #ff0000; cursor: pointer;' onclick='del(this)'> x </span></div>"
    mycart.innerHTML = mycart.innerHTML + myGoodsDiv
    myThis.disabled = true // из js принудительн блочим
    document.getElementById('summ').innerHTML = Number(document.getElementById('summ').innerHTML) + y // стоимость каждого товара плюсутся при попадании в корзину
    // innerHTML) + y срабатывет когда мы добавляем товар в корзину
    //console.log(mycart.innerHTML)

}
console.log(openModal(x));

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

function del(delcart) {
    //Функция у
    //alert('testdel')

    delcart.parentNode.remove();
    let count_tovar_cart = delcart.previousElementSibling.previousElementSibling.innerHTML // обращаемся к цифре "1" <span title='"+y+"'>1</span>" при нажатии удалить
    //console.log(count_tovar_cart)
    //console.log('123')
    //console.log(Number(delcart.previousElementSibling.previousElementSibling.title))
    //console.log(delcart.previousElementSibling.previousElementSibling.innerHTML)
    //console.log('count_tovar_cart')
    //alert(delcart.previousElementSibling.previousElementSibling.title)
    let sum_minus = ''
    let all_sum_minus = ''
    sum_minus = Number(delcart.previousElementSibling.previousElementSibling.title * count_tovar_cart) // title это  У в title='"+y+"'
    //console.log('eeeeeeee')
    //alert(sum_minus)
    all_sum_minus = Number(document.getElementById('summ').innerHTML) - sum_minus
    /*let all_sum = ''
    all_sum = Number(document.getElementById('summ').innerHTML) - Number(thisplus.previousElementSibling.title) *
    document.getElementById('summ').innerHTML = all_sum*/
    //console.log('all_sum_minus')
    //console.log(all_sum_minus)
    document.getElementById('summ').innerHTML = all_sum_minus
}