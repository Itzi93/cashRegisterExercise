// Write your JavaScript here!
//Variables needed
var cashRegisterAmount = 100;
var customerAmount = 150;
var safeAmount = 50;

//Statements
//If we have enough money in the cash register, use a console.log statement to print out: "Have a nice day." like so: console.log(“Have a nice day.”)
  //If we don't have enough money in the cash register, but have enough in the cash register and safe combined, print out: "Please wait while I go to the safe."
	 //If we don't have enough money in the cash register and the safe combined, print out: "Please wait while I go to the bank."

if (cashRegisterAmount >= customerAmount) {
  console.log("Have a nice day!");
}else if (customerAmount <= cashRegisterAmount + safeAmount) {
  console.log("Plase wait while I go to the safe");
}else {
  console.log("Plase wait while I go to the bank");
}
