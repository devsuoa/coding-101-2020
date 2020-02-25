// ------- Using a for-loop ---------------
for (let i = 1; i <= 100; i = i + 1) {
    // The order of conditionals is important!
    // We need to check if the number is a multiple of both 3 and 5 FIRST, otherwise
    // it would only print "Fizz" or "Buzz", but not "FizzBuzz"
    // Try changing the order to see for yourself
    if ((i % 3 === 0) && (i % 5 === 0)) {
        // Multiple of 3 and 5
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        // Multiple of 3
        console.log("Fizz")
    } else if (i % 5 === 0) {
        // Multiple of 5
        console.log("Buzz")
    } else {
        // Multiple of neither 3 nor 5
        console.log(i)
    }
}

// ------- Using a while-loop ---------------
let i = 1
while (i <= 100) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
        // Multiple of 3 and 5
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        // Multiple of 3
        console.log("Fizz")
    } else if (i % 5 === 0) {
        // Multiple of 5
        console.log("Buzz")
    } else {
        // Multiple of neither 3 nor 5
        console.log(i)
    }

    i = i + 1   // If we don't do this, we'll have an infinite loop!
}
