// 1 Берем строку "JavaScript" и с помощью slice вырезаем часть строки начиная с 4 символа.
let str1 = "JavaScript";
console.log(str1.slice(4)); // Script

// 2 Проверяем начинается ли строка с rep и заканчивается ли она на pdf
let str2 = "report.pdf";
console.log(str2.startsWith("rep"));
console.log(str2.endsWith(".pdf"));

// 3 В строке I like cats заменяем слово cats на dogs
let str3 = "Я Люблю Кошек";
console.log(str3.replace("Кошек", "Собак"));

// 4 Разделяем строку по запятым, получаем массив слов.
let str4 = "apple,banana,orange,apple";
let arr4 = str4.split(",");
let count = 0;
for (let i = 0; i < arr4.length; i++) {
    if (arr4[i] === "apple") {
        count++;
    }
}
console.log(count);

// 5 В строке ищем все числа.
let str5 = "My phone number is 12345 and my code is 67890";
let nums = str5.match(/\d+/g);
console.log(nums);