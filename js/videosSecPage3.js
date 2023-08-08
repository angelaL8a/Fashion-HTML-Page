// videos
const videos = [
  {
    name: "Lexi Underwood’s Guide to Girls-Night-Out Makeup",
    thumbnail:
      "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600/v1686775973/vogue_lexi-underwood-beauty-secrets.jpg",
    videoURL: "https://www.youtube.com/embed/iFS7U2qHLb4",
  },
  {
    name: "Alexis Ren's Guide to Face-Lifting Romantic Makeup",
    thumbnail:
      "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600/v1684868985/vogue_alexis-ren-beauty-secrets.jpg",
    videoURL: "https://www.youtube.com/embed/t0OsW8M-owE",
  },
  {
    name: "Model Anok Yai's Off-Duty Smudged Eyeliner Look",
    thumbnail:
      "https://dwgyu36up6iuz.cloudfront.net/heru80fdn/image/upload/c_fill%2Cd_placeholder_image.jpg%2Cfl_progressive%2Cg_center%2Ch_900%2Cq_80%2Cw_1600/v1682520102/vogue_anok-yai-beauty-secrets.jpg",
    videoURL: "https://www.youtube.com/embed/juAPaOUQmGY",
  },
];

const videosContainer = document.getElementById("carouselBeautyPage");

videos.forEach((video, index) => {
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

  const videoModal = document.createElement("div");
  videoModal.classList.add("modal");
  videoModal.classList.add("modal_close");
  videoModal.id = `video_modal_${index}`;
  videoModal.innerHTML = `
  <div id="video_modal_content_${index}" class="video_modal_content"> 
  <iframe width="560" height="315" src="${video.videoURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>    
  ${video.name}

  </div>
  `;

  videosContainer.appendChild(videoDiv);
  videosContainer.appendChild(videoModal);

  const modalButton = document.getElementById(`cardVideo_${index}`);

  modalButton.addEventListener("click", () => {
    const modal = document.getElementById(`video_modal_${index}`);

    if (modal.className.includes("modal_open")) {
      modal.classList.remove("modal_open");
      modal.classList.add("modal_close");
    } else {
      modal.classList.remove("modal_close");
      modal.classList.add("modal_open");
    }
  });

  videosContainer.addEventListener("click", function (event) {
    let modal = document.querySelector(`#video_modal_content_${index}`);

    // Check if the click is not inside the div
    if (!modal.contains(event.target) && !modalButton.contains(event.target)) {
      const modal = document.getElementById(`video_modal_${index}`);

      modal.classList.remove("modal_open");
      modal.classList.add("modal_close");
    }
  });
});

// Videos section for Bauty page - Carousel
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carouselBeautyPage");
const firstCardWidth = carousel.querySelector(".cardVideo").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");

let isAutoPlay = true,
  timeoutId;

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});

const autoPlay = () => {
  if (window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false // Autoplay the carousel after every 2500 ms timeoutId=setTimeout(()=> (carousel.scrollLeft += firstCardWidth), 2500);
};
autoPlay();

wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
