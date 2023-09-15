//GLAMOUR & GLOW (carousel) section
// array of videos
const videos = [
  {
    name: "Ariana Grande’s ’60s Cat-Eye and “Pretty in Pink” Makeup Look",
    thumbnail: "/Images/beauty_page/glow_1.jpg",
    videoURL: "MdLcP8dJls4",
  },
  {
    name: "Sabrina Carpenter's Guide to DIY Facials and Perfect Eyeliner",
    thumbnail: "/Images/beauty_page/glow_2.jpg",
    videoURL: "bcA0dGJM5-k-owE",
  },
  {
    name: "Model Anok Yai's Off-Duty Smudged Eyeliner Look",
    thumbnail: "/Images/beauty_page/glow_3.jpg",
    videoURL: "juAPaOUQmGY",
  },
  {
    name: "Billie Eilish's Post-Show Beauty Routine",
    thumbnail: "/Images/beauty_page/glow_4.jpg",
    videoURL: "yis52iAkYlQ",
  },
];

//call the container for the carousel
const videosContainer = document.getElementById("carouselBeautyPage");

/* The YouTube Player API was utilized to embed the videos within the carousel and to leverage functions such as stopVideo() for stop the when clicking outside the modal. REFERENCE for YouTube Player API: https://developers.google.com/youtube/iframe_api_reference */
//YouTube Player API Reference for iframe Embeds
function onYouTubeIframeAPIReady() {
  // iterate over each element in "videos" array
  videos.forEach((video, index) => {
    // Create a variable to assign the YouTube player for the video
    let myPlayer;

    // Create a div element for each video to display in the carousel
    const videoDiv = document.createElement("div");
    videoDiv.classList.add("cardVideo");
    videoDiv.id = `cardVideo_${index}`;

    videoDiv.innerHTML = /**/ `
    <div class="cardVideo_img">
        <img src="${video.thumbnail}" class="w-full h-full object-cover" alt="img" />
    </div>
    
    <h2 class="cardVideo_titleVideo">
        ${video.name}
    </h2>
  `;

    // Create a modal div for each video
    const videoModal = document.createElement("div");
    videoModal.classList.add("modal");
    videoModal.classList.add("modal_close");
    videoModal.id = `video_modal_${index}`;
    videoModal.innerHTML = `
  <div id="video_modal_content_${index}" class="video_modal_content"> 
    <div class="w-full h-full aspect-video" id="player_${index}"></div>

    ${video.name}
  </div>
  `;

    // Append video elements to a container (assumed to be defined elsewhere as 'videosContainer')
    videosContainer.appendChild(videoDiv);
    videosContainer.appendChild(videoModal);

    // Initialize the YouTube player for the video
    myPlayer = new YT.Player(`player_${index}`, {
      height: "360",
      width: "640",
      videoId: video.videoURL,
      events: {
        onReady: onPlayerReady, // Call onPlayerReady when the player is ready
      },
    });

    // Function to handle the onReady event of the YouTube player
    function onPlayerReady(event) {
      event.target.stopVideo(); // Stop the video when it's ready
    }

    // Function to stop the video playback
    function stopVideo() {
      myPlayer.stopVideo();
    }

    // Add a click event listener to the video div to open/close the modal
    const modalButton = document.getElementById(`cardVideo_${index}`);
    modalButton.addEventListener("click", () => {
      const modal = document.getElementById(`video_modal_${index}`);

      // Toggle the modal between open and close states
      if (modal.className.includes("modal_open")) {
        modal.classList.remove("modal_open");
        modal.classList.add("modal_close");
      } else {
        modal.classList.remove("modal_close");
        modal.classList.add("modal_open");
      }
    });

    // Add a click event listener to the videosContainer to close the modal if clicked outside
    videosContainer.addEventListener("click", function (event) {
      let modal = document.querySelector(`#video_modal_content_${index}`);

      // Check if the click is not inside the modal or the modalButton
      if (
        !modal.contains(event.target) &&
        !modalButton.contains(event.target)
      ) {
        const modal = document.getElementById(`video_modal_${index}`);

        // Close the modal and stop video playback
        modal.classList.remove("modal_open");
        modal.classList.add("modal_close");
        stopVideo();
      }
    });
  });

  // Add event listeners for the arrow buttons to scroll the carousel left and right
  const carousel = document.querySelector(".carouselBeautyPage");
  const firstCardWidth = carousel.querySelector(".cardVideo").offsetWidth;
  const arrowBtns = document.querySelectorAll(".wrapper i");
  arrowBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      carousel.scrollLeft +=
        btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// STYLE SPOTLIGHT: THE LATEST IN FASHION - Beauty page
const magazines = [
  {
    name: "New year, new you",
    image: "/Images/beauty_page/magazine_1.jpg",
  },
  {
    name: "Power Player",
    image: "/Images/beauty_page/magazine_2.jpg",
  },
  {
    name: "Natural Beauty",
    image: "/Images/beauty_page/magazine_3.jpg",
  },
  {
    name: "Dreamstate",
    image: "/Images/beauty_page/magazine_4.jpg",
  },
  {
    name: "Sophisticated",
    image: "/Images/beauty_page/magazine_5.jpg",
  },
];

const magazineContainer = document.getElementById("magazineContainer");

magazines.forEach((magazine, index) => {
  const divMagazine = document.createElement("div");
  divMagazine.classList.add("magazine");
  divMagazine.classList.add(`magazine-${index}`);

  divMagazine.innerHTML = `
    <div class="magazine-image group">
      <img
        src="${magazine.image}"
        alt="${magazine.name}"
      />

      <button class="magazine-button hidden group-hover:block">Buy</button>
    </div>

    <div class="magazine-content">
      <h4>${magazine.name}</h4>
    </div>
  `;

  magazineContainer.appendChild(divMagazine);
});

// SKIN & BEAUTY CARE TIPS - Beauty page
// https://images.pexels.com/photos/6784716/pexels-photo-6784716.jpeg
const tipsMakeup = [
  {
    title: "Woodscape",
    image: "/Images/beauty_page/makeup_1.jpg",
    text: "Woodscape makeup draws from nature with earthy tones for a natural, healthy look. Use soft browns and greens on the eyes, add a touch of blush, keep lashes and brows natural, and finish with subtle highlighting",
  },
  {
    title: "Beauty Haze",
    image: "/Images/beauty_page/makeup_2.jpg",
    text: "Beauty Haze makeup is all about achieving a soft and dreamy look using muted, hazy shades. This style emphasizes natural, blended makeup with pastel eyeshadows, soft eyeliners, muted lips, and a dewy finish, resulting in a gentle and romantic appearance. ",
  },
  {
    title: "Blossom",
    image: "/Images/beauty_page/makeup_3.jpg",
    text: "Blossom makeup style draws inspiration from the freshness and vitality of spring flowers. Use soft, floral eyeshadows, a pink or peach blush, natural lashes and brows, and soft, feminine lip colors like pink or coral for a fresh and romantic look with a healthy glow.",
  },
  {
    title: "Breathe",
    image: "/Images/beauty_page/makeup_4.jpg",
    text: "The Breathe makeup style focuses on achieving a minimalistic and fresh appearance. Start with a light, breathable foundation or tinted moisturizer for a natural look. Apply a touch of neutral eyeshadow, a subtle blush, and a sheer lip color for a barely-there effect. Keep brows groomed but natural, and skip heavy mascara. This style aims for simplicity and a radiant.",
  },
  {
    title: "Pinktastic",
    image: "/Images/beauty_page/makeup_5.jpg",
    text: "This style is all about embracing vibrant pink hues. Start with a pink-toned foundation or tinted moisturizer for a rosy complexion. Use bold pink eyeshadows on the eyes, add a pop of pink blush on the cheeks, and choose a striking pink lipstick. Go for voluminous lashes and well-defined brows to balance the colorful palette. This style aims for a lively and energetic appearance with a focus on the color pink.",
  },
  {
    title: "Freckles & Flower",
    image: "/Images/beauty_page/makeup_6.jpg",
    text: "This style embraces a natural and youthful look. Begin with minimal foundation to showcase your freckles or use a light, freckle pencil to create them. Opt for soft, floral eyeshadows and a delicate blush for a fresh appearance. Keep mascara light, eyebrows natural, and lips in subtle, petal-like shades for a charming and carefree look inspired by nature.",
  },
];

const makeupContainer = document.getElementById("makeupContainer");

tipsMakeup.forEach((tip, index) => {
  const tipDiv = document.createElement("div");
  tipDiv.classList.add("makeup_item");
  tipDiv.classList.add(`makeup_item_${index + 1}`);

  tipDiv.innerHTML = `
    <div class="makeup_item_img">
      <img
        src="${tip.image}"
        alt="${tip.title}"
        class="object-cover"
      />
    </div>
    <div class="makeup_item_content">
      <h4>${tip.title}</h4>  
      <p>${tip.text}</p>
    </div>
  `;

  makeupContainer.appendChild(tipDiv);
});

const tipsSkincare = [
  {
    title: "Addiction Tokyo Sets Its Eyes Stateside With a Global Launch",
    image: "/Images/beauty_page/skincare_1.jpg",
    text: "Addiction Tokyo has created, well, quite an addiction in Japan with their makeup products. Toting “skin melt technology,” overseas the brand is known for its long-wearing eyeshadows, with a formula that blends oil within the powder for a better fit on the eye, longer wear time, and comfort. Now, the Japanese brand is set on a global expansion and launches in the United States beginning today.",
  },
  {
    title: "Pat McGrath Labs Expands Into Skincare With a Essence",
    image: "/Images/beauty_page/skincare_2.jpg",
    text: "The first product she is launching is Divine Skin: Rose 001 Essence. And yes, it’s as delightful as it sounds. Rose is the star player in this formula created specifically to deliver hydration, allowing products to penetrate better into the skin.",
  },
  {
    title: "Glossier's Holiday Collection Is Stacked with New Merch",
    image: "/Images/beauty_page/skincare_3.jpg",
    text: "This season includes exclusive holiday merch like a new design of the brand's signature vegan silk scarf with a geometric pattern, as well as a glittering 14K gold-plated G logo necklace. The G-Pal scarf ($25) can be purchased on its own or complimentary with any $70 order, while the Gold G necklace is included in the Gold Kit ($75). Next week, Glossier will release a festive take on its favorite sweatshirt.",
  },
  {
    title: "Meghan Markle's Favorite Skincare Brand Tatcha Is Having A Sale",
    image: "/Images/beauty_page/skincare_4.jpg",
    text: "Sales should always be celebrated, but especially so when they're rare, and when it's for a brand that literal royalty loves. Tatcha is beloved by so many celebrities that it's not even worth listening to them all. Suffice to say, there's probably not a single icon who hasn't slathered on some Dewy Skin Cream before an event.",
  },
];

const careContainer = document.getElementById("careContainer");

tipsSkincare.forEach((tip, index) => {
  const tipDiv = document.createElement("div");
  tipDiv.classList.add("skincare_item");
  tipDiv.classList.add(`skincare_item_${index + 1}`);

  tipDiv.innerHTML = `
    <div class="skincare_item_img">
      <img
        src="${tip.image}"
        alt="${tip.title}"
        class="object-cover"
      />
    </div>
    <div class="skincare_item_content">
      <h4>${tip.title}</h4>  
      <p>${tip.text}</p>
    </div>
  `;

  careContainer.appendChild(tipDiv);
});
