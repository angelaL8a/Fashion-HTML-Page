// Grid section
const elements = [
  {
    title: "The Most Anticipated Winter Outfit: A Fashion Extravaganza",
    index: "article_img_3",
    src: "Images/fashion_page/main.jpg",
  },
  {
    title: "Fenty x Puma Is Back! Rihanna Dishes on Her New Designs",
    index: "article_img_1",
    src: "/Images/fashion_page/main_1.jpg",
  },
  {
    title:
      "The Trending Outfits For Autumn 2023 All Have Pop-To-The-Corner-Shop Energy",
    index: "article_img_2",
    src: "/Images/fashion_page/main_2.jpg",
  },
  {
    title: "Dior’s “Quiet Luxury” AW23 Haute Couture Show",
    index: "article_img_4",
    src: "/Images/fashion_page/main_3.jpg",
  },
  {
    title:
      "At Valentino, Extreme Black Eyeliner Is the Ultimate Fashion Powerhouse",
    index: "article_img_5",
    src: "/Images/fashion_page/main_4.jpg",
  },
];

const articlesContainer = document.getElementById("articles");

elements.forEach((element) => {
  const articleElement = document.createElement("div");
  articleElement.classList.add("article");
  articleElement.classList.add(`${element.index}`);

  articleElement.innerHTML = `
          <div class="article_img">
            <img src=${element.src} alt="${element.title}" />
          </div>
          <div class="article_content">
            <h4 class="uppercase font-bold text-[12px]">
              ${element.title}
            </h4>
          </div>
  `;

  articlesContainer.appendChild(articleElement);
});

//////////////////////////////////////////////////////////////////////////////
// Latest in Models Section
const models = [
  {
    title:
      "Gisele Returns to the Red Carpet in Archival Chanel at the Met Gala 2023",
    content:
      "The Brazilian supermodel’s ethereal dress—cut from white silk tulle and embroidered with vertical stripes of sequins—was the bridal look in Karl Lagerfeld’s spring 2007 Chanel couture show. While the look was originally worn on the runway by Freja Beha Erichsen, Bündchen wore it for a fashion editorial that same year. Speaking to the Met Gala’s red carpet host La La Anthony, Bündchen said that she saw the design, remembered having worn it for a shoot, and immediately thought: “This is the one.”",
    image: "Images/fashion_page/models_1.jpg",
    size: "tiny",
  },
  {
    title: "Marion Cotillard Debuts Punk Pink Hair at the Met Gala 2023",
    content:
      "When considering Karl Lagerfeld’s iconic runway stylings, an assemblage of textured touches come to mind. Ribbons? Often. Pearls? Always. And feathers? A luxurious must. Marion Cotillard opted to channel the spirit of the feather finish for the 2023 Met Gala; her medium-length brunette switched for a pink mop top piecey enough to mimic thin strands of plumage.",
    image: "Images/fashion_page/models_2.jpg",
    size: "big",
  },
  {
    title: "Kate Moss and Lila Moss Wear Coordinating to the 2023 Met Gala",
    content:
      "There are few attendees as well equipped to deliver a meaningful mother-daughter moment on the Met Gala red carpet as Kate and Lila Moss. Tonight, while walking the steps of the Metropolitan Museum of Art in New York, the Mosses wore Fendi couture gowns by Kim Jones. As with so many of tonight’s looks, their gowns served as a subtle homage to Karl Lagerfeld, whose work is celebrated in this year’s exhibition, “Karl Lagerfeld: A Line of Beauty”.",
    image: "Images/fashion_page/models_3.jpg",
    size: "tiny",
  },
];

const modelsSection = document.getElementById("sizesCards_container");

models.forEach((model) => {
  const modelElement = document.createElement("div");
  modelElement.classList.add("sizesCard");
  modelElement.classList.add(`${model.size}`);

  modelElement.innerHTML = `
    <div class="sizesCard_img">
      <img
        src="${model.image}"
        alt=""
      />
    </div>

    <div class="sizesCard_content">
      <h4 class="uppercase font-bold text-[17px]">${model.title}</h4>
      <p>
        ${model.content}
      </p>
    </div>
  `;

  modelsSection.appendChild(modelElement);
});

