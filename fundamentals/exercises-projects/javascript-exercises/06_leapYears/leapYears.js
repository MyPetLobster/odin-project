const leapYears = function(year) {

    year = Number(year);
    if (typeof year !== 'number') return 'ERROR';

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } 
    return false;
};

console.log(leapYears(2001));

// Do not edit below this line
module.exports = leapYears;


// staff solution

// const leapYears = function (year) {
//     return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
// };