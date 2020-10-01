//recommendation input
document.getElementById("pain").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (val1 === "" && val1 != "Pain" && val2 != "Pain" && val3 != "Pain") {
    document.querySelector("#symp1").value = "Pain";
  } else if (val2 === "" && val1 != "Pain" && val3 != "Pain") {
    document.querySelector("#symp2").value = "Pain";
  } else if (val1 != "Pain" && val2 != "Pain") {
    document.querySelector("#symp3").value = "Pain";
  }
});

document.getElementById("sinusitis").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Sinusitis" &&
    val2 != "Sinusitis" &&
    val3 != "Sinusitis"
  ) {
    document.querySelector("#symp1").value = "Sinusitis";
  } else if (val2 === "" && val1 != "Sinusitis" && val3 != "Sinusitis") {
    document.querySelector("#symp2").value = "Sinusitis";
  } else if (val1 != "Sinusitis" && val2 != "Sinusitis") {
    document.querySelector("#symp3").value = "Sinusitis";
  }
});

document.getElementById("constipation").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Constipation" &&
    val2 != "Constipation" &&
    val3 != "Constipation"
  ) {
    document.querySelector("#symp1").value = "Constipation";
  } else if (val2 === "" && val1 != "Constipation" && val3 != "Constipation") {
    document.querySelector("#symp2").value = "Constipation";
  } else if (val1 != "Constipation" && val2 != "Constipation") {
    document.querySelector("#symp3").value = "Constipation";
  }
});
document.getElementById("nausea").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Nausea/Vomiting" &&
    val2 != "Nausea/Vomiting" &&
    val3 != "Nausea/Vomiting"
  ) {
    document.querySelector("#symp1").value = "Nausea/Vomiting";
  } else if (
    val2 === "" &&
    val1 != "Nausea/Vomiting" &&
    val3 != "Nausea/Vomiting"
  ) {
    document.querySelector("#symp2").value = "Nausea/Vomiting";
  } else if (val1 != "Nausea/Vomiting" && val2 != "Nausea/Vomiting") {
    document.querySelector("#symp3").value = "Nausea/Vomiting/Vomiting";
  }
});
//click event for anxiety
document.getElementById("anxiety").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Anxiety" &&
    val2 != "Anxiety" &&
    val3 != "Anxiety"
  ) {
    document.querySelector("#symp1").value = "Anxiety";
  } else if (val2 === "" && val1 != "Anxiety" && val3 != "Anxiety") {
    document.querySelector("#symp2").value = "Anxiety";
  } else if (val1 != "Anxiety" && val2 != "Anxiety") {
    document.querySelector("#symp3").value = "Anxiety";
  }
});
//click event for cough
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
//click event for headache
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
//click event for birth
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
//click event for insomnia
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
//click event for conjuctivitis
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
//click event for backpain
document.getElementById("backpain").addEventListener("click", () => {
  let val1 = document.querySelector("#symp1").value;
  let val2 = document.querySelector("#symp2").value;
  let val3 = document.querySelector("#symp3").value;
  if (
    val1 === "" &&
    val1 != "Back Pain" &&
    val2 != "Back Pain" &&
    val3 != "Back Pain"
  ) {
    document.querySelector("#symp1").value = "Back Pain";
  } else if (val2 === "" && val1 != "Back Pain" && val3 != "Back Pain") {
    document.querySelector("#symp2").value = "Back Pain";
  } else if (val1 != "Back Pain" && val2 != "Back Pain") {
    document.querySelector("#symp3").value = "Back Pain";
  }
});
//click event for ance
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
    "Menstrual Disorders",
    "Constipation",
    "Sinusitis",
    "Nausea/Vomiting",
    "Emergency Contraception",
    "Crohn's Disease",
    "Urinary Tract Infection",
    "Rheumatoid Arthritis",
    "Hot Flashes",
    "Smoking Cessation",
    "Irritable Bowel Syndrome",
    "Drug Induced",
    "Allergic",
    "High Blood Pressure",
    "Cough and Nasal Congestion",
    "Binge Eating Disorde",
    "Asthma",
    "Hypersomnia",
    "Obsessive Compulsive Disorder",
    "Vitamin D Deficiency",
    "GERD",
    "Pain",
    "Back Pain",
    "Muscle Pain",
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
    "Menstrual Disorders",
    "Constipation",
    "Sinusitis",
    "Nausea/Vomiting",
    "Emergency Contraception",
    "Crohn's Disease",
    "Urinary Tract Infection",
    "Rheumatoid Arthritis",
    "Hot Flashes",
    "Smoking Cessation",
    "Irritable Bowel Syndrome",
    "Drug Induced",
    "Allergic",
    "High Blood Pressure",
    "Cough and Nasal Congestion",
    "Binge Eating Disorde",
    "Asthma",
    "Hypersomnia",
    "Obsessive Compulsive Disorder",
    "Vitamin D Deficiency",
    "GERD",
    "Pain",
    "Back Pain",
    "Muscle Pain",
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
    "Menstrual Disorders",
    "Constipation",
    "Sinusitis",
    "Nausea/Vomiting",
    "Emergency Contraception",
    "Crohn's Disease",
    "Urinary Tract Infection",
    "Rheumatoid Arthritis",
    "Hot Flashes",
    "Smoking Cessation",
    "Irritable Bowel Syndrome",
    "Drug Induced",
    "Allergic",
    "High Blood Pressure",
    "Cough and Nasal Congestion",
    "Binge Eating Disorde",
    "Asthma",
    "Hypersomnia",
    "Obsessive Compulsive Disorder",
    "Vitamin D Deficiency",
    "GERD",
    "Pain",
    "Back Pain",
    "Muscle Pain",
  ];
  $("#symp3").autocomplete({
    source: availableTags,
  });
});