//////////////////////////////////////////////////////////////////////////////
// Trending Models section
const trending = [
  {
    name: "Hailey Bieber",
    dataTab: "tab1",
    cards: [
      {
        title: "Hailey Bieber Shows How to Elevate Sporty Staples",
        image: "Images/fashion_page/hailey_1.jpg",
      },
      {
        title:
          "A Shoppable Ode to Hailey Bieber’s Oversized Outerwear Obsession",
        image: "Images/fashion_page/hailey_2.jpg",
      },
      {
        title:
          "The Easy Way to Achieve Hailey Bieber’s “Strawberry Girl” Flush",
        image: "Images/fashion_page/hailey_3.jpg",
      },
      {
        title: "Hailey Bieber’s Vintage Jorts Are Her New Hot-Weather Staple",
        image: "Images/fashion_page/hailey_4.jpg",
      },
    ],
  },
  {
    name: "Emily Ratajkowski",
    dataTab: "tab2",
    cards: [
      {
        title: "Emily Ratajkowski Wears 3Trends All At Once",
        image: "Images/fashion_page/emily_1.jpg",
      },
      {
        title: "EmRata’s Abs Say Summer Is Almost Here",
        image: "Images/fashion_page/emily_2.jpg",
      },
      {
        title:
          "Gigi Hadid’s Met Gala Looks Have Always Been About the Transformation",
        image: "Images/fashion_page/emily_3.jpg",
      },
      {
        title:
          "How to Make Your Wardrobe Cozy and Presentable, According to Gigi Hadid",
        image: "Images/fashion_page/emily_4.jpg",
      },
    ],
  },
  {
    name: "Jennifer Lawrence",
    dataTab: "tab3",
    cards: [
      {
        title: "Jennifer Lawrence Brings Bombshell Glamour to Cannes",
        image: "Images/fashion_page/jennifer_1.jpg",
      },
      {
        title: "Jennifer Lawrence’s Perfect Summer Shoe Takes Cue From Barbie",
        image: "Images/fashion_page/jennifer_2.jpg",
      },
      {
        title: "Jennifer Lawrence Perfects Understated New Yorker Style",
        image: "Images/fashion_page/jennifer_3.jpg",
      },
      {
        title: "Jennifer Lawrence Is On Board With This Surprising Summer Shoe",
        image: "Images/fashion_page/jennifer_4.jpg",
      },
    ],
  },
  {
    name: "Naomi Campbell",
    dataTab: "tab4",
    cards: [
      {
        title:
          "Palm Angels Recruits Naomi Campbell—and Remixes Tod’s—for Its Latest Moncler Genius Collection",
        image: "Images/fashion_page/naomi_1.jpg",
      },
      {
        title:
          "Naomi Campbell Jump-Starts New York Fashion Week With Her First Collection for PrettyLittleThing",
        image: "Images/fashion_page/naomi_3.jpg",
      },
      {
        title:
          "Naomi Campbell Reminded Everyone What “Supermodel” Means at Paris Fashion Week",
        image: "Images/fashion_page/naomi_2.jpg",
      },
      {
        title:
          "In Paris, Naomi Campbell and MatchesFashion Feted Steven Klein’s New Book",
        image: "Images/fashion_page/naomi_4.jpg",
      },
    ],
  },
];

const modelTabs = document.getElementById("tabs");

trending.forEach((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("tab-content");
  itemDiv.id = item.dataTab;

  itemDiv.innerHTML = `
  <div class="tab-content-cards" id="tab-content-cards-${index}">
  </div>
  `;

  modelTabs.appendChild(itemDiv);

  const itemContainer = document.getElementById(`tab-content-cards-${index}`);

  item.cards.forEach((card) => {
    const itemChild = document.createElement("div");
    itemChild.classList.add("tab-card");

    itemChild.innerHTML = `
      <div class="tab_content_image">
        <img
          src="${card.image}"
          alt=""
        />
      </div>

      <div class="tab_card_title">
        <h4>
          ${card.title}
        </h4>
      </div>
    `;

    itemContainer.appendChild(itemChild);
  });
});

