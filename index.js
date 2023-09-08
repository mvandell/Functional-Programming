//First-class Function
//Each problem statement is one function
//Assign a function to a variable in JavaScript and use it to return another function that performs a specific operation, 
//such as multiplying two numbers or transforming a string.
//2nd is a partial application

// const umbrellaFunction = (num) => { //1st function
//     return func(a) * number;
// }

// let result = umbrellaFunction(arg);

//Higher-order Function
//function takes an array and a function as arguments
//modify each element in the input and returns a new array containing the modified elements

const arrayOfStrings = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"]
const convertToLowercase = (capitalString) => {
    return capitalString.toLowerCase();
}
const higherOrderFunc1 = (array, modifyingFunc) => {
    return array.map(modifyingFunc);
}
console.log(higherOrderFunc1(arrayOfStrings, convertToLowercase));