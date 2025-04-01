//let the user to enter a number
const maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"), 10);

for (let i = 0; i <= maxLimit; i++) {
  for (let j = 0; j <= maxLimit; j++) {
    let addedValue = i + j;
    console.log(`[${i}] [${j}] Added value is ${addedValue}`);
  }
}