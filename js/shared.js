function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const convertInputByParseFloat = parseFloat(inputValue);
  return convertInputByParseFloat;
}
function onlyInputValueById(id) {
  const mobileNumber = document.getElementById(id).value;
  return mobileNumber;
}
function getTextValueById(id) {
  const text = document.getElementById(id).innerText;
  const floatText = parseFloat(text);
  return floatText;
}

function unhideTheInputFrom(id) {
  // all hide
  document.getElementById("add-money-container").classList.add("hidden");
  document.getElementById("cash-out-container").classList.add("hidden");
  document.getElementById("transfer-money-container").classList.add("hidden");
  document.getElementById("get-bonus-container").classList.add("hidden");
  document.getElementById("bill-payment-container").classList.add("hidden");
  document.getElementById("transactions-container").classList.add("hidden");
  // show by call
  document.getElementById(id).classList.remove("hidden");
}
