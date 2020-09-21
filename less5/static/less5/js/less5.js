mycart= document.getElementsByClassName('myCart')[0];
function openModal(x, y, myThis) {

    //console.log(x)
    //alert(x)
    var myGoodsDiv = "<div>" + ''+x+'' + y + "<button onclick='minus(this)'>-</button><span>1</span><button onclick='plus(this)'>+</button><span style='color: red; cursor: pointer;' onclick='del(this)'> x </span></div>"
    mycart.innerHTML = mycart.innerHTML + myGoodsDiv
    myThis.disabled = true // из js принудительн блочим


}
function closeModal() {
    document.getElementsByClassName('myModal')[0].classList.remove('visible')
}

function modalShow(){
    document.getElementsByClassName('myModal')[0].classList.add('visible')
}

function plus(thisplus) {
    //console.log(thisplus)
    var plusone = Number(thisplus.previousElementSibling.innerHTML) + 1; //Операция ++ по-научному называется инкремент, а операция -- называется декремент.
    thisplus.previousElementSibling.innerHTML = plusone;
    //console.log(thisplus.previousElementSibling.innerHTML)
}

function minus(thisminus) {
    var minusone = thisminus.nextElementSibling.innerHTML - 1;// Операция ++ по-научному называется инкремент, а операция -- называется декремент.
    thisminus.nextElementSibling.innerHTML = minusone
}

function del(delcart) {
    delcart.parentNode.remove();
}