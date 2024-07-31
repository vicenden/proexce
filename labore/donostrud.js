let curr = [1, 2, 3, 4, 5];
let i = 2; // Index of the element to copy
let j = 4; // Index where the value will be copied

// Before the assignment
console.log("Before:", curr); // Output: [1, 2, 3, 4, 5]

// Copy the value at index `i` (3rd element, value 3) to index `j`
curr[j] = curr[i];

// After the assignment
console.log("After:", curr); // Output: [1, 2, 3, 4, 3]
