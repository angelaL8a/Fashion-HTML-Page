const elements = [
  {
    title: "Test1",
    index: "article_img_1",
    src: "./Images/card.jpg",
  },
  {
    title: "Test2",
    index: "article_img_2",
    src: "./Images/card.jpg",
  },
  {
    title: "Test3",
    index: "article_img_3",
    src: "./Images/card.jpg",
  },
  {
    title: "Test4",
    index: "article_img_4",
    src: "./Images/card.jpg",
  },
  {
    title: "Test5",
    index: "article_img_5",
    src: "./Images/card.jpg",
  },
];

const articlesContainer = document.getElementById("articles");

elements.forEach((element) => {
  const articleElement = document.createElement("div");
  articleElement.classList.add("article");
  articleElement.classList.add(`${element.index}`);
  articleElement.innerHTML = `
          <div class="article_img">
            <img src=${element.src} alt="card image 1" />
          </div>
          <div class="article_content">
            <h4>
              ${element.title}
            </h4>
          </div>
  `;
  articlesContainer.appendChild(articleElement);
});
