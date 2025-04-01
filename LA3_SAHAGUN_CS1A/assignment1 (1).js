// let the user to input their score
const score = parseFloat(prompt("Enter your score:"));

// Use the operator to see the assign grades
const equivalentGrade =
  score >= 97 ? "1.00 Excellent" :
  score >= 94 ? "1.25 Excellent" :
  score >= 91 ? "1.50 Above Average" :
  score >= 88 ? "1.75 Above Average" :
  score >= 85 ? "2.00 Average" :
  score >= 82 ? "2.25 Average" :
  score >= 79 ? "2.50 Below Average" :
  score >= 76 ? "2.75 Below Average" :
  score == 75 ? "3.00 Below Average" :
  score >= 72 ? "4.00 Poor" :
  "5.00 Poor";

// Use if-else to mark if she pass the  finals
let finalRemarks;
if (score >= 90) {
  finalRemarks = "HIGH PASS, Candidate for Cum Laude";
} else if (score >= 80) {
  finalRemarks = "AVERAGE PASS";
} else if (score >= 75) {
  finalRemarks = "LOW PASS";
} else {
  finalRemarks = "FAILED, Needs Improvement";
}

// console to see the results
console.log(`Your equivalent Grade is "${equivalentGrade}"`);
console.log(`Final Remarks: ${finalRemarks}`);