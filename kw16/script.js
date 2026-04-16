let test = document.getElementById("header");

function eingabe() {
  console.log("hat funktioniert.");
  document.getElementById("header").innerText = "Meine To-Do-Liste";

  let li = document.createElement("li");
  let input = document.getElementById("meinInput");
  let todoList = document.getElementById("meinetodoliste");
  li.textContent = input.value;
  todoList.appendChild(li);
  input.value = "";
}
