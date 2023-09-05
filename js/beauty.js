// STYLE SPOTLIGHT: THE LATEST IN FASHION - Beauty page
const magazines = [
  {
    name: "Lila Moss on Her Personal Style, Perfecting Her Runway Walk, and the One Thing She Can’t Steal from Her Mother’s Close",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/afc809121053143.60be44f832c43.jpg",
  },
  {
    name: "Lila Moss on Her Personal Style, Perfecting Her Runway Walk",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b673f788825189.5de218f37ede3.jpg",
  },
  {
    name: "Hello world",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/fs/86a14d117843701.607dbef317996.jpg",
  },
  {
    name: "Hello world",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/f83cbb117843701.607dbef31741e.jpg",
  },
  {
    name: "Hello world",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1550d111016819.5ff9f3af430a4.jpg",
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
    title: "Title",
    image:
      "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Doctors and dermatologists are in agreement that SPF is a non-negotiable in order to protect skin from cancer, premature aging, and issues like hyperpigmentation.",
  },
  {
    title: "Title",
    image:
      "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Doctors and dermatologists are in agreement that SPF is a non-negotiable in order to protect skin from cancer, premature aging, and issues like hyperpigmentation.",
  },
  {
    title: "Title",
    image:
      "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Doctors and dermatologists are in agreement that SPF is a non-negotiable in order to protect skin from cancer, premature aging, and issues like hyperpigmentation.",
  },
  {
    title: "Title",
    image:
      "https://images.pexels.com/photos/3738349/pexels-photo-3738349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Doctors and dermatologists are in agreement that SPF is a non-negotiable in order to protect skin from cancer, premature aging, and issues like hyperpigmentation.",
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
    title: "5 Key Things a Doctor Wants You to Know About SPF",
    image:
      "https://images.pexels.com/photos/3846049/pexels-photo-3846049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "a",
  },
  {
    title: "5 Key Things a Doctor Wants You to Know About SPF",
    image:
      "https://images.pexels.com/photos/3846049/pexels-photo-3846049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "a",
  },
  {
    title: "5 Key Things a Doctor Wants You to Know About SPF",
    image:
      "https://images.pexels.com/photos/3846049/pexels-photo-3846049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "a",
  },
  {
    title: "5 Key Things a Doctor Wants You to Know About SPF",
    image:
      "https://images.pexels.com/photos/3846049/pexels-photo-3846049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "a",
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//GLAMOUR & GLOW (carousel) section
// array of videos
const videos = [
  {
    name: "Lexi Underwood’s Guide to Girls-Night-Out Makeup",
    thumbnail:
      "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600/v1686775973/vogue_lexi-underwood-beauty-secrets.jpg",
    videoURL: "iFS7U2qHLb4",
  },
  {
    name: "Alexis Ren's Guide to Face-Lifting Romantic Makeup",
    thumbnail:
      "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600/v1684868985/vogue_alexis-ren-beauty-secrets.jpg",
    videoURL: "t0OsW8M-owE",
  },
  {
    name: "Model Anok Yai's Off-Duty Smudged Eyeliner Look",
    thumbnail:
      "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600/v1682520102/vogue_anok-yai-beauty-secrets.jpg",
    videoURL: "juAPaOUQmGY",
  },
  {
    name: "Watch Lola Tung Do Her Berry-Hued Beauty Look",
    thumbnail:
      "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600/v1689096533/vogue_lola-tungs-beauty-secrets.jpg",
    videoURL: "u-voLtzDD9Q",
  },
];

//call the container for the carousel
const videosContainer = document.getElementById("carouselBeautyPage");

/* The YouTube API was utilized to embed the videos within the carousel and to leverage functions such as stopVideo() for stop the when clicking outside the modal. REFERENCE for YOUTUBE API: https://developers.google.com/youtube/iframe_api_reference */
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
