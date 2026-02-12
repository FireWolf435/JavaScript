//1 Базовый срез
let str1 = "JavaScript";
let result1 = str1.slice(4);
console.log("1. Результ:", result1); 

//2. Проверка начала и конца 
let file = "report.pdf";
let starts = file.startsWith("rep");
let ends = file.endsWith(".pdf");
console.log("2. Начинается на 'rep' и кончается на '.pdf'?", starts && ends);

// 3. Замена в строке 
let text3 = "я люблю котов";
let result3 = text3.replace("котов", "собаки");
console.log("3. Замена:", result3);

// 4. Подсчёт слов 
let fruits = "яблоко,банан,аппельсин,яблоко";
let fruitsArray = fruits.split(",");
let count = 0;
for (let fruit of fruitsArray) {
    if (fruit === "яблоко") {
        count++;
    }
}
console.log("4. Сколько раз 'яблоко':", count);

//5. Фильтр по слову числа
let data5 = "My phone number is 12345 and my code is 67890";
let words5 = data5.split(" ");
let numbersOnly = [];
for (let word of words5) {
    if (!isNaN(word)) {
        numbersOnly.push(word);
    }
}
console.log("5. Только числа:", numbersOnly);

// 6. 
let sentence6 = "Hello World From JS";
let words6 = sentence6.split(" ");
words6[0] = words6[0].toLowerCase(); 
console.log("6. Нижний регистр первого слова:", words6.join(" "));

//  7. Цензура 
let feedback7 = "Джава скрипт прикольный язык";
console.log("7. Цензура:", feedback7.replace("прикольный", "****"));

//  8. Проверка наличия подстроки
let email = "user@example.com";
if (email.includes("@") && email.includes(".")) {
    console.log("8. Email valid");
} else {
    console.log("8. Invalid");
}

// 9. Аббревиатура 
let title9 = "Java Script Object Notation";
let parts9 = title9.split(" ");
let abbr = "";
for (let part of parts9) {
    abbr = abbr + part[0];
}
console.log("9. Аббревиатура:", abbr.toUpperCase());

//10. Самое длинное слово 
let longStr = "я то что я уничтожаю ";
let words10 = longStr.split(" ");
let longestWord = "";
for (let word of words10) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}
console.log("10. Самое длинное слово:", longestWord);