// Models section - TABS
// Obtener los elementos de los tabs y su contenido
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Asignar el evento click a los botones de tabs
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

//////////////////////////////////////////////////////////////////////////////
//H&M Studio section
const carousel = document.querySelector(".carouselFashionPage"),
  firstImg = carousel.querySelectorAll("img")[0],
  arrowIcons = document.querySelectorAll(".wrapperFashionPage i");
let isDragStart = false;
let isDragging = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;
const showHideIcons = () => {
  // showing and hiding prev/next icon according to carousel scroll left value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft == scrollWidth ? "none" : "block";
};
arrowIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
    // if clicked icon is left, reduce width value from the carousel scroll left else add to it
    carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
  });
});
const autoSlide = () => {
  // if there is no image left to scroll then return from here
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;
  positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
  let firstImgWidth = firstImg.clientWidth + 14;
  // getting difference value that needs to add or reduce from carousel left to take middle img center
  let valDifference = firstImgWidth - positionDiff;
  if (carousel.scrollLeft > prevScrollLeft) {
    // if user is scrolling to the right
    return (carousel.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }
  // if user is scrolling to the left
  carousel.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};
const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};
const dragging = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideIcons();
};
const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");
  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);
document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

//////////////////////////////////////////////////////////////////////////////
//DISCOVER MODELS section
const modelsDiscover = [
  {
    name: "Gigi Hadid",
    img: "Images/fashion_page/latest_Gigi.jpg",
    content:
      "Gigi Hadid is an American supermodel and television personality who gained widespread recognition for her striking beauty and successful modeling career. Born on April 23, 1995, in Los Angeles, California, as Jelena Noura Hadid, she comes from a family with strong connections to the fashion industry. Gigi's modeling journey began at a young age, and she quickly rose to prominence in the fashion world. Her portfolio includes campaigns for renowned fashion brands such as Victoria's Secret, Versace, and Tommy Hilfiger, among many others. Hadid is celebrated not only for her stunning looks but also for her down-to-earth personality and social media presence, which have garnered her a massive global fan base. In addition to her modeling career, she has made appearances on reality TV shows and has become a prominent figure in the world of fashion and entertainment.",
  },
  {
    name: "Kendall Jenner",
    img: "Images/fashion_page/latest_Kendal.jpg",
    content:
      "Kendall Jenner is an American model, television personality, and social media influencer. Born on November 3, 1995, in Los Angeles, Californi. Kendall began her modeling career at a young age, signing with Wilhelmina Models when she was just 14 years old. She quickly gained recognition in the fashion industry for her tall, slender frame and striking looks. Throughout her career, Kendall Jenner has walked the runways for numerous high-profile fashion brands, including Chanel, Givenchy, and Marc Jacobs. She has also graced the covers of prestigious fashion magazines like Vogue and Harper's Bazaar. In addition to her modeling success, Kendall is known for her strong presence on social media, where she has millions of followers. Her combination of beauty, fame, and influence has made her one of the most prominent figures in the world of fashion and entertainment.",
  },
  {
    name: "Bella Hadid",
    img: "Images/fashion_page/latest_Bella.jpg",
    content:
      "Bella Hadid, whose full name is Isabella Khair Hadid, is an American model known for her striking beauty and successful modeling career. She was born on October 9, 1996, in Los Angeles, California, and is the younger sister of fellow supermodel Gigi Hadid. Bella's rise to fame in the fashion world was meteoric, thanks to her unique and captivating features. \n Throughout her career, Bella Hadid has walked the runways for some of the world's most prestigious fashion houses, including Chanel, Dior, and Givenchy. She has also graced the covers of numerous fashion magazines, solidifying her status as a top model. Bella is celebrated for her versatility and ability to adapt to various fashion styles, from high fashion to streetwear.",
  },
  {
    name: "Cara Delevigne",
    img: "Images/fashion_page/latest_Cara.jpg",
    content:
      "Cara Delevingne is a British actress, model, and singer who rose to prominence in the fashion world before transitioning to a successful career in acting and music. Born on August 12, 1992, in London, England. She began her modeling career at a young age and walked the runways for numerous high-fashion brands, including Chanel, Burberry, and Dolce & Gabbana. Cara's career reached its peak during the early 2010s when she was one of the most sought-after models in the world. In addition to her modeling success, Cara Delevingne has pursued acting, appearing in films such as Paper Towns, Suicide Squad, and Valerian and the City of a Thousand Planets. She has received acclaim for her performances and has become a respected figure in the entertainment industry. Cara has also ventured into music and released her own songs.",
  },
];

