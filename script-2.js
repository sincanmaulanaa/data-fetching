const form = document.getElementById("form");
const output = document.getElementById("output");

async function sendToServer(data) {
  const res = await fetch("https://pie.dev/post", {
    method: "POST",
    body: JSON.stringify(data),
  });
  const result = await res.json();

  output.innerHTML = `${result.json.name}`;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  output.innerHTML = "Sending...";

  const name = form.querySelector('[name="name"]').value;

  sendToServer({ name });
});
