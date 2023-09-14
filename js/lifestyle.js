//LIFESTYLE PAGE - lifestyle.html
//Home & Decorating section
const cards = [
  {
    title: "PINKCOCO ULUWATU",
    image: "Images/lifestyle_page/elegant_1.jpg",
    content:
      "Located in Uluwatu, Bali, a stone’s throw away from the famous Padang-Padang surf breaks. We have created 28 rooms, just 5 minutes walk from the beach. Wake up to the sound of the ocean in our contemporary-chic lodgings, and hit the waves or explore what Bali has to offer. Experience sunset along one of the most beautiful beachfront in Bali. Lounge under the stars by our pool and dine at our award winning Tapas del Mar.Make your next destination Pink!",
  },
  {
    title:
      "Unprecedented interest in the Paris Region during Olympic Games Paris 2024",
    image: "Images/lifestyle_page/elegant_2.jpg",
    content:
      "Airbnb has reported a significant increase in interest in the Paris Region ahead of the Paris 2024 Olympics, with listings available during the Games being viewed over 100 times more than the previous year, a 10,000% increase. Searches for stays in the Paris Region during the Olympics have increased by over 30% in the second quarter of 2023 compared to the first quarter. Local hosts are expected to benefit from the surge in bookings, and nearly 20% of inhabitants in Ile-de-France who do not currently rent their homes on Airbnb plan to become hosts during the Games. The most viewed neighborhoods in the Paris Region include the 18th, 15th, 11th, 10th, and 19th arrondissements. Interest in these areas indicates that neighborhoods outside the main tourist areas are likely to benefit the most from the influx of visitors during Paris 2024.",
  },
  {
    title:
      "Barbie’s Malibu DreamHouse is back on Airbnb – but this time, Ken’s hosting",
    image: "Images/lifestyle_page/elegant_3.jpg",
    content:
      "This summer, Ken is taking over Barbie's iconic Malibu DreamHouse on Airbnb, celebrating the release of the BARBIE film. Ken, played by Ryan Gosling, is hosting two individual one-night stays in his bedroom for up to two guests each on July 21 and July 22, 2023. The stays are free of charge, and guests can enjoy various activities, including exploring Ken's wardrobe, dancing on the outdoor disco dance floor, relaxing by the infinity pool, and taking home a set of yellow-and-pink Impala skates and surfboards. Reservations can be requested starting July 17 at 10:00 AM PT on Airbnb's website, and guests are responsible for their own travel to and from Malibu. In honor of the BARBIE film release and to support girls' empowerment, Airbnb will make a one-time donation to Save the Children.",
  },
  {
    title: "Homes to Help You Recharge This Month",
    image: "Images/lifestyle_page/elegant_6.jpg",
    content:
      "If you're feeling restless and in need of relaxation, Airbnb offers options for rejuvenation, whether through an online experience or renting a local home. You can meditate to manifest gratitude and happiness in Mexico, enjoy a Spanish-style casita in Hollywood with a saltwater pool, learn about traditional Haitian healing and houseplants in New York, escape to a private cabin in Hudson with stunning views, explore astrology to create abundance in Miami, or unwind in a cozy bungalow in Atlanta. Whatever your choice, these options provide relaxation and rejuvenation close to home.",
  },
  {
    title: "Blooming this spring: Duo travel and city breaks",
    image: "Images/lifestyle_page/elegant_4.jpg",
    content:
      "US travelers are planning their spring break getaways, with a focus on historic cities, small beach towns, and adventure destinations. International travel is on the rise, with top trending destinations for US guests this spring including Rome, Italy; Seoul, South Korea; London, United Kingdom; Porto, Portugal; and Barcelona, Spain. Domestically, cities like Augusta, Georgia, and Indianapolis, Indiana, are popular due to major sporting events like The Masters golf tournament and the Final Four NCAA championship game. Beach towns and warm-weather destinations are also trending, with Virginia Beach, Tampa, and St. Petersburg among the top choices. The most booked categories for spring travel on Airbnb include Amazing Pools, Beach, Iconic Cities, Surfing, Skiing, and Golfing. Affordable wishlisted homes for spring break are also available for under $100 in many trending destinations.",
  },
  {
    title: "Yuvraj Singh is hosting an stay at his Goa home",
    image: "Images/lifestyle_page/elegant_5.jpg",
    content:
      "International cricket legend Yuvraj Singh is becoming an Airbnb Host and offering an exclusive two-night stay for six guests at his home in Goa, India. The hilltop villa boasts stunning views of the sea and is decorated with meaningful keepsakes from Singh's cricket career. The home will be available for INR 1212 per night, coinciding with Singh's birthday and jersey number. Guests will have the opportunity to experience Goa and stay in a cricket legend's personal retreat. The booking is available for October 14-16, 2022, and can be reserved on Airbnb's website.",
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
    title: "ELAN Café",
    image: "Images/lifestyle_page/rest_1.jpg",
  },
  {
    title: "Odette",
    image: "Images/lifestyle_page/rest_2.jpg",
  },
  {
    title: "Annabel's",
    image: "Images/lifestyle_page/rest_3.jpg",
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
