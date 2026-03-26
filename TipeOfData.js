// 1. Объявляем переменную без значения
let x;

// typeof показывает тип данных
console.log(typeof x);


// 2. Проверяем тип числа и строки
console.log(typeof 10);
console.log(typeof "10");


// 3. Проверяем тип логических значений
console.log(typeof true);
console.log(typeof false);


// 4. Особенность JavaScript:
// typeof null возвращает "объект"
console.log(typeof null); 


// 5. Если один из операндов строка,
// происходит сложение строк
console.log("15" + 1); 


// 6. При вычитании строка приводится к числу
console.log("12" - 1);


// 7. Пустая строка преобразуется в false
console.log(Boolean(""));


// 8. Строка с пробелом НЕ пустая,
// поэтому результат true
console.log(Boolean(" "));


// 9. Преобразуем строку с пробелами в число
console.log(Number(" 13 "));


// 10. Функция проверяет, является ли значение числом
// и не равно ли оно NaN
function isNumber(v) {
  return typeof v === "number" && !Number.isNaN(v);
}

// Проверяем работу функции
console.log(isNumber(10));
console.log(isNumber(NaN));
console.log(isNumber("10"));
