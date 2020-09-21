var less = new Array('HTML', 'CSS', 'JS');
document.getElementById('array').innerHTML = JSON.stringify(less)// JSON.stringify превращаем в строчку
//var x = document.getElementById('array').innerHTML
//document.write(x)
//Этот синтаксис объявляет массив courses, который
// хранит три значения, или элемента.
var course1 = new Array(4); // сколько должно быть элементов
course1[0] = 'HTML'
course1[1] = 'CSS'
course1[2] = 'JS'
course1[3] = 'C++'
document.getElementById('array1').innerHTML = JSON.stringify(course1)// какой элемет выводим
//var xx = document.getElementById('array1').innerHTML
//document.write(xx)
//Метод "concat" принимает два массива и:
//  комбинирует их в один новый массив
var courses2 =  ["HTML","CSS"];
var courses3 = ["JS", "C++"];
var allcourses = courses2.concat(courses3);
document.getElementById('array2').innerHTML = allcourses[1]

var less = []; //используем синтаксис именования массивов, что образует объект
    less['start'] = '12.00'
    less['name'] = 'CSS'

document.getElementById('array3').innerHTML = less['name']
document.getElementById('array4').innerHTML = less['start']
document.getElementById('array5').innerHTML = Object.values(less) // значение
document.getElementById('array6').innerHTML = Object.keys(less) // ключи

let dzonearr = [['phone1', 'blue', '100'], ['phone2', 'blue', '100'], ['phone3', 'blue', '100']]
for (let dzonearras of dzonearr){
    document.write(dzonearras)
    //document.getElementById('array7').innerHTML = dzonearras
}