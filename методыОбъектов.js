// 1. Объект book и вывод через точку
let book = {
  title: "Война и мир",
  author: "Толстой",
  year: 1869
};

console.log(book.title);
console.log(book.author);
console.log(book.year);


// 2. Добавляем свойство pages
book.pages = 1225;
console.log(book.pages);


// 3. Удаляем свойство year
delete book.year;
console.log(book);


// 4. Объект с ключом с пробелом
let student = {
  "full name": "Ivan Ivanov"
};

console.log(student["full name"]);


// 5. Увеличиваем возраст
let person = { name: "Ivan", age: 30 };
person.age = person.age + 1;
console.log(person.age);


// 6. Вложенный объект
let car = {
  engine: {
    power: 150,
    type: "diesel"
  }
};

console.log(car.engine.type);


// 7. Проверка через ?.
console.log(car.owner?.name); // undefined, ошибки не будет


// 8. Перебор объекта
let user = { id: 1, login: "root", isAdmin: true };

for (let key in user) {
  console.log(key + ": " + user[key]);
}


// 9. Цена ноутбука
let orders = {
  id1: { product: "Phone", price: 500 },
  id2: { product: "Laptop", price: 1500 }
};

console.log(orders.id2.price);


// 10. Функция получения значения по ключу
function getValue(obj, key) {
  return obj[key];
}

console.log(getValue(user, "login"));