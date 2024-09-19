function getInputValueById(id) {
  const inputValue = document.getElementById(id).value;
  const convertInputByParseFloat = parseFloat(inputValue);
  return convertInputByParseFloat;
}
