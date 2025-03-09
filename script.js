function calculate() {
  var html = parseFloat(document.getElementById("html").value) || 0;
  var css = parseFloat(document.getElementById("css").value) || 0;
  var javascript = parseFloat(document.getElementById("javascript").value) || 0;

  var sum = html + css + javascript;
  var avg = sum / 3;
  var max = Math.max(html, css, javascript);
  var min = Math.min(html, css, javascript);

  document.getElementById("sum").value = sum;
  document.getElementById("avg").value = avg;
  document.getElementById("max").value = max;
  document.getElementById("min").value = min;
}

function clearForm() {
  document.getElementById("assignmentForm").reset();
  document.getElementById("sum").value = "";
  document.getElementById("avg").value = "";
  document.getElementById("max").value = "";
  document.getElementById("min").value = "";
}
