// Grid section (index.html)
const elements = [
  {
    title: "Test1",
    index: "article_img_1",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage.",
    src: "https://assets.vogue.com/photos/64b57f3cdc90cc14d7b916d9/16:9/w_1920%2Cc_limit/00-trip%2520(2).jpg",
  },
  {
    title: "Test2",
    index: "article_img_2",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage.",
    src: "https://assets.vogue.com/photos/64b57f3cdc90cc14d7b916d9/16:9/w_1920%2Cc_limit/00-trip%2520(2).jpg",
  },
  {
    title: "Test3",
    index: "article_img_3",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage.",
    src: "https://assets.vogue.com/photos/64aef1c311f7aacca57c43f2/master/w_1920,c_limit/GettyImages-1527911229.jpg",
  },
  {
    title: "Test4",
    index: "article_img_4",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage.",
    src: "https://assets.vogue.com/photos/64b57f3cdc90cc14d7b916d9/16:9/w_1920%2Cc_limit/00-trip%2520(2).jpg",
  },
  {
    title: "Test5",
    index: "article_img_5",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage.",
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
            <h4 class="uppercase font-bold">
              ${element.title}
            </h4>
            <p>${element.content}</p>
          </div>
  `;

  articlesContainer.appendChild(articleElement);
});

// Models Section
const models = [
  {
    title: "Naomi Campbell",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage, thanks to the co-hosts—Edward Enninful, the editor-in-chief of British Vogue and European editorial director of Vogue, Han Chong, the founder and creative director of Self-Portrait. editorial director of Vogue, Han Chong, the founder and creative director of Self-Portrait.",
    image:
      "https://assets.vogue.com/photos/643c538f7e76a5018e56f53e/4:3/w_640,c_limit/GettyIma3ges-1147442024%20(1).jpeg",
    size: "tiny",
  },
  {
    title: "Naomi Campbell",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage, thanks to the co-hosts—Edward Enninful, the editor-in-chief of British Vogue and European editorial director of Vogue, Han Chong, the founder and creative director of Self-Portrait, and Emily Ratajkowski. The guest list was nothing short of impressive, featuring the likes of Rita Ora, Michaela Jaé Rodrigues, Hari Nef, and British Vogue’s August cover girl Maya Jama. Ratajkowski’s all-black summer look, however, stood out amidst the sea of glimmering, colorful dresses.",
    image:
      "https://assets.vogue.com/photos/643c538f7e76a5018e56f53e/4:3/w_640,c_limit/GettyIma3ges-1147442024%20(1).jpeg",
    size: "big",
  },
  {
    title: "Naomi Campbell",
    content:
      "The annual British Vogue X Self-Portrait soirée in London is perpetually a magnet for fashion insiders and A-listers. This year was no different, with the event receiving stellar patronage, thanks to the co-hosts—Edward Enninful, the editor-in-chief of British Vogue and European editorial director of Vogue, Han Chong, the founder and creative director of Self-Portrait. editorial director of Vogue, Han Chong, the founder and creative director of Self-Portrait.",
    image:
      "https://assets.vogue.com/photos/643c538f7e76a5018e56f53e/4:3/w_640,c_limit/GettyIma3ges-1147442024%20(1).jpeg",
    size: "tiny",
  },
];

const modelsSection = document.getElementById("sizesCards_container");

models.forEach((model) => {
  const modelElement = document.createElement("div");
  modelElement.classList.add("sizesCard");
  modelElement.classList.add(`${model.size}`);

  modelElement.innerHTML = `
    <div>
      <img
        src="${model.image}"
        alt=""
      />
    </div>

    <div class="sizesCard_content">
      <h4 class="uppercase font-bold">${model.title}</h4>
      <p>
        ${model.content}
      </p>
    </div>
  `;

  modelsSection.appendChild(modelElement);
});

// Trending Models section
const trending = [
  {
    name: "Ice Spice",
    dataTab: "tab1",
    cards: [
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
    ],
  },
  {
    name: "Kendall Jenner",
    dataTab: "tab2",
    cards: [
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
    ],
  },
  {
    name: "Gigi Hadid",
    dataTab: "tab3",
    cards: [
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
    ],
  },
  {
    name: "Linda Eangelista",
    dataTab: "tab4",
    cards: [
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
    ],
  },
  {
    name: "Ashley Graham",
    dataTab: "tab5",
    cards: [
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
      },
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
      },
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
      },
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
      },
    ],
  },
  {
    name: "Bella Hadid",
    dataTab: "tab6",
    cards: [
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
      },
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
      },
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
      },
      {
        title: "Maternity Versace? Ashley Graham Says, Why Not!",
        image:
          "https://assets.vogue.com/photos/5fe200e6a16e61c4d9cb38c7/master/w_1920,c_limit/00_story%20(1).gif",
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
      <div>
        <img
          src="${card.image}"
          alt=""
        />
      </div>

      <div>
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

//MEET THE 10 STANDOUT MODELS OF FALL 2023
const modelsDiscover = [
  {
    name: "Kendal Jenner",
    img: "https://assets.vogue.com/photos/6418c85246d1a1c58bdf0f66/4:3/w_1920,c_limit/2023%20Messika%20Brand%20Campaign%20-%20Kendall%20Jenner%20-%20D-Vibes%20Collection%20%E2%94%AC%E2%8C%90%20Chris%20Colls%20copy.jpg",
    content:
      "Con más de 100 millones de seguidores en su cuenta de Instagram , Kendall Jenner se ha convertido en una de las personalidades más buscadas por los objetivos de medio mundo y en una de las principales representantes del fenómeno de las 'supermodelos sociales' . La buscan, casi por igual, paparazzi y fotógrafos de moda, marcas, followers y revistas de tendencias. Hija del medallista olímpico estadounidense que ganó el decatlón para su país en los juegos del 76, Bruce Jenner, y de Kris Jenner, una azafata de vuelo casada en primeras nupcias con el abogado de O. J. Simpso n, Robert Kardashian, debe su salto a la fama al reality televisivo Keeping Up with the Kardashians, un programa de telerrealidad en el que ella, sus padres, su hermana menor Kylie –ambas fruto del matrimonio de estos– y sus hermanastros Kim , Khloé y Kourntey Kardashian exponían, sin tapujos, sus intimidades. El reality, que emitía la cadena E!, permaneció en antena 20 temporadas durante 14 años .",
  },
  {
    name: "Gigi Hadid",
    img: "https://assets.vogue.com/photos/6418c85246d1a1c58bdf0f66/4:3/w_1920,c_limit/2023%20Messika%20Brand%20Campaign%20-%20Kendall%20Jenner%20-%20D-Vibes%20Collection%20%E2%94%AC%E2%8C%90%20Chris%20Colls%20copy.jpg",
    content:
      "Con más de 100 millones de seguidores en su cuenta de Instagram , Kendall Jenner se ha convertido en una de las personalidades más buscadas por los objetivos de medio mundo y en una de las principales representantes del fenómeno de las 'supermodelos sociales' . La buscan, casi por igual, paparazzi y fotógrafos de moda, marcas, followers y revistas de tendencias. Hija del medallista olímpico estadounidense que ganó el decatlón para su país en los juegos del 76, Bruce Jenner, y de Kris Jenner, una azafata de vuelo casada en primeras nupcias con el abogado de O. J. Simpso n, Robert Kardashian, debe su salto a la fama al reality televisivo Keeping Up with the Kardashians, un programa de telerrealidad en el que ella, sus padres, su hermana menor Kylie –ambas fruto del matrimonio de estos– y sus hermanastros Kim , Khloé y Kourntey Kardashian exponían, sin tapujos, sus intimidades. El reality, que emitía la cadena E!, permaneció en antena 20 temporadas durante 14 años .",
  },
  {
    name: "Bella Hadid",
    img: "https://assets.vogue.com/photos/6418c85246d1a1c58bdf0f66/4:3/w_1920,c_limit/2023%20Messika%20Brand%20Campaign%20-%20Kendall%20Jenner%20-%20D-Vibes%20Collection%20%E2%94%AC%E2%8C%90%20Chris%20Colls%20copy.jpg",
    content:
      "Con más de 100 millones de seguidores en su cuenta de Instagram , Kendall Jenner se ha convertido en una de las personalidades más buscadas por los objetivos de medio mundo y en una de las principales representantes del fenómeno de las 'supermodelos sociales' . La buscan, casi por igual, paparazzi y fotógrafos de moda, marcas, followers y revistas de tendencias. Hija del medallista olímpico estadounidense que ganó el decatlón para su país en los juegos del 76, Bruce Jenner, y de Kris Jenner, una azafata de vuelo casada en primeras nupcias con el abogado de O. J. Simpso n, Robert Kardashian, debe su salto a la fama al reality televisivo Keeping Up with the Kardashians, un programa de telerrealidad en el que ella, sus padres, su hermana menor Kylie –ambas fruto del matrimonio de estos– y sus hermanastros Kim , Khloé y Kourntey Kardashian exponían, sin tapujos, sus intimidades. El reality, que emitía la cadena E!, permaneció en antena 20 temporadas durante 14 años .",
  },
  {
    name: "Ashley Graham",
    img: "https://assets.vogue.com/photos/6418c85246d1a1c58bdf0f66/4:3/w_1920,c_limit/2023%20Messika%20Brand%20Campaign%20-%20Kendall%20Jenner%20-%20D-Vibes%20Collection%20%E2%94%AC%E2%8C%90%20Chris%20Colls%20copy.jpg",
    content:
      "Con más de 100 millones de seguidores en su cuenta de Instagram , Kendall Jenner se ha convertido en una de las personalidades más buscadas por los objetivos de medio mundo y en una de las principales representantes del fenómeno de las 'supermodelos sociales' . La buscan, casi por igual, paparazzi y fotógrafos de moda, marcas, followers y revistas de tendencias. Hija del medallista olímpico estadounidense que ganó el decatlón para su país en los juegos del 76, Bruce Jenner, y de Kris Jenner, una azafata de vuelo casada en primeras nupcias con el abogado de O. J. Simpso n, Robert Kardashian, debe su salto a la fama al reality televisivo Keeping Up with the Kardashians, un programa de telerrealidad en el que ella, sus padres, su hermana menor Kylie –ambas fruto del matrimonio de estos– y sus hermanastros Kim , Khloé y Kourntey Kardashian exponían, sin tapujos, sus intimidades. El reality, que emitía la cadena E!, permaneció en antena 20 temporadas durante 14 años .",
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
      <h1>${mod.content}</h1>
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

//Explore by topic section
const topics = [
  {
    name: "Ice Spice",
    dataTab: "clothingTab1",
    cards: [
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title:
          "A First Look at Kendall Jenner as the New Face of L’Oréal Paris",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
    ],
  },
  {
    name: "Kendall Jenner",
    dataTab: "clothingTab2",
    cards: [
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
      {
        title: "A Classic Carrie Bradshaw Look Lives Again, Thanks to Kendall",
        image:
          "https://assets.vogue.com/photos/64b695a1dc90cc14d7b918af/3:4/w_640,c_limit/VOGUE%20KJ%20IMAGE%20FINAL%20TO%20USE.jpg",
      },
    ],
  },
  {
    name: "Gigi Hadid",
    dataTab: "clothingTab3",
    cards: [
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
    ],
  },
  {
    name: "Linda Eangelista",
    dataTab: "clothingTab4",
    cards: [
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
      },
      {
        title: "Birkenstock Fans Will Love This Gigi Hadid–Approved Shoe",
        image:
          "https://assets.vogue.com/photos/6308e235437c40c9d7958fed/master/w_1920,c_limit/GH1108_01.jpeg",
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

      <div>
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

// Explore By Topic section
const designers = [
  {
    title: "Irina Shayk Delivers the Most Literal Take on the Lingerie Trend",
    image:
      "https://assets.vogue.com/photos/64b04716346bc63165212933/4:3/w_640,c_limit/1540362456",
  },
  {
    title: "Irina Shayk Delivers the Most Literal Take on the Lingerie Trend",
    image:
      "https://assets.vogue.com/photos/64b04716346bc63165212933/4:3/w_640,c_limit/1540362456",
  },
  {
    title: "Irina Shayk Delivers the Most Literal Take on the Lingerie Trend",
    image:
      "https://assets.vogue.com/photos/64b04716346bc63165212933/4:3/w_640,c_limit/1540362456",
  },
  {
    title: "Irina Shayk Delivers the Most Literal Take on the Lingerie Trend",
    image:
      "https://assets.vogue.com/photos/64b04716346bc63165212933/4:3/w_640,c_limit/1540362456",
  },
  {
    title: "Irina Shayk Delivers the Most Literal Take on the Lingerie Trend",
    image:
      "https://assets.vogue.com/photos/64b04716346bc63165212933/4:3/w_640,c_limit/1540362456",
  },
  {
    title: "Irina Shayk Delivers the Most Literal Take on the Lingerie Trend",
    image:
      "https://assets.vogue.com/photos/64b04716346bc63165212933/4:3/w_640,c_limit/1540362456",
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

    <div class="face back">
      <h3>Japan</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius harum molestiae iste, nihil doloribus fugiat distinctio ducimus maxime totam nulla fuga odio non aperiam eos?</p>
    </div>
  `;

  latestContainer.appendChild(itemDiv);
});
