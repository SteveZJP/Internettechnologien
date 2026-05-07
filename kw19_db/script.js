async function holeDaten() {
  let id = document.getElementById("id").value;

  const response = await fetch(`http://localhost:3000/api/patienten/${id}`);
  const data = await response.json();
  console.log(data);
  console.log(data.message);
  document.getElementById("nachname").value = data.data.nachname;
  document.getElementById("vorname").value = data.data.vorname;
}

async function legePatientAn() {
  let nachname = document.getElementById("nachnameNeu").value;
  let vorname = document.getElementById("vornameNeu").value;

  const patient = {
    nachname: nachname,
    vorname: vorname,
  };

  const response = await fetch("http://localhost:3000/api/patienten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patient),
  });

  const data = await response.json();
  console.log(data);
}
