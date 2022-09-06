function CalcularPromedio() {
  let v1 = document.getElementById("n1").value;
  let v2 = document.getElementById("n2").value;
  let v3 = document.getElementById("n3").value;
  let pro = (parseFloat(v1) + parseFloat(v2) + parseFloat(v3)) / 3;
  document.getElementById("promedio").innerHTML = pro;
}
