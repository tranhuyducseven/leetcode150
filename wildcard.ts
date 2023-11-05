// Have the function wildcard(str) read str which will contain two strings separated by a space. The first string will consist of the following sets
// of characters: +, *, $, and {N} which is optional. The plus (+) character represents a single alphabetic character, the ($) character represents
// a number between 1-9, and the asterisk (*) represents a sequence of the same character of length 3 unless it is followed by {N} which represents
// how many characters should appear in the sequence where N will be at least 1. Your goal is to determine if the second string exactly matches
// the pattern of the first string in the input.
// For example: if str is "++*{5} jtggggg" then the second string in this case does match the pattern, so your program should return the string true.
// If the second string does not match the pattern your program should return the string false.
// Examples
// Input: "+++++* abcdehhhhhh"
// Output: false
// Input: "$**+*{2} 9mmmrrrkbb"
// Output: true
// Solution
function wildcard(str){
    const [pattern, test] = str.split(' ');
    const patternArr = pattern.split('');
    const testArr = test.split('');
    let i = 0;
    let j = 0;
    while(i < patternArr.length && j < testArr.length){
        if(patternArr[i] === '+'){
            if(!testArr[j].match(/[a-z]/i)) return false;
            i++;
            j++;
        }else if(patternArr[i] === '$'){
            if(!testArr[j].match(/[1-9]/)) return false;
            i++;
            j++;
        }else if(patternArr[i] === '*'){
            if(patternArr[i + 1] === '{'){
                const num = parseInt(patternArr[i + 2]);
                if(testArr[j] !== testArr[j + num - 1]) return false;
                i += 4;
                j += num;
            }else{
                if(testArr[j] !== testArr[j + 2]) return false;
                i++;
                j += 3;
            }
        }else{
            if(patternArr[i] !== testArr[j]) return false;
            i++;
            j++;
        }
    }
    return i === patternArr.length && j === testArr.length;
}