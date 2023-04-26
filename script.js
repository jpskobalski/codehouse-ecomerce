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
  alert("Your full price is: " + amount)
}

const alertMessage = (msg) => {
  alert(msg)
}

updateMessage();
calculateTotal();
alertMessage(message);
returnAmount(fullPrice);