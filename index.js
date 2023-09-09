//First-class Function
//Each problem statement is one function
//Assign a function to a variable in JavaScript and use it to return another function that performs a specific operation

//Assign a function to a variable and use it to convert a string to uppercase
const testString = "Welcome";
const upperCaseFunction = () => {
    return (str) => {
         return str.toUpperCase();
    };
};
const functionExecute = upperCaseFunction();
console.log(functionExecute(testString));

//Create a function that takes a number as input and returns another function that multiplies its input with the original number
//partial application
const multiplyNumbers = (num1) => {
    return (num2) => {
        return num1 * num2;
    };
};
const takeNum = multiplyNumbers(3);
const multipliedNums = takeNum(7);
console.log(multipliedNums);

//Create a function that takes two numbers as input and returns an object
const numbersToObject = (num1) => {
    num1 += 2;
    return (num2) => {
        num2 += 4;
        return {"1":num1, "2":num2};
    };
};
const firstNum = numbersToObject(5);
console.log(firstNum(5));
console.log("----------------------------------------------------------------------")
//Higher-order Function
//function takes an array and a function as arguments
//modify each element in the input and returns a new array containing the modified elements

//Converts all string elements to lowercase
const arrayOfStrings = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"]
const convertToLowercase = (capitalString) => {
    return capitalString.toLowerCase();
};
const higherOrderFunc1 = (array, modifyingFunc) => {
    return array.map(modifyingFunc);
};
console.log(higherOrderFunc1(arrayOfStrings, convertToLowercase));

//Print a string that has a length of more than 11 characters
const firstPassing = (array) => {
    for (i=0; i<array.length; i++){
        if (array[i].length > 11){
            return array[i];
        };
    };
};
const higherOrderFunc2 = (array, modifyingFunc) => {
    return modifyingFunc(array);
};
console.log(higherOrderFunc2(arrayOfStrings, firstPassing));
//Create a function using a callback that takes a string as input and returns the string in reverse order
const reverseString = (str) => {
    const strArray = str.split("");
    strArray.reverse();
    return strArray.toString().replaceAll(",", "");
};
const higherOrderFunc3 = (array, modifyingFunc) => {
    return array.map(modifyingFunc);
};
console.log(higherOrderFunc3(arrayOfStrings, reverseString));

//Create two functions. One function generates runners with specific speeds, 
//the other simulates a race between two runners over a specified distance. 
//Return the winner's name or 'It's a tie!' if both runners finish simultaneously
const player = (speed, runnerName) => {
    return {"runner":runnerName, "speed":speed};
};
const race = (runner1, runner2, distance) => {
    const time1 = distance / runner1.speed;
    const time2 = distance / runner2.speed;
    let result;
    if (time1 < time2) {
        result = runner1.runner;
    }
    else if (time2 < time1) {
        result = runner2.runner;
    }
    else {
        result = "It's a tie!"
    };
    return result;
};
console.log(race(player(5, "Alex"), player(10, "Andrew"), 50));