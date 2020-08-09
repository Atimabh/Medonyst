//recommendation input
document.getElementById("fever").addEventListener("click", () => {
  document.querySelector("#symp1").value = "Fever";
});
document.getElementById("vomit").addEventListener("click", () => {
  document.querySelector("#symp2").value = "Vomit";
});
document.getElementById("rest").addEventListener("click", () => {
  document.querySelector("#symp3").value = "Restlessness";
});
document.getElementById("nausea").addEventListener("click", () => {
  document.querySelector("#symp3").value = "Nausea";
});
document.getElementById("nose").addEventListener("click", () => {
  document.querySelector("#symp3").value = "Runny Nose";
});
