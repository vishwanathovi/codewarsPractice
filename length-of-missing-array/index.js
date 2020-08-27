https://www.codewars.com/kata/57b6f5aadb5b3d0ae3000611

/* find the the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing
    Parameters: arrayOfArrays(array), an array of arrays;
    Return: number(int), the missing number;
*/

// test cases: 
print(getLengthOfMissingArray([[ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]]) === 3);
print(getLengthOfMissingArray([ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]) === 2);
print(getLengthOfMissingArray([ null ], [ null, null, null ]) === 2);
print(getLengthOfMissingArray([]) === 0);

function getLengthOfMissingArray(arrayOfArrays) {
  // check if element is valid array 
  // IF yes 
    // take lenght of each array and push it to new array
    // sort the new array
    // use loop and take initial index as first element and stop condition as last element
    // check if there is missing number by comparing index and elements in an array
  }