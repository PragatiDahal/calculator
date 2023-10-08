function Display_result(value) {
  document.getElementById("display").value += value;
}

function clear_result() {
  document.getElementById("display").value = "";
}

function Result() {
  const displayValue = document.getElementById("display").value;
  try {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}
