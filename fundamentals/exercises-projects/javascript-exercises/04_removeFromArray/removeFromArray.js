const removeFromArray = function(array, ) {
    
    let index = 0;

    const n = arguments.length;
 
    for (let i = 1; i < n; i++) {
        let target = arguments[i];
        index = array.indexOf(target);
        while (index >= 0) {
            array.splice(index, 1);
            index = array.indexOf(target);
        }
    }
    return array;

};

console.log(removeFromArray([1, 2, 3, 4, 4, 5, 6, 7, 8], 1, 2, 3, 4));

// Do not edit below this line
module.exports = removeFromArray;




// staff solution practice
// solution 1

// const removeFromArray = function (array, ...args) {
//     const newArray = [];
//     array.forEach((item) => {
//         if (!args.includes(item)) {
//             newArray.push(item);
//         }
//     });
// }  



// solution 2 - simpler but more advanced

// var removeFromArray = function(array, ...args) {
//     return array.filter(val => !args.includes(val))
// }
