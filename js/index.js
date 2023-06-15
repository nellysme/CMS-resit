const url = "https://www.myplants.no/wp-json/wp/v2/posts";
const postsContainer = document.querySelector('.latest-posts');

fetch(url)
  .then(response => response.json())
  .then(data => {
    data.forEach(post => {
      const innerContent = `
        <div class="cards">
        <h2 class="food-title">${post.title.rendered}</h2>
        ${post.content.rendered}</div>
      `;
      postsContainer.innerHTML += innerContent;
    });


    console.log(data);
  })


  .catch(error => {
    console.error("Error:", error);
  });
