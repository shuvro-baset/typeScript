/*
    Problem-1.  
    Convert the following JavaScript array into a TypeScript tuple
    const userInfo = [101, "Ema", "John", true,  , "2023"];
*/

// solution-1
const userInfoTuple: [number, string, string, boolean, undefined, string] = [
  101,
  "Ema",
  "John",
  true,
  ,
  "2023",
];
console.log("Here is a ", typeof userInfoTuple, userInfoTuple);


/*
    problem-2.  
    Write a TypeScript function that takes in two arrays of numbers as parameters. The function should compare the elements in both arrays and return a new array that contains only the elements that are present in both arrays. 
    For example, if the first array is [1, 2, 3, 4, 5] and the second array is [2, 4, 6, 8], the function should return a new array with the elements 2 and 4 because they are present in both arrays. 
    The function should handle arrays of any length and should return the resulting array in the same order as they appear in the first array.
*/

// solution-2
// const firstArray = [1, 2, 3, 4, 5];
// const secondArray = [2, 4, 6, 8];