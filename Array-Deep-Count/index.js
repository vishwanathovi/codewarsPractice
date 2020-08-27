https://www.codewars.com/kata/596f72bbe7cd7296d1000029/javascript

/* Count all the elements in an array including the nested one

    Parameters: 
        arrOfEle(Array), An array of array of elements

    Return: 
        totalElemet(Int),Total elements in an array 

*/

//test cases:
 print(deepCount([1,2,3]) === 3);
 print(deepCount([[1,2,3,[4]],[13,34,12],55,'fg']) === 12);
 print(deepCount([[]]) === 1);
 print(deepCount([])===0);


function deepCount(arrOfEle) {
    // to count all elements in an array 
    // Traverse through given array and count the element;
    // If : Array contains an array of elements, consider nested array as one element and count element inside it;
    // If : Array is empty, Then output should be 0

}