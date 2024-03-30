// Doing some casual examples of usage of functions.
var fruitName = "Mango";
function logFruitName() {
    var fruitName = "Mango";
    console.log(fruitName);
}
logFruitName();
// Doing some examples of function using string type.
function logName(favdesert, favcolor, favfruit, favvegetable, favdish, favcountry, favpersonality) {
    console.log(favdesert, favcolor, favfruit, favvegetable, favdish, favcountry, favpersonality);
}
logName("Gulabjamun", "Red", "pomegranate", "Capsicum", "Lentils and Rice", "Saudia Arab", "PROPHET HAZRAT MUHAMMAD P.B.U.H");
logName("Sohan Halwa", "Pink", "Grapes", "Bitter Gourd", "Chicken Biryani", "Palestine", "Hazrat UMAR FAROOQ R.A");
// Doing few examples of function with numbers (+, -, *, /).
function add(a, b) {
    var addNum = a + b;
    return addNum;
}
var value = add(8, 5);
console.log(value);
function subtract(c, d) {
    var subtractNum = c - d;
    return subtractNum;
}
var value1 = subtract(12, 5);
console.log(value1);
function multiply(e, f) {
    var multiplyNum = e * f;
    return multiplyNum;
}
var value2 = multiply(8, 9);
console.log(value2);
function divide(g, h) {
    var divideNum = g / h;
    return divideNum;
}
var value3 = divide(30, 6);
console.log(value3);
