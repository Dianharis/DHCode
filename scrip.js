function appendValue(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  const display = document.getElementById("display");
  try {
    const expression = display.value;
    const result = eval(expression);
    display.value = result;
    addToHistory(expression + " = " + result);
  } catch {
    display.value = "error";
  }
}

function deleteLast() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function addToHistory(entry) {
  const list = document.getElementById("history-list");
  const li = document.createElement("li");
  li.textContent = entry;
  list.prepend(li); // riwayat terbaru di atas
  if (list.children.length > 5) {
    list.removeChild(list.lastChild); // maksimal 5 riwayat
  }
}
