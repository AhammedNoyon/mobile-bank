document
  .getElementById("main-add-money-btn")
  .addEventListener("click", function () {
    unhideTheInputFrom("add-money-container");
  });
document
  .getElementById("main-cash-out-btn")
  .addEventListener("click", function () {
    unhideTheInputFrom("cash-out-container");
  });
document
  .getElementById("main-transfer-btn")
  .addEventListener("click", function () {
    // console.log("transfer btn");
    unhideTheInputFrom("transfer-money-container");
  });
document
  .getElementById("main-bonus-btn")
  .addEventListener("click", function () {
    // console.log("bonus button clicked");
    unhideTheInputFrom("get-bonus-container");
  });
document
  .getElementById("main-pay-bill-btn")
  .addEventListener("click", function () {
    // console.log("pay bill button is clicked");
    unhideTheInputFrom("bill-payment-container");
  });
document
  .getElementById("main-transaction-btn")
  .addEventListener("click", function () {
    // console.log("transaction button is clicked");
    unhideTheInputFrom("transactions-container");
  });
