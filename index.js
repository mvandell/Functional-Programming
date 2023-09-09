//First-class Function
//Each problem statement is one function
//Assign a function to a variable in JavaScript and use it to return another function that performs a specific operation

//Assign a function to a variable and use it to convert a string to uppercase
const testString = "Welcome";
const upperCaseFunction = () => {
    return (str) => {
         return str.toUpperCase();
    }
}
const functionExecute = upperCaseFunction();
console.log(functionExecute(testString));

//Create a function that takes a number as input and returns another function that multiplies its input with the original number
//partial application
const multiplyNumbers = (num1) => {
    return (num2) => {
        return num1 * num2;
    }
}
const takeNum = multiplyNumbers(3);
const multipliedNums = takeNum(7);
console.log(multipliedNums);

//Higher-order Function
//function takes an array and a function as arguments
//modify each element in the input and returns a new array containing the modified elements

//Converts all string elements to lowercase
const arrayOfStrings = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"]
const convertToLowercase = (capitalString) => {
    return capitalString.toLowerCase();
}
const higherOrderFunc1 = (array, modifyingFunc) => {
    return array.map(modifyingFunc);
}
console.log(higherOrderFunc1(arrayOfStrings, convertToLowercase));