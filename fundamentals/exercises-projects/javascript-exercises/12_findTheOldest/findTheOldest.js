const findTheOldest = function(people) {
    let oldest = 0;
    let age = 0;
    let oldestAge = 0;
    for (let i = 0; i < people.length; i++) {
        if (!people[i].yearOfDeath) {
            yearOfDeath = new Date().getFullYear();
        } else {
            yearOfDeath = people[i].yearOfDeath;
        }
        age = yearOfDeath - people[i].yearOfBirth;
        if (age > oldestAge) {
            oldestAge = age;
            oldest = people[i];
        }
    }
    return oldest;
};


// Do not edit below this line
module.exports = findTheOldest;
