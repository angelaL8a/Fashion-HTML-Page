//LIFESTYLE PAGE - lifestyle.html
//Home & Decorating section
const cards = [
  {
    title: "See Inside Gwyneth Paltrow’s Montecito Guest House",
    image:
      "https://assets.vogue.com/photos/64c81a4fd9567128b713024c/4:3/w_640,c_limit/ID2668_7.jpg",
    content:
      "Atrás quedaron el pelo rosa efecto lavado de Florence Pugh o el tono Cherry Coke de Katie Holmes; las tendencias en color de pelo de otoño-invierno 2023 nos traen coloraciones mucho más naturales y universalmente favorecedoras. “Al igual que estos últimos años hemos percibido cómo el cuidado de la piel recibe una gran atención, con la coloración capilar sucede algo semejante, con tonalidades orgánicas que realzan los matices de la piel, variando para adaptarse del subtono más dorado al rosado.",
  },
  {
    title:
      "Inside the Surreal London Home of Artists Philip and Charlotte Colbert",
    image:
      "https://assets.vogue.com/photos/64c81cfc9392c584d37d73bd/4:3/w_640,c_limit/230215_RWG_GOD_Furniture_Lighting_GH_SET01_SHOT_01_WINDOW_SET_NaturallyElegantCraft1_729_HERO.jpg",
    content:
      "Atrás quedaron el pelo rosa efecto lavado de Florence Pugh o el tono Cherry Coke de Katie Holmes; las tendencias en color de pelo de otoño-invierno 2023 nos traen coloraciones mucho más naturales y universalmente favorecedoras. “Al igual que estos últimos años hemos percibido cómo el cuidado de la piel recibe una gran atención, con la coloración capilar sucede algo semejante, con tonalidades orgánicas que realzan los matices de la piel, variando para adaptarse del subtono más dorado al rosado.",
  },
  {
    title:
      "See Inside Mila Kunis and Ashton Kutcher’s Beachy Santa Barbara Guest House",
    image:
      "https://assets.vogue.com/photos/64dbd3743a74fead8c2428ae/4:3/w_640,c_limit/Front%20Entrance%20-%20Credit_%20Katya%20Grozovskaya.jpg",
    content:
      "Atrás quedaron el pelo rosa efecto lavado de Florence Pugh o el tono Cherry Coke de Katie Holmes; las tendencias en color de pelo de otoño-invierno 2023 nos traen coloraciones mucho más naturales y universalmente favorecedoras. “Al igual que estos últimos años hemos percibido cómo el cuidado de la piel recibe una gran atención, con la coloración capilar sucede algo semejante, con tonalidades orgánicas que realzan los matices de la piel, variando para adaptarse del subtono más dorado al rosado.",
  },
  {
    title: "How to Refresh Your Bathroom, the Easy Way",
    image:
      "https://assets.vogue.com/photos/64c82c097377bfbdd604f20b/4:3/w_640,c_limit/0412-VO-WELL65.01.jpg",
    content:
      "Atrás quedaron el pelo rosa efecto lavado de Florence Pugh o el tono Cherry Coke de Katie Holmes; las tendencias en color de pelo de otoño-invierno 2023 nos traen coloraciones mucho más naturales y universalmente favorecedoras. “Al igual que estos últimos años hemos percibido cómo el cuidado de la piel recibe una gran atención, con la coloración capilar sucede algo semejante, con tonalidades orgánicas que realzan los matices de la piel, variando para adaptarse del subtono más dorado al rosado.",
  },
  {
    title:
      "Naomi Osaka on Motherhood, Designing Her First Nursery, and Returning to Tennis",
    image:
      "https://assets.vogue.com/photos/64aedaf2f89668452743b7d7/4:3/w_640,c_limit/CB_F23_NO_02_502_Hor_032.jpg",
    content:
      "Atrás quedaron el pelo rosa efecto lavado de Florence Pugh o el tono Cherry Coke de Katie Holmes; las tendencias en color de pelo de otoño-invierno 2023 nos traen coloraciones mucho más naturales y universalmente favorecedoras. “Al igual que estos últimos años hemos percibido cómo el cuidado de la piel recibe una gran atención, con la coloración capilar sucede algo semejante, con tonalidades orgánicas que realzan los matices de la piel, variando para adaptarse del subtono más dorado al rosado.",
  },
  {
    title:
      "Inside the Surreal London Home of Artists Philip and Charlotte Colbert",
    image:
      "https://assets.vogue.com/photos/64c1920b321e5a10a0c8c9aa/4:3/w_640,c_limit/HIGH%20RES%20WIDE.jpg",
    content:
      "Atrás quedaron el pelo rosa efecto lavado de Florence Pugh o el tono Cherry Coke de Katie Holmes; las tendencias en color de pelo de otoño-invierno 2023 nos traen coloraciones mucho más naturales y universalmente favorecedoras. “Al igual que estos últimos años hemos percibido cómo el cuidado de la piel recibe una gran atención, con la coloración capilar sucede algo semejante, con tonalidades orgánicas que realzan los matices de la piel, variando para adaptarse del subtono más dorado al rosado.",
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

    <div class="lifestyle_card_panel cursor-pointer"></div>

    <div class="lifestyle_card_content cursor-pointer">${card.title}</div>
  `;

  const cardModal = document.createElement("div");
  cardModal.classList.add("panel_close");
  cardModal.classList.add("lifestyle_panel");
  cardModal.id = `lifestyle_modal_${index}`;
  cardModal.innerHTML = `
  <div id="lifestyle_panel_content_${index}" class="lifestyle_panel_content">
    <div class="lifestyle_panel_content_img">
      <img src="${card.image}" alt="${card.title}" />
    </div>

    <div class="lifestyle_panel_text_modal">
      <h4>${card.title}</h4>
      <p>${card.content}</p>
    </div>
  </div>
  `;

  cardsContainer.appendChild(cardDiv);
  cardsContainer.appendChild(cardModal);

  cardDiv.addEventListener("click", () => {
    if (cardModal.className.includes("panel_open")) {
      cardModal.classList.remove("panel_open");
      cardModal.classList.add("panel_close");
    } else {
      cardModal.classList.remove("panel_close");
      cardModal.classList.add("panel_open");
    }
  });

  cardsContainer.addEventListener("click", function (event) {
    let modal = document.querySelector(`#lifestyle_panel_content_${index}`);
    let button = document.querySelector(`#lifestyle_card_${index}`);

    // Check if the click is not inside the div
    if (!modal.contains(event.target) && !button.contains(event.target)) {
      const modal = document.getElementById(`lifestyle_modal_${index}`);

      modal.classList.remove("panel_open");
      modal.classList.add("panel_close");
    }
  });
});

