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

async function getAllEmployees() {
  const url = "https://jsonplaceholder.typicode.com/users";

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    const tableBody = document.getElementById("tableBody");

    data.forEach((element) => {
      let name = element.name.split(" ");
      let firstname = name[0];
      let lastname = name[1];

      tableBody.innerHTML += `
      <tr>
      <td>${firstname}</td>
      <td>${lastname}</td>
      <td>${element.address.street}, ${element.address.city}</td>
      </tr>
      `;
    });
  } catch (e) {
    console.log("error: ", e);
  }
}

async function getEmployee() {
  let id = Number(document.getElementById("userId").value);

  const url = `https://jsonplaceholder.typicode.com/users/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    const userDetails = document.getElementById("userDetails");

    userDetails.innerHTML = `
      <p class="h5">User Details</p>  
      <p>Name: ${data.name}<br/>
      Email: ${data.email}<br/>
      Stadt: ${data.address.city}</p>
    `;
  } catch (e) {
    console.log("error: ", e);
  }
}
