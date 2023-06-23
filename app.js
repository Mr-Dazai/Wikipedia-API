const url =
  "https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=";

const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
const result = document.querySelector(".results");

console.log(form, input, result);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  if (!value) {
    result.innerHTML = '<div class="error">Please Enter Valid Search Term';
    return;
  }
});
