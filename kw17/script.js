async function fetchISSPosition() {
  const url = "https://api.wheretheiss.at/v1/satellites/25544";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("error: ", e);
  }
}

fetchISSPosition(); //nur fuer test des scripts
