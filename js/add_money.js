document
  .querySelector("#add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let SelectInputValueStore = "";
    const SelectInput = document.querySelector("#select-input");
    SelectInput.addEventListener("change", function (e) {
      const SelectInputValue = e.target.value;
      SelectInputValueStore = SelectInputValue;
    });
    const bankNumber = getInputValueById("Bank-number");
    const addAmount = getInputValueById("add-amount");
    const addPinNumber = getInputValueById("add-pin-number");
    // console.log(bankNumber, addAmount, addPinNumber);
    if (bankNumber === 0174444 && addPinNumber === 333) {
      //problem
      // console.log("added");
      const currentBalanceNumber = getTextValueById("current-bln");
      const updateBalance = currentBalanceNumber + addAmount;
      //   console.log(updateBalance);
      document.getElementById("current-bln").innerText = updateBalance;
    } else {
      alert("Invalid Input");
    }

    document.getElementById("select-input").value = "";
    document.getElementById("Bank-number").value = "";
    document.getElementById("add-amount").value = "";
    document.getElementById("add-pin-number").value = "";
  });
