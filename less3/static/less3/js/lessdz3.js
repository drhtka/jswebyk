mycart= document.getElementsByClassName('myCart')[0];
function openModal(x, y) {

    console.log(x)
    //alert(x)
    var myGoodsDiv = "<div>" + ''+x+'' + y + "</div>"
    mycart.innerHTML = mycart.innerHTML + myGoodsDiv
}
function closeModal() {
    document.getElementsByClassName('myModal')[0].classList.remove('visible')
}

function modalShow(){
    document.getElementsByClassName('myModal')[0].classList.add('visible')
}