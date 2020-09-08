var courses = new Array('HTML', 'CSS', 'JS');
document.getElementById('array').innerHTML = courses
//document.write(courses)

//Этот синтаксис объявляет массив courses, который
// хранит три значения, или элемента.
var course1 = new Array(4); // сколько должно быть элементов
course1[0] = 'HTML'
course1[1] = 'CSS'
course1[2] = 'JS'
course1[3] = 'C++'
document.getElementById('array1').innerHTML = course1// какой элемет выводим
//document.write(course1)

//Метод "concat" принимает два массива и:
//  комбинирует их в один новый массив
var courses2 =  ["HTML","CSS"];
var courses3 = ["JS", "C++"];
var allcourses = courses2.concat(courses3);
document.getElementById('array2').innerHTML = allcourses[1]
//document.write(allcourses)

var less = []; //используем синтаксис именования массивов, что образует объект
less['start'] = '12.00'
less['name'] = 'CSS'

document.getElementById('array3').innerHTML = less['name']
document.getElementById('array4').innerHTML = less['start']
document.getElementById('array5').innerHTML = Object.values(less) // значение
document.getElementById('array6').innerHTML = Object.keys(less) // ключи