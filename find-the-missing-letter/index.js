https://www.codewars.com/kata/5839edaa6754d6fec10000a2/train/javascript

/*  Find the missing letter in an array of consecutive letters

    Parameters : array(array), array of strings or letters;

    Return : missingLetter,(array), Array of strings 

*/

// test cases: 
    print(findMissingLetter(['a','b','d'] === 'c'));
    print(findMissingLetter(['D','E','F','h']) === 'G');

function findMissingLetter(array)  {
//   IF: String 
        // compare the difference in charCode 
        // IF : difference is 1 
        // Then traverse to next element 
        // IF : difference is not equal to 1 
        // find the letter using missing charCode

}