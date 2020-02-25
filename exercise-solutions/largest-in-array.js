let arrayOfNumbers = [9, 9, 10]

// Firstly check if 1st number (arrayofNumbers[0]) is largest, then check if 2nd number is largest
if ((arrayOfNumbers[0] >= arrayOfNumbers[1]) && (arrayOfNumbers[0] >= arrayOfNumbers[2])) {
    console.log(arrayOfNumbers[0])
} else if ((arrayOfNumbers[1] >= arrayOfNumbers[0]) && (arrayOfNumbers[1] >= arrayOfNumbers[2])) {
    console.log(arrayOfNumbers[1])
} else {
    // If neither first or second is largest, we can assume that the 3rd number is the largest
    console.log(arrayOfNumbers[2])
}
