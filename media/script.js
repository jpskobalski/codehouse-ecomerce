let message = "";
let fullPrice = "";

const logMessage = (msg) => {
  console.log(msg);
};

const updateMessage = () => {
  message = prompt("Enter a message:");
  logMessage(`Message updated to: ${message}`);
};

const calculateTotal = () => {
  const price = parseFloat(prompt("Enter a price:"));
  const taxRate = 0.21;
  const taxAmount = price * taxRate;
  const total = price + taxAmount;
  fullPrice = total;
  logMessage(`Total price is: $${total.toFixed(2)}`);
};

const returnAmount = (amount) => {
  alert("Your full price is: " + amount + ", This includes sales tax (21%)")
}

const alertMessage = (msg) => {
  alert(msg)
}

let continueLoop = "yes";

while (continueLoop.toLowerCase() === "yes") {
  updateMessage();
  calculateTotal();
  alertMessage(message);
  returnAmount(fullPrice);
  continueLoop = prompt("Do you want to continue? (yes/no):");
}

alert("Thank you for using our program!");