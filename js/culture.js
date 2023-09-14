// SPORTSCAPE: INSIDE THE ACTION
const sportsItems = [
  {
    nameButton: "Racing",
    dataTab: "tab1",
    titleArticle:
      "Four Women, One Pink Lamborghini, and a Race to Win the Ultimate Endurance Test",
    textArticle:
      "The Iron Dames, the first all-female team in endurance racing, are making strides in the historically male-dominated motorsport world. Since their formation in 2018, these four skilled drivers, Rahel Frey, Michelle Gatting, Sarah Bovy, and Doriane Pin, have been challenging stereotypes and garnering attention not only for their racing prowess but also for their iconic pink Lamborghini and mission to inspire more women to enter racing. Beyond the track, the Iron Dames have grown into a 24-woman team, emphasizing that motorsport is open to women in various roles. While there are still challenges to overcome in achieving gender equality in motorsports, these trailblazing women are proving that women can compete at the highest levels of racing and are encouraging the next generation of female drivers.",
    imgArticle: "Images/culture_page/sport_1.jpg",
  },
  {
    nameButton: "Tennis",
    dataTab: "tab2",
    titleArticle:
      "After Facing Her Biggest Challenge in a Final Yet, Iga Swiatek Wins Her Third French Open",
    textArticle:
      "In the 2023 French Open Women's Singles final, Iga Swiatek, the world's number-one player from Poland, secured her fourth Grand Slam title by defeating unseeded Karolína Muchová from the Czech Republic in a thrilling three-set match, with a score of 6-2, 5-7, 6-4. Swiatek's victory marked her second consecutive French Open title and made her the youngest woman to win four major titles since Serena Williams accomplished the feat 21 years ago. Muchová displayed exceptional tennis skills throughout her maiden Grand Slam final and forced Swiatek into her first third set in a major final. The match saw swings in momentum, with Swiatek initially dominating but Muchová making a strong comeback in the second set. Ultimately, Swiatek secured the championship with emotional celebrations on the clay court.",
    imgArticle: "Images/culture_page/sport_2.jpg",
  },
  {
    nameButton: "Skating",
    dataTab: "tab3",
    titleArticle:
      "What You Need to Know About the 2023 World Figure Skating Championships",
    textArticle:
      "The 2023 World Figure Skating Championships have kicked off in Saitama, Japan, marking the second edition without Russian skaters. Defending champions Shoma Uno and Kaori Sakamoto, both from Japan, aim to retain their titles on home ice. Sakamoto's season has been inconsistent, while Uno has had a strong season with impressive performances. Ice dancers Madison Chock and Evan Bates from the United States are competing for their fourth gold medal, but Canadian pair Piper Gilles and Paul Poirier pose a strong challenge. The pairs' short program witnessed a surprise performance from Deanna Stellato-Dudek and Maxime Deschamps of Canada, while Alexa Knierim and Brandon Frazier, the first US pairs team to win Worlds since 1979, are among the top contenders despite facing emotional challenges. The competition continues through Sunday.",
    imgArticle: "Images/culture_page/sport_3.jpg",
  },
  {
    nameButton: "Soccer",
    dataTab: "tab4",
    titleArticle: "Megan Rapinoe Is a New Kind of American Sports Icon",
    textArticle:
      "Megan Rapinoe's rise to superstardom in the world of soccer. Her outspokenness and unapologetic public persona have paved the way for greater acceptance and visibility of athletes, challenging the norms of previous generations. Her success and the support she receives from fans of all backgrounds signify a shift towards a more inclusive and accepting sports culture.",
    imgArticle: "Images/culture_page/sport_4.jpg",
  },
  {
    nameButton: "Snowboard",
    dataTab: "tab5",
    titleArticle: "Chloe Kim Is Hitting the Slopes—This Time, for Fun",
    textArticle:
      "Chloe Kim, the two-time Olympic gold medalist in snowboarding, has taken the winter sports world by storm with her incredible talent and passion for the sport. From her early days on the slopes to becoming an ambassador for Breitling's <i>All-Star Squad,</i> Kim's journey is a testament to her dedication and achievements in the world of snowboarding.",
    imgArticle: "Images/culture_page/sport_5.jpg",
  },
  {
    nameButton: "Style",
    dataTab: "tab6",
    titleArticle: "Where To Buy The Air Jordan 2 “Soft Pink”",
    textArticle:
      "The next release in Jordan Brand's Air Jordan 2 cycle is geared towards the women's lifestyle sneaker audience. Crafted with premium materials, it features a combination of Summit White canvas and Muslin suede, with Soft Pink accents on the interior, heel, and upper edges. The tongue features exposed sponge tongue edges and a cut-out Wings logo. This women's exclusive Air Jordan 2 is set to be released on September 9th at select retailers.",
    imgArticle: "Images/culture_page/sport_6.jpg",
  },
];

