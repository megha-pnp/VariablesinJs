// SECTION 1 - Q1 Profile Builder
let fullName = "Megha";
let age = 20;
let currentSemester = 5;
let hasLaptop = true;
let averageAttendance = 85;

console.log(fullName);
console.log(age);
console.log(currentSemester);
console.log(hasLaptop);
console.log(averageAttendance);


// SECTION 1 - Q2 Fix the Errors
let city = "Delhi";
let graduationYear = "2027";
let isHosteller = true;
let cgpa = 8.5;

let student = {
    course: "BSc",
    collegeName: "Govt College"
};

console.log(city);
console.log(graduationYear);
console.log(isHosteller);
console.log(cgpa);
console.log(student);


// SECTION 1 - Q3 Swap Values
let firstName = "Arjun";
let lastName = "Reddy";

let temp = firstName;
firstName = lastName;
lastName = temp;

console.log(firstName);
console.log(lastName);


// SECTION 2 - Q1 Type Conversion
console.log("20" - "5" + 3);
console.log(4 + "6" - 2);
console.log("8" * 2 + "2");
console.log("7" + 2 * 3);


// SECTION 2 - Q2 Part A

console.log("5" + 10);
console.log("10" * "2");
console.log("20" - "5");


// SECTION 2 - Q2 Part B
let value = Number("50");
let text = String(123);
let result = Boolean("non-empty string");

console.log(value);
console.log(text);
console.log(result);


// SECTION 2 - Q3 Mix Data Types
let a = "5";
let b = 2;
let c = true;

console.log(a + b + c);
console.log(Number(a) + b + c);
console.log(a - c);
console.log(a * (b + c));