const modelsDiscoverContainer = document.getElementById(
  "models_discover_container"
);

modelsDiscover.forEach((mod, index) => {
  const modelDiscoverDiv = document.createElement("div");
  modelDiscoverDiv.classList.add("models_discover_card");

  modelDiscoverDiv.innerHTML = `
  <div class="models_discover_card_image" id="models_discover_card_image_${index}">
    <img
      src="${mod.img}"
      alt="${mod.name}"
    />

    <div class="models_discover_card_panel">
    </div>
  </div>

  <h4 class="models_discover_card_content font-medium">
    ${mod.name}
  </h4>

  <div id="models_modal_${index}" class="modal modal_close">
    <div id="models_modal_${index}_content" class="modal_content">
      <div class="sticky top-0 bg-white/80 backdrop-blur p-5 border-b dark:bg-background dark:border-border">
        <h1>${mod.name}</h1>
      </div>
      
     <div class="p-5">
      <div class="my-4">
        <img src="${mod.img}">
      </div>

      <p class="text-justify" >${mod.content}</p>
     </div>
    </div>
  </div>
  `;

  modelsDiscoverContainer.appendChild(modelDiscoverDiv);

  const modalButton = document.getElementById(
    `models_discover_card_image_${index}`
  );

  modalButton.addEventListener("click", () => {
    const modalContent = document.getElementById(
      `models_modal_${index}_content`
    );
    modalContent.classList.add("animated-modal");

    const modal = document.getElementById(`models_modal_${index}`);

    if (modal.className.includes("modal_open")) {
      modal.classList.remove("modal_open");
      modal.classList.add("modal_close");
    } else {
      modal.classList.remove("modal_close");
      modal.classList.add("modal_open");
    }
  });

  modelsDiscoverContainer.addEventListener("click", function (event) {
    let modal = document.querySelector(`#models_modal_${index}_content`);
    let button = document.querySelector(`#models_discover_card_image_${index}`);

    // Check if the click is not inside the div
    if (!modal.contains(event.target) && !button.contains(event.target)) {
      const modal = document.getElementById(`models_modal_${index}`);

      modal.classList.remove("modal_open");
      modal.classList.add("modal_close");
    }
  });
});

//////////////////////////////////////////////////////////////////////////////
//Explore by topic section
const topics = [
  {
    name: "Kim Jone",
    dataTab: "clothingTab1",
    cards: [
      {
        title: "The show was a through-the-floor experience",
        image: "/Images/fashion_page/topic_2_1.jpg",
      },
      {
        title: "It was romantic futurism",
        image: "/Images/fashion_page/topic_2_2.jpg",
      },
      {
        title: "It was inspired by New Wave and Blitz Kids",
        image: "/Images/fashion_page/topic_2_3.jpg",
      },
      {
        title: "It featured Chinese “ronghua” hats by Stephen Jones",
        image: "/Images/fashion_page/topic_2_4.jpg",
      },
    ],
  },
  {
    name: "Louis Vuitton",
    dataTab: "clothingTab2",
    cards: [
      {
        title: "The show took place on Isola Bella",
        image: "/Images/fashion_page/topic_1_1.jpg",
      },
      {
        title:
          "The cruise was centred around the castles of the Borromeo family",
        image: "/Images/fashion_page/topic_1_2.jpg",
      },
      {
        title: "It was a wardrobe for time-travelling ballroom divers",
        image: "/Images/fashion_page/topic_1_3.jpg",
      },
      {
        title: "The show concluded with epic eveningwear",
        image: "/Images/fashion_page/topic_1_4.jpg",
      },
    ],
  },
  {
    name: "Pharell Williams",
    dataTab: "clothingTab3",
    cards: [
      {
        title: "It was all about the sun",
        image: "/Images/fashion_page/topic_3_1.jpg",
      },
      {
        title: "It was loaded with cultural significance",
        image: "/Images/fashion_page/topic_3_2.jpg",
      },
      {
        title: "It reimagined the iconography of Louis Vuitton",
        image: "/Images/fashion_page/topic_3_3.jpg",
      },
      {
        title: "It was packed with brilliant pieces",
        image: "/Images/fashion_page/topic_3_4.jpg",
      },
    ],
  },
  {
    name: "Ralph Lauren",
    dataTab: "clothingTab4",
    cards: [
      {
        title: "The set was part artist’s loft, part cowboy barn",
        image: "/Images/fashion_page/topic_4_1.jpg",
      },
      {
        title: "Everyone was there",
        image: "/Images/fashion_page/topic_4_2.jpg",
      },
      {
        title:
          "It cemented the great contradictions at the heart of Ralph Lauren",
        image: "/Images/fashion_page/topic_4_3.jpg",
      },
      {
        title: "The collection was about American contrasts",
        image: "/Images/fashion_page/topic_4_4.jpg",
      },
    ],
  },
];

