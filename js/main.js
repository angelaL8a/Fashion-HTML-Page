// Grid section (index.html)
const elements = [
  {
    title: "Test1",
    index: "article_img_1",
    src: "https://assets.vogue.com/photos/64b57f3cdc90cc14d7b916d9/16:9/w_1920%2Cc_limit/00-trip%2520(2).jpg",
  },
  {
    title: "Test2",
    index: "article_img_2",
    src: "https://assets.vogue.com/photos/64b57f3cdc90cc14d7b916d9/16:9/w_1920%2Cc_limit/00-trip%2520(2).jpg",
  },
  {
    title: "Test3",
    index: "article_img_3",
    src: "https://assets.vogue.com/photos/64aef1c311f7aacca57c43f2/master/w_1920,c_limit/GettyImages-1527911229.jpg",
  },
  {
    title: "Test4",
    index: "article_img_4",
    src: "https://assets.vogue.com/photos/64b57f3cdc90cc14d7b916d9/16:9/w_1920%2Cc_limit/00-trip%2520(2).jpg",
  },
  {
    title: "Test5",
    index: "article_img_5",
    src: "https://assets.vogue.com/photos/64b57f3cdc90cc14d7b916d9/16:9/w_1920%2Cc_limit/00-trip%2520(2).jpg",
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
    title:
      "Forget ’90s Thong Sandals, Nicola Peltz Brings Back the Y2K Wedge in St Tropez",
    src: "https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_120,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20120w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_240,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20240w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_320,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20320w",
  },
  {
    category: "Culture",
    title: "The 7 Biggest Summer Haircuts of 2023",
    src: "https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_120,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20120w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_240,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20240w,%20https://assets.vogue.com/photos/64ac10920def6fd42956fb15/1:1/w_320,c_limit/Dua%20Lipa_100723_GettyImages-1529735402.jpg%20320w",
  },
  {
    category: "Beauty",
    title: "Amal Clooney Brings Studio 54 to Lake Como",
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

    <div class="flex-1">
      <a class="uppercase font-semibold" href="#">${i.category}</a>
      <p class="text-lg" >${i.title}</p>
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
