// Grid section (index.html)
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

// Must read section (index.html)
const mustReadElements = [
  {
    category: "Fashion",
    title: "String",
    src: "https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_120,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20120w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_240,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20240w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_320,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20320w",
  },
  {
    category: "Culture",
    title: "String",
    src: "https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_120,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20120w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_240,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20240w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_320,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20320w",
  },
  {
    category: "Beauty",
    title: "String",
    src: "https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_120,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20120w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_240,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20240w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_320,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20320w",
  },
];

const mustReadContainer = document.getElementById("must_read_articles");
mustReadElements.forEach((i, index) => {
  const item = document.createElement("div");
  item.classList.add("must_read_art");

  item.innerHTML = `
    <div class="must_read_art_img">
      <img
        style="width: 100%; height: 100%; object-fit: cover"
        src="${i.src}"
      />
    </div>

    <div>
      <a href="#">${i.category}</a>
      <p>${i.title}</p>
    </div>
  `;
  mustReadContainer.appendChild(item);
});

// Celebrity Style section (index.html)
const celebrityItems = [
  {
    category: "Fashion",
    title: "La billie",
    src: "https://assets.vogue.com/photos/64ac4b21406cf236781d59d2/4:3/w_1920,c_limit/1530545876",
  },
  {
    category: "Fashion",
    title: "La billie",
    src: "https://assets.vogue.com/photos/64ac4b21406cf236781d59d2/4:3/w_1920,c_limit/1530545876",
  },
  {
    category: "Fashion",
    title: "La billie",
    src: "https://assets.vogue.com/photos/64ac4b21406cf236781d59d2/4:3/w_1920,c_limit/1530545876",
  },
  {
    category: "Fashion",
    title: "La billie",
    src: "https://assets.vogue.com/photos/64ac4b21406cf236781d59d2/4:3/w_1920,c_limit/1530545876",
  },
];

const celebrityContainer = document.getElementById(
  "celebrity_section_container"
);

celebrityItems.forEach((c, index) => {
  const item = document.createElement("div");
  item.classList.add("celebrity_section_art");

  item.innerHTML = `
    <div>
      <img
        src="${c.src}"
        alt="labillie"
      />
    </div>
    <div class="celebrity_section_art_content">
      <a href="#">${c.category}</a>
      <p>${c.title}</p>
    </div>
  `;

  celebrityContainer.appendChild(item);
});
