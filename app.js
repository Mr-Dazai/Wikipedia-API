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
  fetchPages(value);
});

const fetchPages = async (searchValue) => {
  result.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(`${url}${searchValue}`);
    const data = await response.json();
    const results = data.query.search;
    if (results.length < 1) {
      result.innerHTML = '<div class="error">No matching results.</div>';
      return;
    }
    renderResults(results);
  } catch (error) {
    result.innerHTML = '<div class="error">Error</div>';
  }
};

const renderResults = (list) => {
  const cardsList = list
    .map((item) => {
      const { title, snippet, pageid } = item;
      return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
    <h4>${title}</h4>
    <p>
      ${snippet}
    </p>
  </a>`;
    })
    .join("");
  result.innerHTML = `<div class="articles">
          ${cardsList}
        </div>`;
};
