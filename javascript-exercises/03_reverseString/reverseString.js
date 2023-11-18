const reverseString = function(string) {

    return string.split('').reverse().join('');
    
    // let stringArray = string.split('');
    // let reversedArray = [];

    // n = stringArray.length;

    // for (i = 0; i < n; i++) {
    //     reversedArray.push(stringArray.pop());
    // }
    // return reversedArray.join('');
};

console.log(reverseString("abcdefg"));

// Do not edit below this line
module.exports = reverseString;
