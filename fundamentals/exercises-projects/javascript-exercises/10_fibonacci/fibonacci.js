const fibonacci = function(place) {
    let fibSeq = [1, 1, 2];
    if (+place < 1) {
        return "OOPS"
    }
    if (+place <= 3) {
        return fibSeq[+place - 1];
    }
    for (let i = 3; i < +place; i++) {
        a = fibSeq[fibSeq.length-2];
        b = fibSeq[fibSeq.length-1];
        c = a + b;
        fibSeq.push(c);
    }
    return fibSeq[fibSeq.length - 1];
}



// Staff Solution

// const fibonacci = function(count) {
//     if (count < 0) return "OOPS"
//     if (count === 0) return 0;

//     let secondPrev = 1;
//     let firstPrev = 0;

//     for (let i = 2; i <= count; i++) {
//         let current = firstPrev + secondPrev;
//         secondPrev = firstPrev;
//         firstPrev = current;
//     }
//     return firstPrev;
// }

// Do not edit below this line
module.exports = fibonacci;

