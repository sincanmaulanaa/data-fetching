async function dataFetch() {
  const res = await fetch("https://pie.dev/get11");
  if (res.ok === false) return console.log("yah request gagal");

  const json = await res.json();
  console.log(json);
}

dataFetch();
