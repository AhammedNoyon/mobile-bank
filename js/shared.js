function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const convertInputByParseFloat = parseFloat(inputValue);
  return convertInputByParseFloat;
}
function getTextValueById(id) {
  const text = document.getElementById(id).innerText;
  const floatText = parseFloat(text);
  return floatText;
}