// Travel section
const travelItems = [
  {
    title: "Everything You Need To Know About Vogue World: London",
    image:
      "https://media.vogue.es/photos/64b130f243d251bcd59d0acb/16:9/w_1600,c_limit/Slider_Stripes_5.jpg",
  },
  {
    title: "Everything You Need To Know About Vogue World: London",
    image:
      "https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    title: "Everything You Need To Know About Vogue World: London",
    image:
      "https://images.pexels.com/photos/1154638/pexels-photo-1154638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const travelContainer = document.getElementById("travel_container");

travelItems.forEach((item, index) => {
  const itemDiv = document.createElement("div");
  itemDiv.classList.add("card_travel");
  itemDiv.classList.add(`card_travel_${index}`);
  itemDiv.innerHTML = `
  <div class="card_travel_img">
      <img src="${item.image}" alt="${item.title}" />
    </div>
    <div class="card_travel_title">
      <h4>${item.title}</h4>
  </div>
  `;
  travelContainer.appendChild(itemDiv);
});

//Holidays section
const holidaysItems = [
  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },
  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },
  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },
  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },
  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },

  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },
  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },
  {
    title: "El look que me convenció de comprar una flor para el cuello",
    img: "https://media.vogue.es/photos/64c37d4c4541a298defeeed2/1:1/w_640,c_limit/_14A4439.jpg",
    content:
      "Cuando un look se convierte en un flechazo, tienes que guardarlo inmediatamente en tu galería de imágenes y hacerte con todas las piezas que sean necesarias para replicarlo. Al menos ese es el ejercicio que hacen los editores de moda de vez en cuando para darle un soplo de aire fresco a sus armarios.",
  },
];

const holidaysContainer = document.getElementById("holidays_main");

holidaysItems.forEach((item, index) => {
  const holidayDiv = document.createElement("div");
  holidayDiv.classList.add("holiday_card");
  holidayDiv.classList.add(`holiday_card_${index}`);
  holidayDiv.innerHTML = `
  <div>
    <img
      src="${item.img}"
      alt="${item.title}"
    />
  </div>

  <div class="holiday_card_content">
    <h4>${item.title}</h4>
  </div>
  `;
  holidaysContainer.appendChild(holidayDiv);
});
