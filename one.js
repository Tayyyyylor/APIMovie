let films = document.getElementById("films");
let input = document.querySelector("input");
let series = document.getElementById("series");
let filmHtml = "<h2>Films</h2>";
let seriesHtml = "<h2>Séries</h2>";

// Appel de l'api

input.addEventListener("input", (event) => {
  fetch(`https://www.omdbapi.com/?apikey=dc106a55&s=${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      for (let i = 0; i < data.Search.length; i++) {
        if (data.Search[i].Type === "movie") {
          if (data.Search[i].Year < 2000) {
            filmHtml += ` <div class="blue">
                <img src= "${data.Search[i].Poster}">
                <p> ${data.Search[i].Title}</p>
                <p> ${data.Search[i].Year}</p>
                </div>`;
          } else if (data.Search[i].Year >= 2000) {
            filmHtml += ` <div class="green">
                <img src= "${data.Search[i].Poster}">
                <p> ${data.Search[i].Title}</p>
                <p> ${data.Search[i].Year}</p>
                </div>`;
          }
        } else if (data.Search[i].Type === "series") {
          seriesHtml += `<div class="green">
            <img src= "${data.Search[i].Poster}">
            <p> ${data.Search[i].Title}</p>
            <p> ${data.Search[i].Year}</p>
            </div>`;
        }

        series.innerHTML = seriesHtml;
        films.innerHTML = filmHtml;
      }
    });

  if (input.value.length <= 3) {
    films.innerHTML = "";
    series.innerHTML = "";
  }
});
