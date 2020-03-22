"use strict";

//1. Write a program to print X star pattern series using loop.
function xShape(n) {
    let x = '';
    for (let i = 0; i < 2 * n - 1; i++) {
        for (let j = 0; j < 2 * n - 1; j++) {
            if (i == j || i + j == 2 * n - 2) {
                x += '*';
            } else {
                x += ' ';
            }
        }
        x += '\n';
    }
    return x;
}

console.log(xShape(5));


/*
2.Given an array of numbers. Print frequency of each unique number.
(Frequency is the count of particular element divided by the count of all elements)
 */
function getFrequency(arr) {
    let prev;
    let obj = {};

    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== prev) {
            obj[arr[i]] = 1 / arr.length;
        } else {
            obj[arr[i]] += 1 / arr.length;
        }
        prev = arr[i];
    }

    return obj;
}

console.log(getFrequency([1, 1, 2, 2, 3]));
console.log(getFrequency([4, 4]));
console.log(getFrequency([1, 2, 3]));


//3.Given an array of strings and numbers. Print the number of integers and the number of strings in the array.

function getCountOfIntegersCountOfStrings(arr) {
    let obj = {Numbers: 0, Strings: 0};

    for (let i = 0; i < arr.length; i++) {
        let str = typeof (arr[i]);
        str = str.charAt(0).toUpperCase() + str.slice(1) + 's';
        obj[str]++;
    }
    return obj;

}

console.log(getCountOfIntegersCountOfStrings([1, 10, 'hi', 3]));
console.log(getCountOfIntegersCountOfStrings([1, 4, 'i am a string', '456']));

/*
4. Write a function that accepts a string(a sentence) as a parameter and
finds the longest word within the string. If there are several words which are the longest ones,
 print the 	last word(words can be separated by space, comma or hyphen).
 */

function findLongestWordsLength(str) {
    let words = str.split(/[ \s,-]/);
    let max = '';

    for (let i = 0; i < words.length; i++) {

        words[i] = words[i].replace(/[^a-zA-Z ]/g, "")
        if (words[i].length > max.length) {
            max = words[i];
        }
    }

    return max;
}

console.log(findLongestWordsLength('A revolution without dancing is a revolution not worth having.'));
console.log(findLongestWordsLength('Which would be worse - to live as a monster, or to die as a good man?'));


/*
5. Write a function to find longest substring in a given a string without repeating characters
except space character. If there are several, return the last one. Consider that all letters are lowercase.
*/
function longestSubstringWithoutRepeatingCharacters(str) {

    let max = '';

    for (let i = 0; i < str.length; i++) {

        let j = i;
        let current = '';

        while (current.indexOf(str[j]) == -1 || str[j] == ' ') {

            if (j == str.length) break;
            current += str[j];
            j++;

        }

        if (current.length >= max.length) {
            max = current;
        }


    }

    return max;
}


console.log(longestSubstringWithoutRepeatingCharacters('there are no two words in the english language more harmful than "good job"'));
console.log(longestSubstringWithoutRepeatingCharacters('parting your soup is not a miracle,bruce.'));


/*
 6. Write a function to compute a new string from the given one by moving the first char to
come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.
*/

function shiftRight(str) {

    let arr = str.split('');

    for (let i = 0; i < arr.length; i += 3) {
        if (arr[i + 1] && arr[i + 2]) {
            let temp1 = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = arr[i + 2];
            arr[i + 2] = temp1;
        }
    }
    return arr.join('');

}

console.log(shiftRight('shiftRight'));

/*
7. Write a function, which receives an array as an argument which elements arrays of numbers.
Find biggest negative number of each array. Return product of that numbers.
If there is not any negative number in an array, ignore that one.
Check that items of the given array are arrays.
*/

function findMaxNegative(arr) {
    let maxNegative = -Infinity;
    for (let i in arr) {

        if (arr[i] < 0 && arr[i] > maxNegative) {

            maxNegative = arr[i];
        }
    }
    return maxNegative;

}

function productOfNegatives(arr) {
    let product = 1;
    let count = 0;
    for (let i in arr) {
        if (Array.isArray(arr[i])) {

            if (findMaxNegative(arr[i]) != -Infinity) {
                product *= findMaxNegative(arr[i]);

            } else {
                count++
            }

        } else {
            return 'Invalid argument';
        }
    }

    if (count == arr.length) {
        return 'No negative';

    }

    return product;

}


console.log(productOfNegatives([[2, -9, -3, 0], [4, 5, 6], [-4, -11, 0]]));
console.log(productOfNegatives([[3, 4], [11, 0], [5, 6, 7, 8]]));
console.log(productOfNegatives([1, 2, 3]));


/*
8.  Write a JavaScript function to get all possible subsets of length 3 of the given array.
Assume that all elements in the array are unique.
*/
function makeSubSets(arr) {

    let sub = [];
    let index = 0;
    if (arr.length >= 3) {
        for (let i = 0; i <= arr.length - 3; i++)
        {
            for (let j = i + 1; j < arr.length - 1; j++)
            {
                for (let k = j + 1; k < arr.length; k++)
                {
                    sub[index] = [];
                    sub[index].push(arr[i]);
                    sub[index].push(arr[j]);
                    sub[index].push(arr[k]);
                    index++;
                }

            }

        }

    }
    else sub = arr;

    return sub;
}

console.log(makeSubSets([4]));
console.log(makeSubSets([19, 6]));
console.log(makeSubSets([5, 9, 23, 0, -2, -1]));











