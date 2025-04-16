function generateTable() {
  const start = parseInt(document.getElementById('start').value);
  const end = parseInt(document.getElementById('end').value);
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = "";

  if (isNaN(start) || isNaN(end)) {
    alert("Please enter valid numbers.");
    return;
  }

  if (start < 2 || end > 10 || start > end) {
    alert("Please enter numbers between 2 and 10, and make sure the start number is less than or equal to the end number.");
    return;
  }

  let table = "<table><thead><tr><th>x</th>";
  for (let i = start; i <= end; i++) {
    table += `<th>${i}</th>`;
  }
  table += "</tr></thead><tbody>";

  for (let i = start; i <= end; i++) {
    table += `<tr><th>${i}</th>`;
    for (let j = start; j <= end; j++) {
      table += `<td>${i * j}</td>`;
    }
    table += "</tr>";
  }

  table += "</tbody></table>";
  outputDiv.innerHTML = table;
}