const sportTabs = document.getElementById("sports_tabs");
const buttonsContainer = document.getElementById("buttons_container");
sportsItems.forEach((tab, index) => {
  const buttonSport = document.createElement("button");
  buttonSport.classList.add("tab-button-sport");
  buttonSport.setAttribute("data-tab", tab.dataTab);

  if (index === 0) {
    buttonSport.classList.add("active");
  }

  buttonSport.innerHTML = `
${tab.nameButton}
`;

  buttonsContainer.appendChild(buttonSport);
});

const sportsContainer = document.getElementById("sports_container");

sportsItems.forEach((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("tab-sport");
  itemDiv.id = item.dataTab;

  itemDiv.innerHTML = `
	    <div class="tab-sport-img">
        <img src="${item.imgArticle}" alt="${item.titleArticle}">
      </div>

	    <div class="tab-sport-content">
	        <h4>${item.titleArticle}</h4>
	        <p>${item.textArticle}</p>
	    </div>
	`;

  sportTabs.appendChild(itemDiv);
});

const tabButtons = document.querySelectorAll(".tab-button-sport");
const tabContents = document.querySelectorAll(".tab-sport");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Desactivar la clase 'active' en todos los botones y ocultar los contenidos de tabs
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => (content.style.display = "none"));

    // Obtener el ID del tab activo y mostrar su contenido correspondiente
    const tabId = button.dataset.tab;
    const tabContent = document.getElementById(tabId);

    button.classList.add("active");
    tabContent.style.display = "block";
  });
});

// Mostrar el contenido del primer tab al cargar la página
tabButtons[0].click();

//SHOWTIME TREASURES
const movies = [
  {
    title: "Everything We Know About the 'Taylor Swift: Eras Tour' Film",
    image: "/Images/culture_page/movie_1.jpg",
    text: "For fans (or the casually curious) who couldn't make it to Taylor Swift's Eras Tour concert series this summer, there's good news: there's a movie coming out that showcases the big event. The concert documentary was directed by Sam Wrench, known for their work on Billie Eilish Live at the O2 and Lizzo: Live in Concert.  <br />Taylor Swift: The Eras Tour the film was announced on August 31, and here's everything you need to know to see the movie in theaters.  <br />What is Taylor Swift: The Eras Tour about? <br />Well, obviously it's about the concert series, but more specifically, the filming for the movie took place during three shows at SoFi Stadium in Inglewood, California.<br />When will Taylor Swift: The Eras Tour be released?<br />The movie will be out in theaters only on Friday, October 13, 2023.",
  },
  {
    title: "How Much Margot Robbie Is Getting Paid for Barbie",
    image: "/Images/culture_page/movie_2.jpg",
    text: "Margot Robbie served as a producer on Barbie long before she was cast in the titular role of the now $1.18 billion-plus grossing film. And the paycheck for all her work on- and off-camera, Variety reports, is legitimately staggering.<br /> Three individuals with knowledge of the deal told the outlet that Robbie is set to make roughly $50 million in salary and box office bonuses for her work on the film. Her production company LuckyChap Entertainment acquired rights to the Barbie IP years before the film ultimately came out.<br />Robbie spoke about that process, saying: It wasn’t that I ever wanted to play Barbie, or dreamt of being Barbie, or anything like that. This is going to sound stupid, but I really didn’t even think about playing Barbie until years into developing the project.",
  },
  {
    title: "Read Olivia Rodrigo’s ‘Lacy’ Lyrics",
    image: "/Images/culture_page/movie_3.jpg",
    text: "On her new album Guts, Olivia Rodrigo delivers a new collection of devastating hits, and “Lacy” is certainly one of them. The fourth track on the new album, right after her lead single “Vampire,” is an aching ballad about obsessing over, envying, and adoring another girl.<br /> In the verses, she sings about a “dazzling starlet, Bardot reincarnate” with “skin like puff pastry” and “eyes white as daisies.” It's a person she can't stay away from: “I see you everywhere / The sweetest torture one could bear,” she says in the chorus.<br /> Rodrigo sums up her feelings best in the closing lines: “Lacy, oh, Lacy / I just loathe you lately / And I despise my jealous eyes and how hard they fell for you / Yeah, I despise my rotten mind and how much it worships you.”",
  },
  {
    title:
      "Megan Thee Stallion Is a Bombshell in a Sheer Corset Dress at the 2023 MTV VMAs",
    image: "/Images/culture_page/movie_4.jpg",
    text: "Megan Thee Stallion brought a little heat to the 2023 MTV VMAs, stepping out in a black custom Brandon Blackwood NYC corset gown. She accessorized the sheer dress with a statement diamond choker and bracelet, making it a truly luxe look for the singer, who’s performing at the awards show with Cardi B. They will put on the first live performance of their new single, “Bongos. <br /> Megan is a VMAs nominee, too. Her song “Her” is up for best music video direction, best art direction, and best choreography.<br /> Recently, Cardi spoke to SiriusXM’s Swaggy Sie about the inspiration for “Bongos,” explaining why the song works better as a collaboration with Megan, as opposed to just a solo track.”",
  },
];

