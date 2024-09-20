document
  .getElementById("pay-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const selectId = document.getElementById("select-input-pay-bil").value;
    console.log(selectId);

    const payPinNumber = getInputValueById("pay-pin-number");
    const billAccountNumber = onlyInputValueById("bill-account-number");
    const payAmount = getInputValueById("pay-amount");
    const currentBalance = getTextValueById("current-bln");
    if (isNaN(payAmount) || payAmount > currentBalance || payAmount < 0) {
      window.alert("Please enter valid payed amount");
      return;
    }
    // console.log(payPinNumber, billAccountNumber, payAmount, currentBalance);
    if (
      billAccountNumber === "01888475550" &&
      payPinNumber === 333 &&
      selectId === "Agent"
    ) {
      const updateBalance = currentBalance - payAmount;
      //   console.log(updateBalance);
      document.getElementById("current-bln").innerText = updateBalance;
    } else {
      alert("Payment failed.Please try again");
    }
    document.getElementById("select-input-pay-bil").value = "";
    document.getElementById("bill-account-number").value = "";
    document.getElementById("pay-amount").value = "";
    document.getElementById("pay-pin-number").value = "";
  });
