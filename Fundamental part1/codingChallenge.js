// BMI is calculate using BMI = kg/m square with if else statement and template string
const ismailWeight = 70;
const ismailHeight = 1.68 * 2;
const bodyMassIndexIsmail = ismailWeight / ismailHeight;
console.log(bodyMassIndexIsmail);

const adekunleWeight = 95;
const adekunleHeight = 1.75 * 2;
const bodyMassIndexAdekunle = adekunleWeight / adekunleHeight;
console.log(bodyMassIndexAdekunle);
console.log("_________________________");
if (bodyMassIndexIsmail > bodyMassIndexAdekunle) {
  console.log(`Ismail BMI ${bodyMassIndexIsmail} is higher than Adekunle`);
} else {
  console.log(`Adekunle BMI ${bodyMassIndexAdekunle} is higher than ismail`);
}

console.log("_________________________");
console.log("coeasion");
console.log("_________________________");
const value1 = "5";
const value2 = 9;
let sum = Number(value1) + value2;

console.log(sum);

const money = 12;

if (
  money === 0 ||
  money === null ||
  money === NaN ||
  money == "" ||
  money == undefined
) {
  console.log(
    `this value ${money} is a falsy value please provide a truthy value `
  );
} else {
  console.log(`This is a truthy value ${money}`);
}

const dolphinScore = 96 + 108 + 89;
const kalasScore = 91 + 110 + 88;

const dolphinAverageScore = dolphinScore / 3;
const kalasAverageScore = kalasScore / 3;
// 91 + 110 + 88;

if (dolphinAverageScore > kalasAverageScore) {
  console.log(`Dolphin average score ${dolphinAverageScore} is a winner`);
} else if (kalasAverageScore > dolphinAverageScore) {
  console.log(`kalas average score ${kalasAverageScore} is a winner`);
} else {
  console.log("both play draw no winner");
}
