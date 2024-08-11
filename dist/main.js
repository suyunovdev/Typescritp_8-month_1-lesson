"use strict";
const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const addBtn = document.getElementById("Add");
const SubBtn = document.getElementById("Sub");
const multBtn = document.getElementById("Mult");
const divBtn = document.getElementById("Divide");
const printResult = document.getElementById("result");
function addNumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a + b;
    printResult.textContent = result.toString();
}
addBtn.addEventListener("click", addNumbers);
function SubtractNumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a - b;
    printResult.textContent = result.toString();
}
SubBtn.addEventListener("click", SubtractNumbers);
function multiplyNumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a * b;
    printResult.textContent = result.toString();
}
multBtn.addEventListener("click", multiplyNumbers);
function divideNumbers() {
    let a = parseFloat(number1.value);
    let b = parseFloat(number2.value);
    let result = a / b;
    printResult.textContent = result.toString();
}
divBtn.addEventListener("click", divideNumbers);
console.log(divideNumbers);
function calculateSquareArea(side) {
    if (side <= 0)
        throw new Error("Side length must be positive");
    return side * side;
}
function calculateRectangleArea(width, height) {
    if (width <= 0 || height <= 0)
        throw new Error("Width and height must be positive");
    return width * height;
}
function calculateCircleArea(radius) {
    if (radius <= 0)
        throw new Error("Radius must be positive");
    return Math.PI * radius * radius;
}
try {
    console.log("Square Area: ", calculateSquareArea(5));
    console.log("Rectangle Area: ", calculateRectangleArea(4, 6));
    console.log("Circle Area: ", calculateCircleArea(3));
}
catch (error) {
    console.error(error);
}
