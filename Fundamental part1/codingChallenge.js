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
