//recommendation input
document.getElementById("fever").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (val1 === "" && val1 != "Fever" && val2 != "Fever" && val3 != "Fever") {
    document.querySelector("#symp1").value = "Fever";
  } else if (val2 === "" && val1 != "Fever" && val3 != "Fever") {
    document.querySelector("#symp2").value = "Fever";
  } else if (val1 != "Fever" && val2 != "Fever") {
    document.querySelector("#symp3").value = "Fever";
  }
});

document.getElementById("vomit").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Vomiting" &&
    val2 != "Vomiting" &&
    val3 != "Vomiting"
  ) {
    document.querySelector("#symp1").value = "Vomiting";
  } else if (val2 === "" && val1 != "Vomiting" && val3 != "Vomiting") {
    document.querySelector("#symp2").value = "Vomiting";
  } else if (val1 != "Vomiting" && val2 != "Vomiting") {
    document.querySelector("#symp3").value = "Vomiting";
  }
});

document.getElementById("rest").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Restlessness" &&
    val2 != "Restlessness" &&
    val3 != "Restlessness"
  ) {
    document.querySelector("#symp1").value = "Restlessness";
  } else if (val2 === "" && val1 != "Restlessness" && val3 != "Restlessness") {
    document.querySelector("#symp2").value = "Restlessness";
  } else if (val1 != "Restlessness" && val2 != "Restlessness") {
    document.querySelector("#symp3").value = "Restlessness";
  }
});
document.getElementById("nausea").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (val1 === "" && val1 != "Nausea" && val2 != "Nausea" && val3 != "Nausea") {
    document.querySelector("#symp1").value = "Nausea";
  } else if (val2 === "" && val1 != "Nausea" && val3 != "Nausea") {
    document.querySelector("#symp2").value = "Nausea";
  } else if (val1 != "Nausea" && val2 != "Nausea") {
    document.querySelector("#symp3").value = "Nausea";
  }
});
document.getElementById("nose").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Runny Nose" &&
    val2 != "Runny Nose" &&
    val3 != "Runny Nose"
  ) {
    document.querySelector("#symp1").value = "Runny Nose";
  } else if (val2 === "" && val1 != "Runny Nose" && val3 != "Runny Nose") {
    document.querySelector("#symp2").value = "Runny Nose";
  } else if (val1 != "Runny Nose" && val2 != "Runny Nose") {
    document.querySelector("#symp3").value = "Runny Nose";
  }
});
document.getElementById("cough").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (val1 === "" && val1 != "Cough" && val2 != "Cough" && val3 != "Cough") {
    document.querySelector("#symp1").value = "Cough";
  } else if (val2 === "" && val1 != "Cough" && val3 != "Cough") {
    document.querySelector("#symp2").value = "Cough";
  } else if (val1 != "Cough" && val2 != "Cough") {
    document.querySelector("#symp3").value = "Cough";
  }
});
document.getElementById("headache").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Headache" &&
    val2 != "Headache" &&
    val3 != "Headache"
  ) {
    document.querySelector("#symp1").value = "Headache";
  } else if (val2 === "" && val1 != "Headache" && val3 != "Headache") {
    document.querySelector("#symp2").value = "Headache";
  } else if (val1 != "Headache" && val2 != "Headache") {
    document.querySelector("#symp3").value = "Headache";
  }
});
document.getElementById("birth").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Birth Control" &&
    val2 != "Birth Control" &&
    val3 != "Birth Control"
  ) {
    document.querySelector("#symp1").value = "Birth Control";
  } else if (
    val2 === "" &&
    val1 != "Birth Control" &&
    val3 != "Birth Control"
  ) {
    document.querySelector("#symp2").value = "Birth Control";
  } else if (val1 != "Birth Control" && val2 != "Birth Control") {
    document.querySelector("#symp3").value = "Birth Control";
  }
});
document.getElementById("insomnia").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Insomnia" &&
    val2 != "Insomnia" &&
    val3 != "Insomnia"
  ) {
    document.querySelector("#symp1").value = "Insomnia";
  } else if (val2 === "" && val1 != "Insomnia" && val3 != "Insomnia") {
    document.querySelector("#symp2").value = "Insomnia";
  } else if (val1 != "Insomnia" && val2 != "Insomnia") {
    document.querySelector("#symp3").value = "Insomnia";
  }
});
document.getElementById("conjuctivitis").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Conjunctivitis" &&
    val2 != "Conjunctivitis" &&
    val3 != "Conjunctivitis"
  ) {
    document.querySelector("#symp1").value = "Conjunctivitis";
  } else if (
    val2 === "" &&
    val1 != "Conjunctivitis" &&
    val3 != "Conjunctivitis"
  ) {
    document.querySelector("#symp2").value = "Conjunctivitis";
  } else if (val1 != "Conjunctivitis" && val2 != "Conjunctivitis") {
    document.querySelector("#symp3").value = "Conjunctivitis";
  }
});
document.getElementById("migrane").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Migrane" &&
    val2 != "Migrane" &&
    val3 != "Migrane"
  ) {
    document.querySelector("#symp1").value = "Migrane";
  } else if (val2 === "" && val1 != "Migrane" && val3 != "Migrane") {
    document.querySelector("#symp2").value = "Migrane";
  } else if (val1 != "Migrane" && val2 != "Migrane") {
    document.querySelector("#symp3").value = "Migrane";
  }
});
document.getElementById("acne").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (val1 === "" && val1 != "Acne" && val2 != "Acne" && val3 != "Acne") {
    document.querySelector("#symp1").value = "Acne";
  } else if (val2 === "" && val1 != "Acne" && val3 != "Acne") {
    document.querySelector("#symp2").value = "Acne";
  } else if (val1 != "Acne" && val2 != "Acne") {
    document.querySelector("#symp3").value = "Acne";
  }
});

$(function () {
  var availableTags = [
    "Cough",
    "Headache",
    "Birth Control",
    "Insomnia",
    "Anxiety",
    "Conjunctivitis",
    "Migraine Prevention",
    "Motion Sickness",
    "Acne",
    "Nasal Congestion",
    "Menstrual",
    "Disorders",
    "Constipation",
    "Sinusitis",
    "Nausea/Vomiting",
  ];
  $("#symp1").autocomplete({
    source: availableTags,
  });
});

$(function () {
  var availableTags = [
    "Cough",
    "Headache",
    "Birth Control",
    "Insomnia",
    "Anxiety",
    "Conjunctivitis",
    "Migraine Prevention",
    "Motion Sickness",
    "Acne",
    "Nasal Congestion",
    "Menstrual",
    "Disorders",
    "Constipation",
    "Sinusitis",
    "Nausea/Vomiting",
  ];
  $("#symp2").autocomplete({
    source: availableTags,
  });
});

$(function () {
  var availableTags = [
    "Cough",
    "Headache",
    "Birth Control",
    "Insomnia",
    "Anxiety",
    "Conjunctivitis",
    "Migraine Prevention",
    "Motion Sickness",
    "Acne",
    "Nasal Congestion",
    "Menstrual",
    "Disorders",
    "Constipation",
    "Sinusitis",
    "Nausea/Vomiting",
  ];
  $("#symp3").autocomplete({
    source: availableTags,
  });
});
