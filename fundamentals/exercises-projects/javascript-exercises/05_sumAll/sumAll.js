const sumAll = function(first, second) {
    // Check for valid, non-negative number input
    if (typeof first != 'number' || 
    typeof second != 'number' || 
    first < 0 || 
    second < 0) {
        return 'ERROR';
    }

    let start;
    let end;
    let total = 0;

    // Determine start and end points for final loop
    if (first > second) {
        start = second;
        end = first;
    } else if (first < second) {
        start = first;
        end = second;
    } else {
        return start;
    }

    // sum all numbers between start and end inclusive
    for (let i = start; i <= end; i++) {
        total += i;
    }
    return total;
};


// Do not edit below this line
module.exports = sumAll;


// staff solutions

// const sumAll = function (min, max) {
//     if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
//     if (min < 0  || max < 0) return "ERROR";
//     if (min > max) {
//         const temp = min;
//         min = max;
//         max = temp;
//     }

//     let sum = 0;
//     for (let i = min; i <= max; i++) {
//         sum += i;
//     }
//     return sum;
// }