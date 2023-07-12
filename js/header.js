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
    name: "News",
    sub_cat: [
      { name: "Awards and Events" },
      { name: "Music Culture" },
      { name: "Entertainment" },
    ],
  },
  {
    name: "Fashion",
    sub_cat: [
      { name: "Models" },
      { name: "Clothing" },
      { name: "Designers & Trends" },
    ],
  },
  {
    name: "Beauty",
    sub_cat: [
      { name: "Celebrity" },
      { name: "Makeup & Skincare" },
      { name: "Fragance" },
    ],
  },
  {
    name: "Culture",
    sub_cat: [{ name: "Music" }, { name: "Arts" }, { name: "Sports" }],
  },
  {
    name: "Lifestyle",
    sub_cat: [
      { name: "Travel" },
      { name: "Home & Decorating" },
      { name: "Holidays" },
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
    <a href="#">${item.name}</a>

    <div id="link_card_${index}" class="link_card group-hover:flex hidden">
      <div class="arrow_container">
        <div class="arrow"></div>
      </div>
    </div>`;

  categoriesContainer.appendChild(itemElement);

  const subContainer = document.getElementById(`link_card_${index}`);

  item.sub_cat.forEach((sub, sub_index) => {
    const sub_item = document.createElement("a");
    sub_item.href = "#";
    sub_item.classList.add("sub_link");

    sub_item.innerHTML = `
      <span>${sub.name}</span>
    `;
    subContainer.appendChild(sub_item);
  });
});
