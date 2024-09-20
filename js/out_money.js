document
  .getElementById("cashOut-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const agentNumber = onlyInputValueById("agent-number");
    const cashOutPin = getInputValueById("cashOut-pin");
    // console.log(agentNumber, cashOutPin);
    const cashOutAmount = getInputValueById("cashOut-amount");
    const currentBalance = getTextValueById("current-bln");
    console.log(agentNumber, cashOutPin);
    if (
      isNaN(cashOutAmount) ||
      cashOutAmount > currentBalance ||
      cashOutAmount < 0
    ) {
      alert("Please enter valid amount.");
      return;
    }
    if (agentNumber === "01888" && cashOutPin === 333) {
      const updateBalance = currentBalance - cashOutAmount;
      document.getElementById("current-bln").innerText = updateBalance;
      // document.querySelector("#transactions-container").innerHTML = `
      // <div class = 'bg-blue-400 w-3/5 mb-3 mt-3 rounded-lg p-2'>
      // <h1 class='text-xl font-bold text-white'>Cash out successful</h1>
      // <p>Cash out : ${cashOutAmount}. Your new balance is ${updateBalance}.</p>
      // </div>
      // `;
      const div = document.createElement("div");
      div.classList.add("w-2/3");
      div.classList.add("bg-blue-400");
      div.classList.add("mx-auto");
      div.classList.add("rounded-lg");
      div.classList.add("p-2");
      div.classList.add("mt-3");
      div.classList.add("mb-3");
      div.innerHTML = `
      <h1 class = 'text-xl font-bold text-white'>Cash out successful</h1>
      <p class = 'text-xl font-bold text-white'>Cash out : ${cashOutAmount}. Your new balance is ${updateBalance}.</p>
      `;
      document.querySelector("#transactions-container").appendChild(div);
    } else {
      alert("Wrong input . please enter correct valid input");
    }
    document.getElementById("agent-number").value = "";
    document.getElementById("cashOut-amount").value = "";
    document.getElementById("cashOut-pin").value = "";
  });
