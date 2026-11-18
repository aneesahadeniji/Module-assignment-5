//** Classroom Activities **//

// Activity 1: Calculator
function calculator(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b === 0 ? "Cannot divide by zero" : a / b;
    default:
      return "Invalid operator";
  }
}
console.log("Activity 1");
console.log("10 + 5 =", calculator(10, 5, "+"));
console.log("10 - 5 =", calculator(10, 5, "-"));
console.log("10 * 5 =", calculator(10, 5, "*"));
console.log("10 / 5 =", calculator(10, 5, "/"));

// Activity 2: Ten random numbers between 1 and 100
const randomNumbers = [];
for (let i = 0; i < 10; i++) {
  randomNumbers.push(Math.floor(Math.random() * 100) + 1);
}
console.log("\nActivity 2");
console.log(randomNumbers);

// Activity 3: Today's date in three formats
const today = new Date();
const day = String(today.getDate()).padStart(2, "0");
const month = String(today.getMonth() + 1).padStart(2, "0");
const year = today.getFullYear();
console.log("\nActivity 3");
console.log(`${day}/${month}/${year}`);
console.log(today.toDateString());
console.log(
  today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }),
);

// Activity 4: Age calculator
function calculateAge(birthDate) {
  const dob = new Date(birthDate);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const monthDiff = now.getMonth() - dob.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}
console.log("\nActivity 4");
console.log("Age:", calculateAge("2000-05-15"));

// Activity 5: Receipt
function printReceipt(totalAmount) {
  const now = new Date();
  const vatRate = 0.075; // 7.5%, change if your course uses another rate
  const vat = totalAmount * vatRate;
  const grandTotal = totalAmount + vat;
  console.log("\nActivity 5");
  console.log("------ RECEIPT ------");
  console.log("Date:", now.toLocaleDateString());
  console.log("Time:", now.toLocaleTimeString());
  console.log("Total Amount:", totalAmount.toFixed(2));
  console.log("VAT (7.5%):", vat.toFixed(2));
  console.log("Grand Total:", grandTotal.toFixed(2));
  console.log("---------------------");
}

//** Mini Project — Marusoft School Fee & Receipt Generator **//

// ===== STORE =====
const studentName = "Aneesah Adeniji";
const course = "Software Engineering (JavaScript)";
const schoolFee = 150000;
const registrationFee = 10000;
const discount = 15000;
const vatPercentage = 7.5;
const paymentDeadline = new Date("2026-12-15");

// ===== CALCULATE =====
const totalFee = schoolFee + registrationFee - discount;
const vatAmount = (vatPercentage / 100) * totalFee;
const grandTotal = totalFee + vatAmount;

// ===== FORMAT HELPERS =====
const formatNaira = (amount) =>
  amount.toLocaleString("en-NG", { style: "currency", currency: "NGN" });

const now = new Date();

const receiptDate = now.toLocaleDateString("en-NG", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const receiptTime = now.toLocaleTimeString("en-NG");

// ===== CHALLENGE EXTENSION =====
// Unique 6-digit receipt number using Math.random()
const receiptNumber = Math.floor(100000 + Math.random() * 900000);

// Days remaining before the payment deadline
const msPerDay = 1000 * 60 * 60 * 24;
const daysRemaining = Math.ceil((paymentDeadline - now) / msPerDay);

const deadlineText = paymentDeadline.toLocaleDateString("en-NG", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// ===== GENERATE RECEIPT =====
console.log("          PAYMENT RECEIPT            ");
console.log(`Receipt No     : ${receiptNumber}`);
console.log(`Student Name   : ${studentName}`);
console.log(`Course         : ${course}`);
console.log(`Receipt Date   : ${receiptDate}`);
console.log(`Receipt Time   : ${receiptTime}`);
console.log(`School Fee     : ${formatNaira(schoolFee)}`);
console.log(`Registration   : ${formatNaira(registrationFee)}`);
console.log(`Discount       : -${formatNaira(discount)}`);
console.log(`Total Fee      : ${formatNaira(totalFee)}`);
console.log(`VAT (${vatPercentage}%)    : ${formatNaira(vatAmount)}`);
console.log(`Amount Due     : ${formatNaira(grandTotal)}`);
console.log(`Grand Total    : ${formatNaira(grandTotal)}`);
console.log(`Payment Deadline : ${deadlineText}`);
if (daysRemaining > 0) {
  console.log(`Days Remaining   : ${daysRemaining} day(s)`);
} else {
  console.log("Days Remaining   : Deadline has passed");
}

//** Assignment **//

// 1. Integers vs floating-point numbers
{
  (" Integer is a whole number with no decimal part (e.g. 5, -20, 1000).while Floating-point is a number with a decimal part (e.g. 3.14, -0.5, 99.99).");
}

console.log("--- Q1 ---");
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(10.5)); // false
console.log(typeof 10, typeof 10.5); // number number

// 2. Why 0.1 + 0.2 !== 0.3
{
  (" JavaScript stores numbers in binary (IEEE 754). Some decimals, like 0.1 and 0.2, cannot be represented exactly in binary (just like 1/3 cannot be written exactly in decimal). Tiny rounding errors appear when adding them.");
}
console.log("--- Q2 ---");
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false
// Fixes:
console.log((0.1 + 0.2).toFixed(2)); // "0.30"
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON); // true

// 3. Random number between 50 and 100 (inclusive)
console.log("--- Q3 ---");
const min = 50;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random number:", randomNumber);

// 4. Format ₦1,250,000 using Intl.NumberFormat
console.log("--- Q4 ---");
const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
});
console.log(naira.format(1250000)); // ₦1,250,000

// 5. Calculate a student's age from their birth year
console.log("--- Q5 ---");
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}
const birthYear = 2005;
console.log(
  `A student born in ${birthYear} is ${calculateAge(birthYear)} years old.`,
);

// 6. Today's date in Nigerian and US formats
console.log("--- Q6 ---");
const TODAY = new Date();
const nigerianDate = today.toLocaleDateString("en-NG", {
  day: "2-digit",
  month: "2-digit",
  year: "numeric",
}); // DD/MM/YYYY
const usDate = today.toLocaleDateString("en-US", {
  month: "2-digit",
  day: "2-digit",
  year: "numeric",
}); // MM/DD/YYYY
console.log("Nigerian format:", nigerianDate);
console.log("US format:", usDate);

// 7. School fee calculator with formatted receipt
console.log("--- Q7 ---");
function generateReceipt(studentName, fees) {
  const now = new Date();
  const date = now.toLocaleDateString("en-NG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const time = now.toLocaleTimeString("en-NG", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const money = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  });
  let total = 0;
  let receipt = "";
  receipt += "         SCHOOL FEE RECEIPT       \n";
  receipt += `Student: ${studentName}\n`;
  receipt += `Date:    ${date}\n`;
  receipt += `Time:    ${time}\n`;
  for (const [item, amount] of Object.entries(fees)) {
    receipt += `${item.padEnd(16)} ${money.format(amount).padStart(14)}\n`;
    total += amount;
  }
  receipt += `${"TOTAL".padEnd(16)} ${money.format(total).padStart(14)}\n`;
  receipt += "      Thank you for your payment!  \n";
  return receipt;
}
const fees = {
  Tuition: 150000,
  Textbooks: 35000,
  Uniform: 20000,
  "Sports levy": 5000,
};
console.log(generateReceipt("Aneesah Adeniji", fees));
