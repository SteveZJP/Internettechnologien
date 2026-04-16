function calculateBMI() {
  let weight = Number(document.getElementById("gewicht").value);
  let size = Number(document.getElementById("groesse").value) / 100;
  let bmi = weight / (size * size);

  let bmiField = document.getElementById("bmi");
  bmiField.value = bmi.toFixed(2);
  //console.log(bmi);

  let weightcondition = document.getElementById("weightcondition");
  let textToAppend;

  /*console.log(bmi);
  console.log(typeof bmi);*/

  if (bmi < 18.5) {
    textToAppend = "Untergewicht";
  } else if (bmi < 25) {
    textToAppend = "Normalgewicht";
  } else if (bmi < 30) {
    textToAppend = "Übergewicht";
  } else {
    textToAppend = "starkes Übergewicht";
  }

  weightcondition.innerText = textToAppend;
  //console.log(textToAppend);
}
