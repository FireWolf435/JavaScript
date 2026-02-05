// 1 Проверка числа
let n = -5;
if (n > 0) {
  console.log("positive");
} else if (n < 0) {
  console.log("negative");
} else {
  console.log("zero");
}

// 2. Минимум из двух
let a = 12;
let b = 7;
if (a < b) {
  console.log(a);
} else {
  console.log(b);
}
// 3. Делится ли на 3
n = 15;
if (n % 3 === 0) {
  console.log("yes");
} else {
  console.log("no");
}

// 4. Сумма чисел от 1 до N
let N = 7;
let sum = 0;
for (let i = 1; i <= N; i++) {
  sum += i;
}
console.log(sum);

// 5. Все нечётные числа от 1 до 15
for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 6. Количество чётных чисел от 1 до 20
let count = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    count++;
  }
}
console.log(count);
// 7. Найти букву в строке
let str = "banana";
let letterCount = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] === "a") {
    letterCount++;
  }
}
console.log(letterCount);
// 8. Переворот строки
let text = "hello";
let reversed = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversed += text[i];
}
console.log(reversed);


// 9. Таблица умножения на число
let num = 4;

for (let i = 1; i <= 10; i++) {
  console.log(num + " * " + i + " = " + (num * i));
}
// 10. Простая пирамидка
let stars = "";
for (let i = 1; i <= 4; i++) {
  stars += "*";
  console.log(stars);
}
// 11. Сумма чисел, кратных 3 или 5
N = 30;
sum = 0;
for (let i = 1; i <= N; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);