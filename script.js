//practise js
// Loops and array
// For,then bracket open then set variable to something, then condition then increase
// then function
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

//array.filter method 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter out even numbers
const evenNumbers = numbers.filter(function(number) {
  return number % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


//Array.foreach method
const odds = [1, 2, 3, 4, 5];

numbers.forEach(function(odd) {
  console.log(odd);
});

//Exercise 1
// Given an array of numbers, filter out the even numbers and 
// create a new array containing only the even numbers.

const nos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNos = nos.filter(function (no) {
    return no% 2 === 0; 
})
console.log(evenNos)

// Exercise 2: Filter Names Starting with "A"
// Given an array of names, filter out the names that start with the letter "A" 
//  create a new array containing only those names.

const names = ["Alice", "Bob", "Anna", "Andrew", "Alex", "Ben"];

filteredNames = names.filter(function (name) {
    return name[0]=== 'A'
})

console.log(filteredNames); // Output: ["Alice", "Anna", "Andrew", "Alex"]

// Exercise 3
//Filter Students with Passing Grades
// Given an array of student objects, each containing a name and a grade, 
// filter out the students who have passing grades(grade greater than or equal to 60) 
//  create a new array containing only those students.

const students = [
  { name: "Alice", grade: 80 },
  { name: "Bob", grade: 45 },
  { name: "Anna", grade: 70 },
  { name: "Andrew", grade: 90 },
  { name: "Alex", grade: 55 }
];

passingStudents = students.filter(function (student) {
    return student.grade >= 60
    
})

console.log(passingStudents); 

//Exercise 4: Filter Prime Numbers
//Given an array of numbers, filter out the prime numbers 
// create a new array containing only the prime numbers.

//not correct
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const primeNumbers = allNumbers.filter(function (nombas) {
  return nombas >=2 && nombas% 2 !== 0 
})


console.log(primeNumbers); // Output: [2, 3, 5, 7]


// Exercise 5:  Filter words starting with a specific letter
// Given an array of words, filter and return only the words that start with the letter "S".
const words = ['apple', 'banana', 'strawberry', 'kiwi', 'orange', 'peach'];

const startsWiths= words.filter(function(word) {
    return word[0]=== 's'
})
console.log(startsWiths)

// Exerise 6: Filter numbers greater than a threshold
// Given an array of numbers, filter and return only the numbers that are greater than 50.

const wholeNumbers = [20, 75, 10, 60, 45, 80, 5, 100];
const greaterthanFifty = wholeNumbers.filter( function (wholenumber) {
    return wholenumber > 50
})
console.log(greaterthanFifty)

//  Exercise 7:Filter objects based on multiple conditions
// Given an array of objects representing products, filter and 
// return only the products that have a price more than or equal to 50 and belong to the category "Electronics".

const products = [
  { name: 'iPhone', price: 1000, category: 'Electronics' },
  { name: 'Shirt', price: 30, category: 'Clothing' },
  { name: 'Headphones', price: 150, category: 'Electronics' },
  { name: 'Pants', price: 50, category: 'Clothing' },
];


const productsPro = products.filter(function (product) {
  return product.price >= 50 && product.category === 'Electronics';
});

console.log(productsPro);

// Exercise 8: Filter even-length strings
// Given an array of strings, filter and return only the strings that have an even length.

const strings = ['hello', 'world', 'open', 'ai', 'chatbot'];

const evenLength = strings.filter(function(string) {
    return string.length % 2 === 0
})
console.log(evenLength);

