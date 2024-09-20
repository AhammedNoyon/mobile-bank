document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    // console.log("add money button is clicked");
    const selectInput = document.querySelector("#select-input").value;
    // console.log(selectInput);
    const bankNumber = onlyInputValueById("Bank-number");
    // console.log(typeof bankNumber);
    const addAmount = getInputValueById("add-amount");
    const addPinNumber = getInputValueById("add-pin-number");
    console.log(typeof addAmount);
    // console.log(bankNumber, addAmount, addPinNumber);
    if (isNaN(addAmount) || addAmount < 0) {
      alert("please enter valid amount");
      return;
    }
    if (
      bankNumber === "01726" &&
      addPinNumber === 333 &&
      selectInput === "Brac"
    ) {
      const currentBalanceNumber = getTextValueById("current-bln");
      const updateBalance = currentBalanceNumber + addAmount;
      //   console.log(updateBalance);
      document.getElementById("current-bln").innerText = updateBalance;

      const div = document.createElement("div");
      div.classList.add("w-2/3");
      div.classList.add("bg-blue-400");
      div.classList.add("mx-auto");
      div.classList.add("rounded-lg");
      div.classList.add("p-2");
      div.classList.add("mt-3");
      div.classList.add("mb-3");
      div.innerHTML = `
      <h1 class = 'text-xl font-bold text-white'>Added Money successful</h1>
      <p class = 'text-xl font-bold text-white'>Added : ${addAmount}. Your new balance is ${updateBalance}.</p>
      `;
      document.querySelector("#transactions-container").appendChild(div);
    } else {
      alert("Invalid Input");
    }
    document.getElementById("select-input").value = "";
    document.getElementById("Bank-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin-number").value = "";
  });
