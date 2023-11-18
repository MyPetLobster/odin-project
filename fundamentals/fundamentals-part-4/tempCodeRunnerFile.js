let n = 10;

for (let i = 3; i <= n; i++) {
    for (let j = 2; j <= (n/2); j++) {
        if (i % j === 0) {
            break;
        } 
        if (j == n/2) {
            console.log(i);
        } 
    }
}