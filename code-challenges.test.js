// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// input: number
// output: array of fibonacci sequence with length matching number

describe("fibonacci", () => {
  it("returns an array of fibonacci sequence with length matching number", () => {
    const fibLength1 = 6
    expect(fibonacci(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
    const fibLength2 = 10
    expect(fibonacci(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// ReferenceError: fibonacci is not defined

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
// Create a function that accepts a number as parameter
// Assign an array of [1, 1] to a variable
// Assign 0 to a sum variable
// Use a while loop with a condition of while array length is less than number
  // Update sum by adding the last number of array and second to last number of array
  // Push sum to array
// Return array

const fibonacci = (num) => {
  let arr = [1, 1]
  let sum = 0;
  while (arr.length < num){
    sum = arr[arr.length - 2] + arr[arr.length - 1]
    arr.push(sum)
  }
  return arr; 
}

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

// input: object
// output: array sorted from least to greatest

describe("sortedArray", () => {
  it("returns an array of values sorted from least to greatest", () => {
    const studyMinutesWeek1 = {
      sunday: 90,
      monday: 30,
      tuesday: 20,
      wednesday: 15,
      thursday: 30,
      friday: 15,
      saturday: 60
    }
    expect(sortedArray(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    const studyMinutesWeek2 = {
      sunday: 100,
      monday: 10,
      tuesday: 45,
      wednesday: 60,
      thursday: 20,
      friday: 15,
      saturday: 65
    }
    expect(sortedArray(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  }) 
})

// ReferenceError: sortedArray is not defined

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

// Pseudo code:

// Create a function that accepts an object as parameter
// Assign an empty array to a variable
// Loop through the object
  // Push in key-values into empty array
// Return array sorted from least to greatest using .sort() method

const sortedArray = (obj) => {
  let arr = [];
  for (let key in obj){
    arr.push(obj[key])
  }
  return arr.sort((a, b) => a - b)
}

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// input: array
// output: new array with accumulated sum

describe("sumArray", () => {
  it("returns an array of accumulating sum", () => {
    const accountTransactions1 = [100, -17, -23, -9]
    expect(sumArray(accountTransactions1)).toEqual([100, 83, 60, 51])
    const accountTransactions2 = [250, -89, 100, -96]
    expect(sumArray(accountTransactions2)).toEqual([250, 161, 261, 165])
    const accountTransactions3 = []
    expect(sumArray(accountTransactions3)).toEqual([])
  })
})

// ReferenceError: sumArray is not defined

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// b) Create the function that makes the test pass.

// Pseudo code:

// Create a function that accepts an array as parameter
// Assign an empty array to a variable
// Assign 0 to a sum variable
// Loop through the array 
  // Update sum by adding value after each iteration
  // Push sum into new array
// Return new array

const sumArray = (arr) => {
  let newArr = []
  let sum = 0;
  for (let i = 0; i < arr.length; i++){
    sum += arr[i]
    newArr.push(sum)
  }
  return newArr
}

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total