const clothingTabs = document.getElementById("clothing_tabs");

topics.forEach((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("clothing-tab-content");
  itemDiv.id = item.dataTab;

  itemDiv.innerHTML = `
  <div class="tab-content-cards" id="clothing-tab-content-cards-${index}">
  </div>
  `;

  clothingTabs.appendChild(itemDiv);

  const itemContainer = document.getElementById(
    `clothing-tab-content-cards-${index}`
  );

  item.cards.forEach((card) => {
    const itemChild = document.createElement("div");
    itemChild.classList.add("tab-card");

    itemChild.innerHTML = `
      <div>
        <img
          src="${card.image}"
          alt=""
        />
      </div>

      <div class="tab_card_title">
        <h4>
          ${card.title}
        </h4>
      </div>
    `;

    itemContainer.appendChild(itemChild);
  });
});

//TABS
// Obtener los elementos de los tabs y su contenido
const clothingTabButtons = document.querySelectorAll(".clothing-tab-button");
const clothingTabContents = document.querySelectorAll(".clothing-tab-content");

// Asignar el evento click a los botones de tabs
clothingTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Desactivar la clase 'active' en todos los botones y ocultar los contenidos de tabs
    clothingTabButtons.forEach((btn) => btn.classList.remove("active"));
    clothingTabContents.forEach((content) => (content.style.display = "none"));

    // Obtener el ID del tab activo y mostrar su contenido correspondiente
    const tabId = button.dataset.tab;
    const tabContent = document.getElementById(tabId);

    button.classList.add("active");
    tabContent.style.display = "block";
  });
});

// Mostrar el contenido del primer tab al cargar la página
clothingTabButtons[0].click();

