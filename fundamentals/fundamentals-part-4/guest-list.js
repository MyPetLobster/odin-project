const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// My Code CURRENT VERSION

const banned = ["Phil", "Lola"]
const admittedNames = [];
const refusedNames = [];

for (person of people) {
    if (banned.includes(person)) {
        refusedNames.push(person);
    } else {
        admittedNames.push(person);
    }
}

admitted.textContent = `${admittedNames.join(', ')}.`
refused.textContent = `${refusedNames.join(', ')}.`;



// My Code OLD VERSION
// const peopleLength = people.length;
// const banned = ["Phil", "Lola"];

// // Loop through all people and add each to appropriate list
// for (person of people) {
//     if (banned.includes(people[i])) {
//         refused.textContent += `${people[i]}, `;
//     } else {
//         admitted.textContent += `${people[i]}, `;
//     }
// }

// // Replace formatting of final elements in list.

// // split "admitted" string twice to remove words "Admit" and "Refuse"
// // then turn string into an array by splitting at "," and pop off trailing 
// // empty string
// let admittedNames = admitted.textContent.split(":")[1].split(",");
// let refusedNames = refused.textContent.split(":")[1].split(",");
// admittedNames.pop();
// refusedNames.pop();

// // get final name in each list
// let finalAdmitted = admittedNames[admittedNames.length - 1];
// let finalRefused = refusedNames[refusedNames.length - 1];

// // reformat final name with "." and assign to textContent
// admittedNames[admittedNames.length - 1] = `${finalAdmitted}.`;
// refusedNames[refusedNames.length - 1] = `${finalRefused}.`;
// admitted.textContent = `Admit: ${admittedNames.toString()}`;
// refused.textContent = `Refuse: ${refusedNames.toString()}`;




// Pseudocode

// INIT var for length of list
// INIT Array of banned people


// loop starts here
// INIT initializer variable i;
// BEGIN WHILE loop 
//   IF current element is in banned list
//     THEN add element to refused list (followed by ", ")
//   IF current element is NOT in banned list
//     THEN add element to admitted list (followed by ", ")





