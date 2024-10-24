console.log('#6. JavaScript homework example file')

/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для управління даними про калорійність продуктів. Необхідно реалізувати наступні функціональності:
 * Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
 * Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою. Якщо продукт не знайдено, повертає рядок 'Product not found'.
 * Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.
 *
 * Критерії перевірки:
 * Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
 * Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
 * Наявність методів addProduct, getProductCalories, та removeProduct.
 */

class CalorieCalculator {
  constructor() {
    this.products = new Map(); // Внутрішнє сховище для продуктів
  }

  // Метод для додавання продукту та його калорійності
  addProduct(productName, calories) {
    this.products.set(productName, calories);
  }

  // Метод для отримання калорійності продукту
  getProductCalories(productName) {
    if (this.products.has(productName)) {
      return this.products.get(productName);
    } else {
      return 'Продукт не знайдено';
    }
  }

  // Метод для видалення продукту
  removeProduct(productName) {
    this.products.delete(productName);
  }
}

// Демонстрація використання
const calorieCalculator = new CalorieCalculator();
calorieCalculator.addProduct('Яблуко', 52);
calorieCalculator.addProduct('Банан', 89);

console.log(calorieCalculator.getProductCalories('Яблуко')); // 52
console.log(calorieCalculator.getProductCalories('Банан')); // 89

calorieCalculator.removeProduct('Яблуко');
console.log(calorieCalculator.getProductCalories('Яблуко')); // Продукт не знайдено


// Конструктор: Ініціалізує новий Map для зберігання продуктів та їх калорійності.
// addProduct: Приймає назву продукту та кількість калорій, додаючи їх до мапи.
// getProductCalories: Перевіряє, чи існує продукт у мапі. Якщо так, повертає кількість калорій, інакше – повертає 'Продукт не знайдено'.
// removeProduct: Видаляє вказаний продукт з мапи.



/*
 * #2
 * Задача: Унікальні користувачі.
 * Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження унікальних імен користувачів. Клас має надавати можливість:
 * Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору. Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
 * Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
 * Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.
 *
 * Критерії перевірки:
 * Наявність методів addUser, exists, count у класі UniqueUsernames.
 * Використання конструкції class для створення класу UniqueUsernames.
 * Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.
 */

class UniqueUsernames {
  constructor() {
    this.usernames = new Set(); // Внутрішнє сховище для унікальних імен користувачів
  }

  // Метод для додавання імені користувача
  addUser(username) {
    this.usernames.add(username); // Додає ім'я, якщо його ще немає
  }

  // Метод для перевірки наявності імені
  exists(username) {
    return this.usernames.has(username); // Повертає true, якщо ім'я існує
  }

  // Метод для отримання кількості унікальних імен
  count() {
    return this.usernames.size; // Повертає кількість унікальних імен
  }
}

// Демонстрація використання
const uniqueUsernames = new UniqueUsernames();
uniqueUsernames.addUser('john_doe');
uniqueUsernames.addUser('jane_doe');
uniqueUsernames.addUser('john_doe'); // Ця дія не змінить набір, оскільки 'john_doe' вже існує

console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`); // true
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`); // 2

// Експорт для використання в тестах
export { UniqueUsernames };

// Конструктор: Ініціалізує новий Set для зберігання унікальних імен користувачів.
// addUser: Додає ім'я користувача до набору. Якщо ім'я вже існує, Set автоматично ігнорує його.
// exists: Перевіряє, чи існує вказане ім'я в наборі, і повертає true або false.
// count: Повертає кількість унікальних імен, які зберігаються в наборі.
