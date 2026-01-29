// 1Функция выводит привет в консоль
function sayHello() {
  console.log("Hello, JS!");
}

// 2 Функция принимаеьт имя и пишет приветствие
function greet(name) {
  console.log("Hello, " + name);
}

//3 если есть имя то выводим с именем если нет то ьез него
function greetCheck(name) {
  if (name) {
    return "Hello, " + name;
  } else {
    return "Hello, stranger";
  }
}

// 4.пишет квадрат числа
function square(x) {
  return x * x;
}

// 5. делает сложение 
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

// 6 пишет меньшее число 
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// 7 пишет число умноженое на два
function double(x) {
  return x * 2;
}

// 8  берет число и функцию и пишет новую  функцию с числом
function apply(fn, x) {
  return fn(x);
}

// 9пишет слова больше заданного значения  
function filterByLength(words, minLen) {
  let result = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > minLen) {
      result.push(words[i]);
    }
  }
  return result;
}

// 10 переделывает все стори в верхний регистр
function toUpperArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i].toUpperCase());
  }
  return result;
}

// 11 если без степени то возводиться в квадрат
function power(base, exp) {
  if (exp === undefined) {
    exp = 2;
  }
  return base ** exp;
}

// 12 проверка четное/нечетное
function isEven(n) {
  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
