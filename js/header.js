// Header
var headerElement = document.getElementById("header");
headerElement.innerHTML = `
   <div class="flex items-center gap-1">
    <button id="burger_button" class="active:bg-gray-200 dark:active:bg-zinc-900 p-2 rounded-full xl:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>

    <a href="/" class="header_logo">Logo</a>
  </div>

  <div class="header_links" id="header_links"></div>

  <div class="header_search">
    <button id="button_dark_mode" class="flex items-center justify-center h-9 w-9 hover:bg-gray-200 dark:hover:bg-zinc-900 rounded-full focus:ring focus:ring-offset-2 focus:ring-offset-white focus:ring-[#f64ea2] focus:dark:ring-offset-slate-800">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 hidden dark:block"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5 dark:hidden"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    </button>
  </div> 
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
    <svg class="w-full dark:fill-white" xmlns="http://www.w3.org/2000/svg" width="292" height="180" viewBox="0 -9 292 85">
<path fill-rule="evenodd" clip-rule="evenodd" d="M159.71 44.6748V43.0485H182.239V43.5268V44.2443V44.7226H176.882V74.0435H175.877L175.781 73.6608C175.16 70.7431 172.146 69.7386 170.616 69.7386H170.376H170.042C167.507 69.8308 165.239 70.8997 162.895 72.0043L162.628 72.1302C162.389 72.2259 162.161 72.3215 161.934 72.4172C161.707 72.5128 161.48 72.6085 161.241 72.7042C158.753 73.9 156.075 74.9523 152.822 74.9523C135.411 74.9523 122.688 59.9331 122.688 38.7437C122.688 12.7711 139.716 0.191327 152.105 0.191327C154.831 0.191327 156.601 0.717475 158.992 1.48278L159.997 1.76977C160.225 1.84594 160.464 1.92695 160.711 2.01127L160.714 2.01225L160.715 2.01229C161.244 2.19246 161.818 2.38769 162.436 2.58291L163.393 2.82207C164.063 2.96556 164.924 3.10906 165.928 3.15689C167.985 3.20472 170.376 2.67857 171.381 0.28699L171.524 0H172.337H172.577V26.3074H172.337H171.477L171.381 25.9248C166.98 8.41838 161.575 1.91327 152.153 1.86544H152.057C144.308 1.86544 141.725 6.83993 140.338 9.51851C136.655 16.6454 135.89 32.9082 135.89 37.8827C135.89 51.8017 137.133 57.7807 139.477 63.9988C141.869 70.3604 146.03 73.4217 152.296 73.326C158.084 73.2303 165.498 70.7431 165.498 59.5983V44.6748H159.71ZM290.433 47.7361V47.3056H291.82V73.613H240.114V71.8911H246.428V3.77873H239.397H233.466V55.15C233.609 64.1423 227.63 75.0001 214.572 75.0001C195.105 75.0001 188.456 64.8598 188.456 51.7539V3.77873H181.76V2.82209V2.10462H206.871V2.82209V3.77873H200.414V57.7329C200.414 58.3069 200.844 72.5607 215.003 73.0869C218.877 73.2304 223.134 71.6997 226.147 68.8298C228.635 66.4861 231.505 61.9899 231.648 54.6717V3.77873H226.1V2.82209V2.10462H239.397H240.832H241.31H288.903V26.2118H287.755L287.659 25.8291C283.233 3.42461 272.987 3.63532 262.488 3.85123C262.093 3.85934 261.699 3.86746 261.304 3.87439C260.538 3.92222 259.295 3.92222 258.529 3.92222V36.2565H259.056H259.114C264.891 36.2566 271.927 36.2568 273.453 22.2418L273.501 21.8113H274.649V52.6627H273.501L273.453 52.2322C272.339 37.8446 265.776 37.9128 259.969 37.9733L259.858 37.9744C259.718 37.9759 259.578 37.9773 259.438 37.9784H258.482V71.9389H259.056C259.264 71.9389 259.511 71.9417 259.792 71.945C263.836 71.9914 275.047 72.1201 282.828 65.099C287.563 60.8419 290.098 55.0065 290.433 47.7361ZM85.7632 0.382691C71.0788 0.382691 54.9596 15.067 54.9596 37.5001C54.9596 59.9332 71.605 74.8088 85.7632 74.8088C99.9214 74.8088 116.567 59.9332 116.567 37.5001C116.519 15.067 100.448 0.382691 85.7632 0.382691ZM102.887 34.7259V35.2042V35.539V35.826V36.2565V36.4V36.8305V36.9261V37.4044V37.7871C102.887 41.9484 102.504 57.9721 98.2951 65.96C95.9035 70.5996 91.2638 73.0391 85.6675 73.0391C80.0712 73.0391 75.3837 70.5996 73.0399 65.96C68.8308 57.9721 68.4959 41.9484 68.4959 37.7871V37.4044V36.9261V36.8305V36.4V36.2565V35.826V35.539V35.2042V34.7259V34.5345C68.6394 28.1251 69.4526 16.1193 73.0399 9.08806C75.9098 3.25259 81.7453 2.00897 85.6675 2.00897C89.6375 2.00897 95.4252 3.25259 98.2951 9.08806C101.882 16.1193 102.648 28.1251 102.839 34.5345C102.887 34.5824 102.887 34.678 102.887 34.7259ZM47.4969 2.10462H60.6506H61.1289V3.7309H55.2934H54.6716L33.6735 73.9957H33.2909L6.88776 3.7309H6.21812H0V2.77426V2.10462H23.7724V2.77426V3.7309H18.75H18.4152L37.2609 55.9631L52.854 3.7309H47.0186V2.10462H47.4969Z"/>
</svg>
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

    let contents = document.querySelectorAll(".accordion_item_content");
    let cards = document.querySelectorAll(".accordion_item");
    //if there is an open accordion when pressing outside the drawer, close it.
    contents.forEach((item) => {
      item.classList.remove("accordion_item_content_open");
      item.classList.add("accordion_item_content_close");
    });
    //if there is an open accordion and you click outside the drawer cancel the animation
    cards.forEach((item) => {
      item.classList.remove("accordion_item_anim");
    });
  }
});
