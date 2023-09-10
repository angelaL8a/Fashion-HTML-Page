// Grid section (index.html)
const elements = [
  {
    title:
      "The Harmonious Intersection of Fashion, Serenity, and Art: Exploring the Therapeutic Beauty of Clothing as a Form of Artistic Expression",
    index: "article_img_3",
    src: "/Images/index_page/main_photo.jpg",
  },
  {
    title: "Elle Fanning Is Killing the Cannes Red Carpet",
    index: "article_img_1",
    src: "/Images/index_page/main_photo_1.jpg",
  },
  {
    title: "Lindsay Lohan’s Girl Band in Freaky Friday Still Rocks",
    index: "article_img_2",
    src: "/Images/index_page/main_photo_2.jpg",
  },

  {
    title: "5 Style Lessons We’ve Learned From Sarah Jessica Parker",
    index: "article_img_4",
    src: "/Images/index_page/main_photo_3.jpg",
  },
  {
    title: "Every Vintage Chanel Reference You Might Have Missed in Barbie",
    index: "article_img_5",
    src: "/Images/index_page/main_photo_4.jpg",
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
            <h4>
              ${element.title}
            </h4>
          </div>
  `;

  articlesContainer.appendChild(articleElement);
});

// Must read section (index.html)
const mustReadElements = [
  {
    category: "Culture",
    title:
      "Four Women, One Pink Lamborghini, and a Race to Win the Ultimate Endurance Test",
    src: "/Images/index_page/must_read_1.jpg",
  },
  {
    category: "Beauty",
    title: "Who Is The Masked Singer's Pink Crocodile?",
    src: "/Images/index_page/must_read_2.jpg",
  },
  {
    category: "FASHION",
    title: "Inside Jacquemus' 10-Year Anniversary Show",
    src: "/Images/index_page/must_read_3.jpg",
  },
];

const mustReadContainer = document.getElementById("must_read_articles");
mustReadElements.forEach((i, index) => {
  const item = document.createElement("div");
  item.classList.add("must_read_art");

  item.innerHTML = `
    <div class="must_read_art_img">
      <img
        style="width: 100%; height: 100%; object-fit: cover"
        src="${i.src}"
      />
    </div>

    <div class="must_read_content flex-1">
      <a class="uppercase font-semibold" href="#">${i.category}</a>
      <p class="text-[20px]" >${i.title}</p>
    </div>
  `;
  mustReadContainer.appendChild(item);
});

// Celebrity Style section (index.html)
const celebrityItems = [
  {
    category: "Beauty",
    title: "Lana Condor Looks Like a Millennial Pink Dream in a Tulle gown",
    src: "/Images/index_page/celebrity_0.jpg",
  },
  {
    category: "Fashion",
    title:
      "Anya Taylor-Joy Channeled '60s Barbie in a Pink Dior Dress and Beret",
    src: "/Images/index_page/celebrity_1.jpg",
  },
  {
    category: "Fashion",
    title:
      "Zendaya Stunned in a Barbie Pink Valentino Suit at Paris Fashion Week",
    src: "/Images/index_page/celebrity_2.jpg",
  },
  {
    category: "Beauty",
    title:
      "Kacey Musgraves Dressed Like a Princess in a Pink Giambattista Valli Tulle",
    src: "/Images/index_page/celebrity_3.jpg",
  },
];

const celebrityContainer = document.getElementById(
  "celebrity_section_container"
);

celebrityItems.forEach((c, index) => {
  const item = document.createElement("div");
  item.classList.add("celebrity_section_art");

  item.innerHTML = `
    <div class="celebrity_section_art_img">
      <img 
        src="${c.src}"
        alt="labillie"
      />
    </div>
    <div class="celebrity_section_art_content">
      <a href="#" class="text-[14px] text-center" >${c.category}</a>
      <p class="text-[20px] ">${c.title}</p>
    </div>
  `;

  celebrityContainer.appendChild(item);
});

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens
  .slice(-cardPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  console.log(e.pageX - startX);
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};

const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

const infiniteScroll = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  // Clear existing timeout & start autoplay if mouse is not hovering over carousel
  clearTimeout(timeoutId);
  if (!wrapper.matches(":hover")) autoPlay();
};

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
  // Autoplay the carousel after every 2500 ms
  timeoutId = setTimeout(() => (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
