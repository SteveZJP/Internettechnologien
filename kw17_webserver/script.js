async function getData() {
  const url = "http://localhost:3000/";

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.message);
  } catch (e) {
    console.log("error: ", e);
  }
}
