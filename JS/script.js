"use strict";

let testData = [1, 2, 1990, 85, 24, "Vasya", "colya@example.com", "Rafshan", "ashan@example.com", true, false];
let testData2 = [1, 2, 1990, 85, 24, 5, 7, 8.1];
let testData3 = [{  "name":"Vasya",
                    "email":"vasya@example.com",    
                    "age":20,
                    "skills":{  "php":0,
                                "js":-1,
                                "madness":10,
                                "rage":10}
                            },
                {   "name":"Dima",  
                    "email":"dima@example.com",
                    "age":34,
                    "skills":{  "php":5,
                                "js":7,
                                "madness":3,
                                "rage":2}
                            },
                {   "name":"Colya",
                    "email":"colya@example.com",
                    "age":46,
                    "skills":   {"php":8,
                                "js":-2,
                                "madness":1,
                                "rage":4}
                                },
                    {"name":"Misha",
                    "email":"misha@example.com",
                    "age":16,
                    "skills":   {"php":6,
                                "js":6,
                                "madness":5,
                                "rage":2}
                                },
                    {"name":"Ashan",
                    "email":"ashan@example.com",
                    "age":99,
                    "skills":   {"php":0,
                                "js":10,
                                "madness":10,
                                "rage":1}
                                },
                    {"name":"Rafshan",
                    "email":"rafshan@example.com",
                    "age":11,
                    "skills":   {"php":0,
                                "js":0,
                                "madness":0,
                                "rage":10
                                }
                }]
let testData4 = [{"name":"Vasya","email":"vasya@example.com","age":20},{"name":"Dima","email":"dima@example.com","age":34},{"name":"Colya","email":"colya@example.com","age":46},{"name":"Misha","email":"misha@example.com","age":16},{"name":"Ashan","email":"ashan@example.com","age":99},{"name":"Rafshan","email":"rafshan@example.com","age":11},1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[[[[1,2,1990,85,24,"Vasya","colya@example.com","Rafshan","ashan@example.com",true,false,[{"name":"Rafshan","email":"rafshan@example.com","age":11}]]]]]]
//1.Напишите функцию cloneDeep таким образом, чтобы она была способна клонировать переданный как параметр объект.  

let cloneDeep = JSON.parse(JSON.stringify(testData3));
 
  console.log(testData3); // 
  console.log(cloneDeep); //

//2. Свертка. Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого есть все элементы входных массивов.

var arrays = [[1, 2, 3], [4, 5], [6]];
arrays = arrays.reduce(function(a, b) {
    return a.concat(b);
});
console.log( arrays );
// → [1, 2, 3, 4, 5, 6]


//3.  Допустим, у вас есть функция primitiveMultiply, которая в 50% случаев перемножает 2 числа, а в остальных случаях выбрасывает исключение типа MultiplicatorUnitFailure. Напишите функцию, обёртывающую эту, и просто вызывающую её до тех пор, пока не будет получен успешный результат.
function MultiplicatorUnitFailure() {}
function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b;
  else
    throw new MultiplicatorUnitFailure();
}
function reliableMultiply(a, b) {

    
        var x;
        while (!x){
        try {x = primitiveMultiply(a, b);}
            catch(error){  
              if (error instanceof MultiplicatorUnitFailure) 
              reliableMultiply(a, b);
              
            }
        }
         return x;
   
}

console.log(reliableMultiply(8, 8));

//4. Расширить прототип Array, добавив к нему метод добавления элемента в начало без использование unshift.

var arr = [1, 2, 3];

var LetsUnshift = function (item){
  arr.reverse().push(item);
  arr.reverse();

}
LetsUnshift(0);
console.log(arr);
//[0, 1, 2, 3]


//5. Выведите все элементы массива используя рекурсию.

var arr = ['Solnce', 'vishlo', 'iz', 'za', 'tuchi']; 
function recuseLog(arr, i) { 
  if (i == arr.length) {
    return;
  }
  console.log(arr[i]);
  recuseLog(arr, i + 1);
} 
recuseLog(arr,0);


//7. Сделать функцию поиска значений в массиве.

/*Синтаксис: array_find(arr: array, search: string|regex): string|number[]|null
*/



 function array_find ( arr, val ) {	
   for(var i in arr) {if (val == arr[i]) return arr[i]; }
   return false; 
 }

 let result = array_find (testData, "Rafshan");
 console.log (result);


 //8. Сделать функцию которая обрезает массив до указанного значения.

function array_skip_until(arr, val) {
  var newArr=JSON.parse(JSON.stringify(arr));
  for(var i in newArr) {if (val == newArr[i]) 
    return newArr.splice(i, newArr.length-1); }
    return [];
}
let result2 = array_skip_until(testData, "Rafshan");
let result3 = array_skip_until(testData, "asd")
console.log (result2);
console.log (result3);

//10. Сделать функцию которая возвращает уникальные элементы массива.

function array_unique(arr) {
  let result = [];

  for (let str of arr) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }

  return result;
}
let result10 = array_unique(testData.concat(testData2));
console.log (result10);









