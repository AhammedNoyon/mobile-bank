document
  .getElementById("transfer-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const transferPin = getInputValueById("transfer-pin");
    const userAccountNumber = getInputValueById("user-acc-number");
    const transferAmount = getInputValueById("Transfer-amount");
    const currentBalance = getTextValueById("current-bln");
    // console.log(transferPin, userAccountNumber, transferAmount, currentBalance);
    if (userAccountNumber === 01888475550 && transferPin === 333) {
      //   console.log("transfer done");
      const updateBalance = currentBalance - transferAmount;
      //   console.log(updateBalance);
      document.getElementById("current-bln").innerText = updateBalance;

      document.getElementById("user-acc-number").value = "";
      document.getElementById("Transfer-amount").value = "";
      document.getElementById("transfer-pin").value = "";
    } else {
      alert("Failed Transfer. Please enter valid input....!");
    }
  });
