// 1. Добавить элемент
let arr1 = [1, 2];
arr1.push(3);
console.log(arr1);


// 2. Удалить элемент
let arr2 = ["a", "b", "c"];
let removed = arr2.pop();
console.log(removed); // удалённый элемент


// 3. Проверка наличия
let arr3 = [10, 20, 30, 40];
console.log(arr3.includes(100)); // false


// 4. Получить подмассив
let arr4 = [5, 10, 15, 20, 25];
let sub = arr4.slice(1, 4);
console.log(sub); // [10, 15, 20]


// 5. Замена через splice
let arr5 = [1, 2, 3, 4];
arr5.splice(1, 2, "X", "Y");
console.log(arr5);


// 6. Умножение элементов
let arr6 = [2, 4, 6];
let newArr = arr6.map(num => num * 10);
console.log(newArr);


// 7. Фильтрация чётных чисел
let arr7 = [1, 2, 3, 4, 5, 6];
let even = arr7.filter(num => num % 2 === 0);
console.log(even);


// 8. Сумма элементов
let arr8 = [10, 20, 30, 40];
let sum = arr8.reduce((acc, num) => acc + num, 0);
console.log(sum);


// 9. Найти объект
let users = [
  {id: 1, name: "Anna"},
  {id: 2, name: "Ivan"},
  {id: 3, name: "Olga"}
];

let user = users.find(u => u.name === "Ivan");
console.log(user);


// 10. Сортировка
let arr10 = [100, 5, 20, 15];
arr10.sort((a, b) => a - b);
console.log(arr10);