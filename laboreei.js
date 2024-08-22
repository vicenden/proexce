// Assume x is the number you want to format
let x = 1234567.89;

// Create an instance of Intl.NumberFormat
const formatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
});

// Format the number
const str = formatter.format(x);

console.log(str); // Output: "1,234,567.89"
