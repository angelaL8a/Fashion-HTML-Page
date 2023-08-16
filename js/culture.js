//SHOWTIME TREASURES
const movies = [
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
];

const moviesContainer = document.getElementById("tvMovies_main");

movies.forEach((movie, index) => {
  const divMovie = document.createElement("div");
  divMovie.classList.add("tvMovies_card");

  divMovie.innerHTML = `
    <div class="tvMovies_card_img">
      <img
        src="${movie.image}"
        alt="${movie.title}"
      />
    </div>
    <div class="tvMovies_card_content">
      <h4 class="text-2xl mb-3">
        ${movie.title}
      </h4>
      <p class="text-justify">
        ${movie.text}
      </p>
    </div>
  `;

  moviesContainer.appendChild(divMovie);
});

//INSPIRARTION INSIGHTS
const artsItems = [
  {
    title: "The Late Glenda Jackson, in Glo",
    items: [
      {
        title:
          "When Herry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64867fa1a216a76b845000a3/4:3/w_320,c_limit/corey-tenold-photography-0323.jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face. W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
      {
        title:
          "When Hirry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64c287928cdda64d26c4bd12/4:3/w_640,c_limit/DSCF2772%5B1%5D%20(1).jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face. W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
      {
        title:
          "When Headadadat42654262rry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64867fa1a216a76b845000a3/4:3/w_320,c_limit/corey-tenold-photography-0323.jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face. W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
    ],
  },
  {
    title: "The Late Glenda Jackson, in Glo",
    items: [
      {
        title:
          "When Hdarry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64867fa1a216a76b845000a3/4:3/w_320,c_limit/corey-tenold-photography-0323.jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face. W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
      {
        title:
          "When Hadadarry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64c287928cdda64d26c4bd12/4:3/w_640,c_limit/DSCF2772%5B1%5D%20(1).jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
    ],
  },
  {
    title: "The Late Glenda Jackson, in Glo",
    items: [
      {
        title:
          "When Hadadarry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64867fa1a216a76b845000a3/4:3/w_320,c_limit/corey-tenold-photography-0323.jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face. W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
      {
        title:
          "When Hadadadadarry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64c287928cdda64d26c4bd12/4:3/w_640,c_limit/DSCF2772%5B1%5D%20(1).jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
    ],
  },
  {
    title: "The Late Glenda Jackson, in Glo",
    items: [
      {
        title:
          "When Habgbgbrry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64867fa1a216a76b845000a3/4:3/w_320,c_limit/corey-tenold-photography-0323.jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face. W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
      {
        title:
          "When Haxcvxcvwrry Styles Met David Hockney: An Exclusive First Look at a Special New Portrait",
        img: "https://assets.vogue.com/photos/64c287928cdda64d26c4bd12/4:3/w_640,c_limit/DSCF2772%5B1%5D%20(1).jpg",
        text: "W​​hat’s the secret to a great portrait? At 86 years old, David Hockney has a few ideas. A lifetime of looking has taught him to always start with the face.",
      },
    ],
  },
];

const artTopicsContainer = document.getElementById("art_container");

artsItems.forEach((artItem, index) => {
  const divTopic = document.createElement("div");
  divTopic.classList.add("card_topic");

  divTopic.innerHTML = `
    <h3 class="art_card_topic">${artItem.title}</h3>

    <div id="art_card_${index}" class="art_card"></div>
  `;

  artTopicsContainer.appendChild(divTopic);

  const artCard = document.getElementById(`art_card_${index}`);

  artItem.items.forEach((card, index) => {
    const divCard = document.createElement("div");
    divCard.classList.add("art_card_article");

    divCard.innerHTML = `
    <div class="art_card_article_img">
      <img
        src="${card.img}"
        alt="${card.title}"
        draggable="false"
      />
    </div>

    <div class="art_card_article_content">
      <h4>
      ${card.title}
      </h4>
      <p>
      ${card.text}
      </p>
    </div>

    <div class="art_card_arrow"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-gray-700 ${
      artItem.items[artItem.items.length - 1].title === card.title
        ? "art_card_arrow_upside_down"
        : ""
    }"><path d="m6 9 6 6 6-6"/></svg></div>
    `;

    artCard.appendChild(divCard);
  });

  let isDragging = false,
    startY,
    startScrollTop;

  const dragStart = (e) => {
    isDragging = true;
    artCard.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startY = e.pageY;
    startScrollTop = artCard.scrollTop;
  };

  const dragging = (e) => {
    if (!isDragging) return; // if isDragging is false return from here

    // Updates the scroll position of the carousel based on the cursor movement
    artCard.scrollTop = startScrollTop - (e.pageY - startY);
  };

  const dragStop = () => {
    isDragging = false;
    artCard.classList.remove("dragging");
  };

  artCard.addEventListener("mousedown", dragStart);
  artCard.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
});

// SPORTSCAPE: INSIDE THE ACTION
const sportsItems = [
  {
    nameButton: "Tennis",
    dataTab: "tab1",
    titleArticle: "Wimbledon Finals Preview: We’ll Have a New Women’s",
    textArticle:
      "olina in the quarterfinals, thus freeing her up to finally see that Harry Styles concert) will play sixth-seeded Ons Jabeur from Tunisia for the women’s title. While Jabeur will be appearing in her second straight final here—oddly enough",
    imgArticle:
      "https://assets.vogue.com/photos/6484af72956dd488a4432518/4:3/w_640,c_limit/GettyImages-1497450253.jpg",
  },
  {
    nameButton: "Racing",
    dataTab: "tab2",
    titleArticle: "Wimbledon Finals Preview: We’ll Have a New Women’s",
    textArticle:
      "olina in the quarterfinals, thus freeing her up to finally see that Harry Styles concert) will play sixth-seeded Ons Jabeur from Tunisia for the women’s title. While Jabeur will be appearing in her second straight final here—oddly enough",
    imgArticle:
      "https://assets.vogue.com/photos/63ee9371a71dea18ffef09aa/4:3/w_640,c_limit/_DRE2435.jpghttps://assets.vogue.com/photos/63ee9371a71dea18ffef09aa/4:3/w_640,c_limit/_DRE2435.jpg",
  },
  {
    nameButton: "Skating",
    dataTab: "tab3",
    titleArticle: "Wimbledon Finals Preview: We’ll Have a New Women’s",
    textArticle:
      "olina in the quarterfinals, thus freeing her up to finally see that Harry Styles concert) will play sixth-seeded Ons Jabeur from Tunisia for the women’s title. While Jabeur will be appearing in her second straight final here—oddly enough",
    imgArticle:
      "https://assets.vogue.com/photos/63d70d03dbb8fedd636feea9/4:3/w_640,c_limit/1460618445",
  },
  {
    nameButton: "Soccer",
    dataTab: "tab4",
    titleArticle: "Wimbledon Finals Preview: We’ll Have a New Women’s",
    textArticle:
      "olina in the quarterfinals, thus freeing her up to finally see that Harry Styles concert) will play sixth-seeded Ons Jabeur from Tunisia for the women’s title. While Jabeur will be appearing in her second straight final here—oddly enough",
    imgArticle:
      "https://assets.vogue.com/photos/64cabf74956dd488a4434049/4:3/w_640,c_limit/GettyImages-1004123846.jpg",
  },
  {
    nameButton: "Skating",
    dataTab: "tab5",
    titleArticle: "Wimbledon Finals Preview: We’ll Have a New Women’s",
    textArticle:
      "olina in the quarterfinals, thus freeing her up to finally see that Harry Styles concert) will play sixth-seeded Ons Jabeur from Tunisia for the women’s title. While Jabeur will be appearing in her second straight final here—oddly enough",
    imgArticle:
      "https://assets.vogue.com/photos/6484af72956dd488a4432518/4:3/w_640,c_limit/GettyImages-1497450253.jpg",
  },
];

const sportTabs = document.getElementById("sports_tabs");
sportsItems.forEach((tab, index) => {
  const divSport = document.createElement("button");
  divSport.classList.add("tab-button");
  divSport.setAttribute("data-tab", tab.dataTab);

  if (index === 0) {
    divSport.classList.add("active");
  }

  divSport.innerHTML = `
    ${tab.nameButton}
  `;

  sportTabs.appendChild(divSport);
});

const sportsContainer = document.getElementById("sports_container");

sportsItems.forEach((sport, index) => {});
