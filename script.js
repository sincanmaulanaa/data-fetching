//fetching
const res = fetch("https://pie.dev/post", {
  method: "POST",
  headers: {
    Authentication: "Bearer werheuhuih",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "sincan",
    age: "19",
  }),
})
  .then(function (res) {
    if (res.ok === false) {
      return console.log("request gagal");
    }
    return res.json();
  })
  .then(function (res) {
    console.log(res);
  });
