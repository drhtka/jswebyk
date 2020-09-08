var myobject = {

    price: 100, name: 'lenovo', size: 200

}
    myobject.name = 'iphone' // изменяем
    console.log(myobject)
    myobject.color = 'blue' // добавляем новый объект
    console.log(myobject)
    myobject.option = {spiker: 'lighting', case: 'original'} // добавляем новыйвложенный объект
    console.log(myobject)
    console.log(myobject.option.spiker)