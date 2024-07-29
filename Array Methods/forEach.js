// froEach method
// the forEach() array method loops through any array ,executing a provided function once for each array element
// in ascending order
// mtlb ki forEach array method jo hai na wo ek ek array element extract kr k uspe function laga k kam krta hai
// jaise ki 10 array element hai to ek ek array elemnt ki usme se nikal k uspe task krega

// this method accepts upto 3 arguments though all of them are not required
const staffsDetails = [
  { name: "Pradeep Sahoo", age: 25, salary: 1200, currency: "USD" },
  { name: "Gautam Sahani", age: 25, salary: 3200, currency: "EURO" },
  { name: "Rintu Reji", age: 27, salary: 4500, currency: "RIYAL   " },
  { name: "Shankar Sahani", age: 30, salary: 12000, currency: "RINGET" },
];

// add the word i am in front of name
staffsDetails.forEach((staffsDetail) => {
  let fullDesc = `I am ${staffsDetail.name} a staff from Shamira Infotech`;
  console.log(fullDesc);
});
