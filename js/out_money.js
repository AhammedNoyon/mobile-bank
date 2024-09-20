document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = getInputValueById("agent-number");
    const cashOutPin = getInputValueById("cashOut-pin");
    // console.log(agentNumber, cashOutPin);
    const cashOutAmount = getInputValueById("cashOut-amount");
    const currentBalance = getTextValueById("current-bln");
    if (agentNumber === 01888475550 && cashOutPin === 333) {
      const updateBalance = currentBalance - cashOutAmount;
      document.getElementById("current-bln").innerText = updateBalance;
    } else {
      alert("Wrong input . please enter correct valid input");
    }
    document.getElementById("agent-number").value = "";
    document.getElementById("cashOut-amount").value = "";
    document.getElementById("cashOut-pin").value = "";
  });
