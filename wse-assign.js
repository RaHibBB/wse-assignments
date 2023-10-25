//Problem 1: Write a function to calculate the area of a triangle.
function triangle(base, height) {
    return((base * height) / 2)
}
let total = triangle(10, 10)
// console.log(total);

//Problem 2: Write a function to convert degrees to radians.
function radians(degree) {
    return(degree * (Math.PI/180))
    
}
let radian = radians(10)
// console.log(radian.toFixed(3));

//Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

function factorial(n) {
    if(n==0){
        return 1
    }
    return (n*factorial(n-1))
 
}
let result = factorial(6)
// console.log(result);

//Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.
let isPrime = 10;
function name(params) {
    
}

//Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.
function mergeArrays(firstArray, secondArrays) {
    return firstArray.concat(secondArrays);
}
let firstArray = ['Mango', 'Orange', 'Banana']
let secondArrays = [1, 2, 3, 4]
let resultt = mergeArrays(firstArray, secondArrays)

// console.log(resultt)

//Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.
function isLeapYear(year) {
if (year%400===0 || year % 4 === 0) {
    return "it's a leap year"
}
else{
    return "Not Leap Year"
}
    
}
// console.log(isLeapYear(2020))

//Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.
function removeDuplicates(farrey) {
    return farrey.replace
}
let arr = ["apple", "mango", "apple", 
          "orange", "mango", "mango"]


//Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.
function convertToCelsius(fahrenheit){
    let celsius  = (fahrenheit - 32) * 5/9 ;
    return celsius.toFixed(3)
}

let fahrenheitValue = 100;
    console.log(convertToCelsius(fahrenheitValue))

//Problem 9: Write a function to find the maximum of five numbers.
function maxNumber(number) {
    return Math.max(...number);
}

let resulty = maxNumber(12, 15, 14);
// console.log(resulty);

//Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

function evenOdd(pera) {
   let words = pera.length;
   return words%2 === 0? 'even' : 'odd'

}
let chrt = evenOdd('javascript')
let chrt2 = evenOdd('hello')
console.log(chrt, chrt2);



function evenOdd(pera) {
    let words = pera.length;
    if (words%2===0) {
        return 'even'
    }
    else{
        return 'odd'
    }
 
 }
 let chart = evenOdd("javascript")
 console.log(chart);

/*
problem 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

 ans:__ জাভাস্ক্রিপ্ট (JavaScript) একটি প্রোগ্রামিং ভাষা, যা ওয়েব ডেভেলপমেন্টে ব্যবহৃত হয়। এটি ওয়েব পেজগুলি ডাইনামিক ও ইন্টারেক্টিভ করার জন্য ব্যবহৃত হয|
-to perform different action/task based on different conditions.
-very often used.
-js condition statement:
      1.if else,
         a.if,
         b.else,
         c.else if,
      2.switch.
      -Use switch to specify many alternative blocks of code to be executed.
      -আমরা জানি if else এর ক্ষেত্রে কন্ডিশন মিলে গেলে এর পরবর্তী ধাপগুলা চেক করা হয় না কিন্তু switch ক্ষেত্রে কন্ডিশন মিলে গেলেও পরবর্তী যে ধাপগুলো চেক করা হয়


2. Explain the concept of "scope" in JavaScript and the difference between global and local scope.


ans: The scope of a variable is the region of space where the value of that variable is valid.

There are two types of scope:

     1:Global Scope
     2:Local Scope


3.  difference between global scope and local scope :


     Variables defined in the global scope can be accessed anywhere throughout the program.
     global variables are available from the point they are defined until the end of the scope. 


     Variables defined in the local scope are only available inside the functions, loops, or classes in which they are defined.
     global variables can exist with the same name; however, the compiler will always consider the variables within the local scope first. This means that global variables will not be called if a similar local variable exists.



4. What is the difference between "null" and "undefined" in JavaScript?

Null means an empty or non-existent value. Null is assigned, and explicitly means nothing.on the other hand Undefined means a variable has been declared, but the value of that variable has not yet been defined. 
It is the major difference between "null" and "undefined"




5. What is JavaScript, and what is its primary purpose in web development?
JavaScript is a powerful and efficient scripting language that is used to build dynamic web applications and websites.

JavaScript is a scripting or programming language that allows us to implement complex features and function on web pages. Using JavaScript we can make web pages functional, interactive, and user friendly.

In summary, JavaScript is a versatile scripting language that is used to build modern, dynamic, and interactive webpages, applications, and websites. 
*/