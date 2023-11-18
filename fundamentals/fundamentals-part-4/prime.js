let n = 50;

if (n < 2) {
    console.log("No prime numbers in the specified range.");
} else {
    console.log(2);
    
    for (let i = 3; i <= n; i++) {
        let isPrime = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(i);
        }
    }
}



// let n = prompt("Enter a number: ");

// console.log(2);

// for (let i = 3; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             break;
//         } 
//         if (j === i-1) {
//             console.log(i);
//         } 
//     }
// }
