let form = document.forms["add"];
form.addEventListener("submit", (e) => {
  //e.preventDefault();
  let input = form.querySelector('input[type="text"]');
  fetch("/", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item: input.value }),
  });
});

let li = document.querySelectorAll("li");
li.forEach((l) => {
  l.addEventListener("click", (e) => {
    let item = l.innerHTML.replace(" ", "-");
    fetch("/" + item, {
      method: "DELETE",
    });
    location.reload();
  });
});
// front end js
