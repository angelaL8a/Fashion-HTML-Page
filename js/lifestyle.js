//LIFESTYLE PAGE - lifestyle.html
//Home & Decorating section
const cards = [
  {
    title: "See Inside Gwyneth Paltrow’s Montecito Guest House",
    image:
      "https://assets.vogue.com/photos/64c81a4fd9567128b713024c/4:3/w_640,c_limit/ID2668_7.jpg",
  },
  {
    title:
      "Inside the Surreal London Home of Artists Philip and Charlotte Colbert",
    image:
      "https://assets.vogue.com/photos/64c81cfc9392c584d37d73bd/4:3/w_640,c_limit/230215_RWG_GOD_Furniture_Lighting_GH_SET01_SHOT_01_WINDOW_SET_NaturallyElegantCraft1_729_HERO.jpg",
  },
  {
    title:
      "See Inside Mila Kunis and Ashton Kutcher’s Beachy Santa Barbara Guest House",
    image:
      "https://assets.vogue.com/photos/64dbd3743a74fead8c2428ae/4:3/w_640,c_limit/Front%20Entrance%20-%20Credit_%20Katya%20Grozovskaya.jpg",
  },
  {
    title: "How to Refresh Your Bathroom, the Easy Way",
    image:
      "https://assets.vogue.com/photos/64c82c097377bfbdd604f20b/4:3/w_640,c_limit/0412-VO-WELL65.01.jpg",
  },
  {
    title:
      "Naomi Osaka on Motherhood, Designing Her First Nursery, and Returning to Tennis",
    image:
      "https://assets.vogue.com/photos/64aedaf2f89668452743b7d7/4:3/w_640,c_limit/CB_F23_NO_02_502_Hor_032.jpg",
  },
  {
    title:
      "Inside the Surreal London Home of Artists Philip and Charlotte Colbert",
    image:
      "https://assets.vogue.com/photos/64c1920b321e5a10a0c8c9aa/4:3/w_640,c_limit/HIGH%20RES%20WIDE.jpg",
  },
];

const cardsContainer = document.getElementById(
  "cards_homedecorating_container"
);

cards.forEach((card, index) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("lifestyle_card");
  cardDiv.classList.add(`lifestyle_card_${index}`);
  cardDiv.id = `lifestyle_card_${index}`;

  cardDiv.innerHTML = `
    <div class="lifestyle_card_img cursor-pointer"><img src="${card.image}" alt=""></div>
    <div class="lifestyle_card_content cursor-pointer">${card.title}</div>

    <div id="lifestyle_modal_${index}" class="panel_close lifestyle_panel">
      <div class="lifestyle_panel_content">${card.title}</div>
    </div>
  `;

  cardsContainer.appendChild(cardDiv);

  const cardForModal = document.getElementById(`lifestyle_card_${index}`);

  cardForModal.addEventListener("click", () => {
    const modal = document.getElementById(`lifestyle_modal_${index}`);

    if (modal.className.includes("panel_open")) {
      modal.classList.remove("panel_open");
      modal.classList.add("panel_close");
    } else {
      modal.classList.remove("panel_close");
      modal.classList.add("panel_open");
    }
  });
});

// Transition in panel for hover effect in cards
