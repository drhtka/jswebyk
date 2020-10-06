mycart= document.getElementsByClassName('myCart')[0];
function openModal(x, y, myThis) {

    //console.log(x)
    //alert(x)
    var myGoodsDiv = "<div>" + ''+x+'' + y + "<button onclick='minus(this)'>-</button><span>1</span><button onclick='plus(this)'>+</button></div>"
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
    thisplus.previousElementSibling.innerHTML++; // Операция ++ по-научному называется инкремент, а операция -- называется декремент.
}

