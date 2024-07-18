// Closures

function makeAdding(firstNum) {
    const first = firstNum;
    return function resulting (secondNum) {
        const second = secondNum;
        return first + second;
    }
}

const addFive = makeAdding(5);
console.log(addFive(10)); // 15

// 
let score = function() {
    let points = 0; // points is a private variable
    return function() {
        points++;
        return points;
    }
}