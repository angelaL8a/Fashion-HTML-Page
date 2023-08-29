// Header
var headerElement = document.getElementById("header");
headerElement.innerHTML = `
  <a href="/" class="header_logo">Logo</a>

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
