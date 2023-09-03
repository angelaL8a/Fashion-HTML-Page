// Header
var headerElement = document.getElementById("header");
headerElement.innerHTML = `
   <div class="flex items-center gap-1">
    <button id="burger_button" class="active:bg-gray-200 p-2 rounded-full lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>

    <a href="/" class="header_logo">Logo</a>
  </div>

  <div class="header_links" id="header_links"></div>

  <div class="header_search">Search</div> 
`;

// Header links
const categories = [
  {
    name: "Fashion",
    href: "fashion.html",
    sub_cat: [
      { name: "Models", href: "fashion.html#models" },
      { name: "Clothing", href: "fashion.html#clothing_tabs" },
      { name: "Designers & Trends", href: "fashion.html#designers" },
    ],
  },
  {
    name: "Beauty",
    href: "beauty.html",
    sub_cat: [
      { name: "Celebrity", href: "beauty.html#glamour&Glow" },
      { name: "Latest in Fashion", href: "beauty.html#magazines_Section" },
      { name: "Makeup & Skincare", href: "beauty.html#tips_Section" },
    ],
  },
  {
    name: "Culture",
    href: "culture.html",
    sub_cat: [
      { name: "TV & Movies", href: "culture.html#showtime_treasures" },
      { name: "Arts", href: "culture.html#art_section" },
      { name: "Sports", href: "culture.html#sports_section" },
    ],
  },
  {
    name: "Lifestyle",
    href: "lifestyle.html",
    sub_cat: [
      { name: "Home & Decorating", href: "lifestyle.html#home_decorating" },
      { name: "Travel", href: "lifestyle.html#travel" },
      { name: "Holidays", href: "lifestyle.html#holidays" },
    ],
  },
];

const categoriesContainer = document.getElementById("header_links");

categories.forEach((item, index) => {
  const itemElement = document.createElement("div");
  itemElement.classList.add("header_link");
  itemElement.classList.add("group");
  itemElement.classList.add(`link_${index}`);

  itemElement.innerHTML = `
    <a href="${item.href}">${item.name}</a>

    <div id="link_card_${index}" class="link_card group-hover:flex hidden">
      <div class="arrow_container">
        <div class="arrow"></div>
      </div>
    </div>`;

  categoriesContainer.appendChild(itemElement);

  const subContainer = document.getElementById(`link_card_${index}`);

  item.sub_cat?.forEach((sub, sub_index) => {
    const sub_item = document.createElement("a");
    sub_item.href = sub.href;
    sub_item.classList.add("sub_link");

    sub_item.innerHTML = `
      <span>${sub.name}</span>
    `;
    subContainer.appendChild(sub_item);
  });
});

//CREATE A MENU FOR MOBILE DEVICES

const button = document.getElementById("burger_button");

const modal = document.createElement("div");
modal.classList.add("header_drawer");
modal.classList.add("header_drawer_close");
modal.innerHTML = `
<div id="header_drawer_content" class="header_drawer_content">
  <div>
    <img src="https://www.vogue.com/verso/static/vogue/assets/us/logo-header.svg" >
  </div>

  <div class="accordions_container" id="accordions_container">
  </div>
</div>
`;
document.body.appendChild(modal);

const accordionsContainer = document.getElementById("accordions_container");
categories.forEach((cat, index) => {
  //Create a accordian for each category
  const divCategory = document.createElement("div");
  divCategory.classList.add("accordion_item");
  divCategory.id = `accordion_item_${index}`;
  divCategory.setAttribute("data-tab", `accordion_item_button_${index}`);

  divCategory.innerHTML = `
    <button id="accordion_item_button_${index}" class="accordion_item_button">${cat.name}</button>

    <div data-tab="accordion_item_button_${index}" id="accordion_item_content_${index}" class="accordion_item_content accordion_item_content_close">
      
    </div>
  `;
  accordionsContainer.appendChild(divCategory);

  //Add each sub categorie for each category
  const subCatsContainer = document.getElementById(
    `accordion_item_content_${index}`
  );
  cat.sub_cat.forEach((sub_cat) => {
    const subDiv = document.createElement("div");
    subDiv.classList.add("accordion_subitem");
    subDiv.innerHTML = `
      <a href="${sub_cat.href}">${sub_cat.name}</a>
    `;

    subCatsContainer.appendChild(subDiv);
  });

  //(accordion) Open sub categories  for each category
  const button = document.getElementById(`accordion_item_button_${index}`);
  button.addEventListener("click", (e) => {
    const card = document.getElementById(`accordion_item_${index}`);

    const content = document.getElementById(`accordion_item_content_${index}`);

    let contents = document.querySelectorAll(".accordion_item_content");
    let cards = document.querySelectorAll(".accordion_item");

    const contentsArray = Array.from(contents);
    const cardsArray = Array.from(cards);

    const newContents = contentsArray.filter(
      (item) => item.dataset.tab !== e.target.id
    );
    const newCards = cardsArray.filter(
      (item) => item.dataset.tab !== e.target.id
    );

    if (content.classList.contains("accordion_item_content_close")) {
      newContents.forEach((item) => {
        if (item.classList.contains("accordion_item_content_open")) {
          item.classList.remove("accordion_item_content_open");
          item.classList.add("accordion_item_content_close");
        }
      });

      newCards.forEach((item) => {
        item.classList.remove("accordion_item_anim");
      });

      content.classList.remove("accordion_item_content_close");
      content.classList.add("accordion_item_content_open");
      card.classList.add("accordion_item_anim");
    } else {
      content.classList.remove("accordion_item_content_open");
      content.classList.add("accordion_item_content_close");

      card.classList.remove("accordion_item_anim");
    }
  });

  // Close drawer when sub category is clicked
  const subButtons = document.querySelectorAll(".accordion_subitem");
  subButtons.forEach((button) => {
    button.addEventListener("click", () => {
      modal.classList.remove("header_drawer_open");
      modal.classList.add("header_drawer_close");
    });
  });
});

// Open and close the drawer
button.addEventListener("click", (e) => {
  if (modal.className.includes("header_drawer_open")) {
    modal.classList.remove("header_drawer_open");
    modal.classList.add("header_drawer_close");
  } else {
    modal.classList.remove("header_drawer_close");
    modal.classList.add("header_drawer_open");
  }
});

// Close the drawer when you click out of it
document.addEventListener("click", function (event) {
  let modalContent = document.querySelector("#header_drawer_content");

  // Check if the click is not inside the div
  if (!modalContent.contains(event.target) && !button.contains(event.target)) {
    modal.classList.remove("header_drawer_open");
    modal.classList.add("header_drawer_close");
  }
});
