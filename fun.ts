// Doing some casual examples of usage of functions.

let fruitName = "Mango"
function logFruitName () {
    let fruitName = "Mango"
    console.log(fruitName);
}
logFruitName()


// Doing some examples of function using string type.
function logName(favdesert: string, favcolor: string, favfruit: string, favvegetable: string, favdish: string, favcountry: string, favpersonality: string) {
    console.log(favdesert, favcolor, favfruit, favvegetable, favdish, favcountry, favpersonality );
}
logName("Gulabjamun", "Red", "pomegranate", "Capsicum", "Lentils and Rice", "Saudia Arab", "PROPHET HAZRAT MUHAMMAD P.B.U.H" )
logName("Sohan Halwa", "Pink", "Grapes", "Bitter Gourd", "Chicken Biryani", "Palestine", "Hazrat UMAR FAROOQ R.A" )


// Doing few examples of function with numbers (+, -, *, /).

function add(a : number , b : number) {
    let addNum = a + b ;
    return addNum;
}
let value = add(8 , 5);
console.log(value);

function subtract(c : number , d : number) {
    let subtractNum = c - d ;
    return subtractNum;
}
let value1 = subtract(12 , 5);
console.log(value1);

function multiply(e : number , f : number) {
    let multiplyNum = e * f ;
    return multiplyNum;
}
let value2 = multiply(8 , 9);
console.log(value2);

function divide(g : number , h : number) {
    let divideNum = g / h ;
    return divideNum;
}
let value3 = divide(30 , 6);
console.log(value3);



















