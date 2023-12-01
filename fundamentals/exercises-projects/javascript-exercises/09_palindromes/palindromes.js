const palindromes = function (str) {

    let newStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let n = newStr.length;
    for (let i = 0; i < n/2; i++) {
        if (newStr[i] !== newStr[n-1-i]) {
            return false;
        }
    }
    return true;
};

// Staff solution

// const palindromes = function(string) {
//     processedString = string.toLowerCase().replace(/[^a-z0-9]/g,'');
//     // breaks string into array of char, reverses, then joins back as soon string to compare
//     return processedString.split("").reverse().join("") == processedString;
// }


// Do not edit below this line
module.exports = palindromes;




