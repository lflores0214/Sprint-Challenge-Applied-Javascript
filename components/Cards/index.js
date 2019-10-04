// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsContainer = document.querySelector(".cards-container");
axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {
    response.data.articles.javascript.forEach(item => {
      const newCard = ArticleCard(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.bootstrap.forEach(item => {
      const newCard = ArticleCard(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.technology.forEach(item => {
      const newCard = ArticleCard(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.jquery.forEach(item => {
      const newCard = ArticleCard(item);
      cardsContainer.appendChild(newCard);
    });
    response.data.articles.node.forEach(item => {
      const newCard = ArticleCard(item);
      cardsContainer.appendChild(newCard);
    });
  });
function ArticleCard(obj) {
  const card = document.createElement("div"),
    headLine = document.createElement("div"),
    author = document.createElement("div"),
    imgContainer = document.createElement("div"),
    img = document.createElement("img"),
    authorName = document.createElement("span");

  card.classList.add("card");
  headLine.classList.add("headline");
  author.classList.add("author");
  imgContainer.classList.add("img-container");

  headLine.textContent = obj.headline;
  img.src = obj.authorPhoto;
  authorName.textContent = obj.authorName;

  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorName);
  imgContainer.appendChild(img);

  return card;
}