const moviesContainer = document.getElementById("tvMovies_main");

movies.forEach((movie, index) => {
  const divMovie = document.createElement("div");
  divMovie.classList.add("tvMovies_card");

  divMovie.innerHTML = `
  <div class="tvMovies_card_img">
      <img src="${movie.image}" alt="${movie.title}" />
  </div>

  <div class="tvMovies_card_content">
      <h4 class="text-[20px] mb-1 font-extrabold">
          ${movie.title}
      </h4>
      <p class="text-justify text-[12px]">
          ${movie.text}
      </p>
  </div>
`;

  moviesContainer.appendChild(divMovie);
});

//INSPIRARTION INSIGHTS
const artsItems = [
  {
    title: "Food",
    items: [
      {
        title:
          "Kraft Is Introducing ‘Candy Mac & Cheese’ for Valentine’s Day, as if We Need More to Fear",
        img: "Images/culture_page/art_1_1.jpg",
        text: "Kraft's latest Valentine's Day offering, <i>Candy Kraft Mac & Cheese,</i> takes comfort food to a bizarre level by introducing a candy flavor packet to their beloved mac and cheese, turning it pink and infusing it with sweet candy flavor. While it may be a marketing stunt, the concept of combining artificial cheddar with a hint of sugary candy flavor leaves many scratching their heads. ",
      },
      {
        title:
          "“Yvette Mayorga: Dreaming of You” at the Aldrich Contemporary Art Museum",
        img: "Images/culture_page/art_1.jpg",
        text: "Claire Ptak's <i>Love Is a Pink Cake</i> and Mary Berry's <i>Baking Bible</i>, these books reflect different aspects of British baking and culture. Ptak's book embodies a modern, multicultural, and artistic approach, while Berry's cookbook represents a traditional and nostalgic British baking style. These books not only offer recipes but also reflect the evolving landscape of Britain's culinary and cultural identity.",
      },
    ],
    cardID: "2rWtm6hZqP11",
  },
  {
    title: "Restaurants",
    items: [
      {
        title:
          "Party in Pink and Press a Doorbell for Champagne at This New Houston Restaurant ",
        img: "Images/culture_page/art_2.jpg",
        text: "Dallas-based hospitality group GAP Concepts is set to open its latest restaurant, PostScript HTX, in the Shops at Arrive River Oaks in Houston. This pink-hued restaurant and cocktail lounge, housed above the Milk + Honey spa, will offer a menu created by Houston native and James Beard Award finalist Bryan Caswell. With a focus on cocktails and champagne, diners can even press doorbells for champagne delivery to their booths.",
      },
      {
        title: "Pink Restaurants Were Edgy. Now They’re  Derivative Instabait.",
        img: "Images/culture_page/art_2_2.jpg",
        text: "Pink has become a dominant color trend in restaurant design, reflecting the rise of <i>millennial pink.</i> From restaurant walls and logos to food and drinks, pink is used as visual shorthand for healthy-leaning, fashion-forward dining. The new pink, ranging from dusty blush to salmon, has taken over fashion, packaging, and interiors, making it a cross-category color trend. Designers are drawn to pink for its Instagram appeal, as pink-themed restaurants tend to attract social media attention. Pink also offers a flattering ambiance, enhancing the dining experience.",
      },
    ],
    cardID: "YJfyyd9RVvax",
  },
  {
    title: "Museum",
    items: [
      {
        title: "Freak Out Over the Museum of Ice Cream’s Sugary Pink Insides",
        img: "Images/culture_page/art_3.jpg",
        text: "The Museum of Ice Cream has opened its doors in San Francisco, attracting Instagram-loving visitors eager to experience its interactive art installation. While it provides a brief overview of ice cream history at the start, the museum focuses on creating an experiential journey rather than offering a traditional history lesson. Guides, dressed in pink attire, encourage guests to relive their childhoods and are more than happy to pose for photos or help with photography. Visitors also get to taste a variety of ice cream treats during their visit. The museum's tickets have been in high demand.",
      },
      {
        title:
          "Wildflower Cafe Opens at the Telfair Museum With Fresh Lunch Options",
        img: "Images/culture_page/art_3_3.jpg",
        text: "Chef Annie Coleman, hailing from the Lowcountry, has joined forces with Savannah-based chef Brandon Carter to launch Wildflower Cafe, a new fast-casual lunch spot set to open on March 1st. This partnership with the Telfair Museum situates the cafe in the Jepson Center's atrium, offering breathtaking views of Telfair Square. Coleman, known for her delectable desserts like the pink lemonade tart, will feature these treats alongside rotating pastries. Wildflower Cafe's menu will emphasize texturally interesting dishes, such as whole grains paired with locally sourced, seasonal vegetables. Options will range from snacks like smashed cucumbers to bowls like the citrus Caesar with satsuma and puffed grains. The cafe's partnership with the Telfair Museums will enable them to incorporate dishes that support local artists and changing exhibits. Wildflower Cafe aims to enrich the Telfair Museum's mission of connecting people of all backgrounds with food and art. In a city that has long been a cultural food hub, Coleman and Carter are excited to contribute to Savannah's evolving food scene.",
      },
    ],
    cardID: "mlo5N7zIyuy9",
  },
  {
    title: "Trends",
    items: [
      {
        title: "What Is the Pink Sauce Controversy on TikTok?",
        img: "Images/culture_page/art_4.jpg",
        text: "Pink Sauce, the viral sensation created by Chef Pii, has taken TikTok by storm with its vibrant hue and unique flavor profile, attributed to ingredients like red dragon fruit, sunflower seed oil, honey, chili, and garlic. However, this social media sensation has been marred by controversy, ranging from packaging errors to concerns about its safety and legality. While some praise its taste and versatility, others have encountered issues such as damaged bottles, questionable ingredients, and packaging discrepancies. The debate continues over whether Pink Sauce is a flavorful delight or a potentially risky condiment, leaving consumers intrigued but cautious.",
      },
      {
        title:
          "Grill’d unveils pink Barbie Dreamburger for a limited time only",
        img: "Images/culture_page/art_4_4.jpg",
        text: "Grill'd has partnered with Warner Bros. to offer a limited-time Barbie-themed menu, featuring the star of the show, the Barbie Dreamburger. This special burger includes a grass-fed beef patty, pink mayo, cheese, pineapple, avocado, tomato, lettuce, Spanish onion, and tomato sauce, all in a pink panini bun. They also offer the Barbie Bundle, which includes the Dreamburger, a pink Sodaly, and Grill'd's signature Chippies with Pink Mayo. You can enjoy this menu for a limited time. It's a chance to indulge in a unique Barbie-inspired dining experience.",
      },
    ],
    cardID: "PlxiBs8yWOKc",
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

  artItem.items.forEach((card, index_card) => {
    const divCard = document.createElement("div");
    divCard.classList.add("art_card_article");

    divCard.innerHTML = `
<div class="art_card_article_img">
    <img src="${card.img}" alt="${card.title}" draggable="false" />
</div>

<div class="art_card_article_content">
    <h4>
        ${card.title}
    </h4>
    <p>
        ${card.text}
    </p>
</div>

<div
id="arrow_${artItem.cardID}_${index}_${
      artItem.items[artItem.items.length - 1].title === card.title
        ? "top"
        : "bottom"
    }"
class="art_card_arrow art_card_arrow_${
      artItem.cardID
    }"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-7 w-7 text-[#f3b7c1] ${
      artItem.items[artItem.items.length - 1].title === card.title
        ? " art_card_arrow_upside_down"
        : ""
    }">
        <path d="m6 9 6 6 6-6" />
    </svg></div>
`;

    artCard.appendChild(divCard);
  });

  let isDragging = false,
    startY,
    startScrollTop,
    timeoutId;

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

  const arrowBtns = document.querySelectorAll(
    `.art_card_arrow_${artItem.cardID}`
  );

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      artCard.scrollTop +=
        btn.id == `arrow_${artItem.cardID}_${index}_top`
          ? startScrollTop - startY
          : -1 * (startScrollTop - startY);
    });
  });

  artCard.addEventListener("mouseenter", () => clearTimeout(timeoutId));
  artCard.addEventListener("mousedown", dragStart);
  artCard.addEventListener("mousemove", dragging);
  document.addEventListener("mouseup", dragStop);
});
