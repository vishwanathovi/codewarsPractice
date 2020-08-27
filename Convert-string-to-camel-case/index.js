https://www.codewars.com/kata/517abf86da9663f1d2000003

/* convert the dash/underscore into camelCase words;

    Parameters: 
        str(string), string with dash or underscore
    Return:
        camelCase(string), camel Casing of string

*/

// test cases 
    print(toCamelCase('A-B_C') === 'ABC');
    print(toCamelCase('the-band-Boys') === 'theBandBoys');
    print(toCamelCase('The_Band_Boys') === 'TheBandBoys');
    print(toCamelCase('a-b-c') === 'aBc');

function toCamelCase(str){
    // conver the words to array of individual words 
    // check for special character and remove it;
    // IF :first word after first special character is small case convert it to Camel case;
    // return the result 
}