// LATEST IN DESIGNERS
const designers = [
  {
    title: "Chanel",
    image: "/Images/fashion_page/chanel_1.jpg",
    secondImage: "/Images/fashion_page/chanel_2.jpg",
    content:
      "Chanel is a renowned French luxury fashion house founded by Coco Chanel in the early 20th century. The brand is synonymous with timeless elegance, innovation, and sophistication in the world of fashion and beauty. Chanel's iconic double-C logo and its signature black-and-white color scheme have become symbols of luxury and high fashion. <br /> Coco Chanel, the founder, revolutionized women's fashion by introducing comfortable and functional clothing, such as the little black dress and the Chanel suit, which featured clean lines and a more relaxed fit compared to the rigid fashions of the time. Chanel is also famous for popularizing the use of jersey fabric in haute couture, a groundbreaking move that defied convention. <br /> Beyond clothing, Chanel has a significant presence in the fragrance and beauty industry. The brand's iconic perfume, Chanel No. 5, is one of the most famous and enduring fragrances in the world. Chanel's cosmetics and skincare lines are also highly regarded for their quality and innovation. <br /> Chanel's current creative director, Virginie Viard, continues to uphold the brand's legacy of chic and sophisticated design, while also introducing modern elements to keep the fashion house relevant in today's ever-changing fashion landscape. Chanel's influence on the fashion world remains profound, making it a symbol of timeless luxury and style.",
  },
  {
    title: "Gucci",
    image: "/Images/fashion_page/gucci.jpg",
    secondImage: "/Images/fashion_page/gucci_2.jpg",
    content:
      "Gucci is an Italian luxury fashion brand that has earned global recognition for its high-quality craftsmanship, distinctive designs, and association with luxury and glamour. Founded in 1921 by Guccio Gucci in Florence, Italy, the brand started as a small leather goods and luggage company. Over the years, Gucci has evolved into one of the world's leading luxury fashion houses. <br />Gucci is known for its iconic GG logo pattern, horsebit hardware, and use of bold colors and patterns in its designs. The brand has a rich history of creating iconic fashion pieces, including the Gucci loafer, the Jackie bag, and the Flora scarf, which have become timeless classics in the fashion world.<br /> Throughout its history, Gucci has been celebrated for its innovative and eclectic approach to design, often pushing the boundaries of conventional fashion. Under the creative direction of Alessandro Michele since 2015, Gucci has embraced a more eclectic and unconventional style, featuring a mix of vintage-inspired pieces, bold prints, and a gender-fluid approach to fashion. <br /> Gucci's product range extends beyond clothing and accessories to include fragrances, eyewear, and beauty products. The brand has a strong presence in the world of celebrity fashion, often worn by A-list stars and influencers.",
  },
  {
    title: "Fendi",
    image: "/Images/fashion_page/fendi.jpg",
    secondImage: "/Images/fashion_page/fendi_2.jpg",
    content:
      "Fendi is an Italian luxury fashion house renowned for its opulent and high-quality designs. Established in 1925 by Adele and Edoardo Fendi in Rome, Italy, Fendi began as a fur and leather shop. Over the years, it has evolved into a global fashion brand celebrated for its iconic craftsmanship and innovation.<br />Fendi is particularly renowned for its expertise in fur and leather craftsmanship, and it is credited with introducing the concept of fur ready-to-wear collections. The brand's logo, featuring two interlocking F's, has become an emblem of luxury and style.<br />Throughout its history, Fendi has collaborated with prominent designers and artists, including Karl Lagerfeld, who served as creative director for over five decades and played a pivotal role in elevating Fendi's status in the fashion world. Lagerfeld's influence brought avant-garde designs and creative concepts to the brand's collections.",
  },
  {
    title: "Bottega Veneta",
    image: "/Images/fashion_page/bottega.jpg",
    secondImage: "/Images/fashion_page/bottega_2.jpg",
    content:
      "Bottega Veneta is an Italian luxury fashion brand celebrated for its artisanal craftsmanship, minimalist design, and commitment to quality. Founded in 1966 in Vicenza, Italy, by Michele Taddei and Renzo Zengiaro, the brand has become synonymous with understated luxury and timeless elegance.<br />Bottega Veneta is best known for its distinctive weaving technique called intrecciato, which involves meticulously weaving strips of leather to create a unique and durable texture. This technique has been a hallmark of the brand and is used in various products, including handbags, shoes, and accessories.<br />The brand's philosophy is centered around a quiet luxury aesthetic, focusing on craftsmanship, quality materials, and the absence of visible logos or flashy branding. Bottega Veneta's design approach emphasizes clean lines, simple silhouettes, and a refined color palette, which appeals to those seeking a more discreet and sophisticated form of luxury.",
  },
];

const latestContainer = document.getElementById("moreInModels_container");

designers.forEach((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("moreInModels_card");
  itemDiv.innerHTML = `
    <div class="face front">
      <div class="moreInModels_image">
        <img
            src="${item.image}"
            alt="${item.title}"
            class="object-cover w-full h-full"
        />
      </div>

      <div class="moreInModels_content">
        <h4 class="font-semibold text-xl">
          ${item.title}
        </h4>
      </div>
    </div>

    <div class="face back" id="moreInModels_face_back_${index}">
      <h3>${item.title}</h3>
      <div class="moreInModels_content_face_back">
        <img
            src="${item.secondImage}"
            alt="${item.title}"
            class="object-cover w-full h-full"
        />
        <p>${item.content}</p>
      </div>
      
    </div>
  `;

  latestContainer.appendChild(itemDiv);
});
