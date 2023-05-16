const newscontainer = document.querySelector(".container");
function rendernews(data) {
  const html = `
  
  <div class="content">
      <div class="text">
          <h3 class="title">${data.title}</h3>
          <p class="tags">${data.tags}</p>
          <p class="body">${data.body}</p>
          <a class="url" href= ${data.url}>read more...</a>

           
      </div>
      <img src=${data.imageurl} alt="image of the news">
  </div>

`;
  newscontainer.insertAdjacentHTML("beforeend", html);
}
const request = fetch(
  `https://min-api.cryptocompare.com/data/v2/news/?lang=EN`
).then(function (response) {
  return response.json().then(function (data) {
    console.log("Welcome to my website ...");

    for (i = 0; i <= 50; i++) {
      rendernews(data["Data"][i]);
    }
  });
});
