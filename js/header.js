// Header
var headerElement = document.getElementById("header");
headerElement.innerHTML = `
   <div class="flex items-center gap-1">
    <button id="burger_button" class="active:bg-gray-200 dark:active:bg-zinc-900 p-2 rounded-full xl:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class=""><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
    </button>

    <a href="/" class="header_logo">
      <svg class="w-full dark:fill-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="0" height="100" zoomAndPan="magnify" viewBox="0 0 252 143.999998" height="192" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/></defs><g  fill-opacity="1"><g transform="translate(19.711139, 90.443336)"><g><path d="M 15.898438 0.746094 C 29.804688 0.746094 35.636719 -9.320312 35.636719 -18.191406 C 35.636719 -25.867188 29.953125 -31.398438 21.582031 -32.195312 C 14.054688 -32.894531 4.636719 -33.890625 4.636719 -39.273438 C 4.636719 -41.167969 6.128906 -42.761719 7.972656 -42.761719 C 14.652344 -42.761719 19.238281 -36.78125 26.566406 -36.78125 C 32.644531 -36.78125 37.179688 -50.589844 33.691406 -50.589844 C 32.148438 -50.589844 31.152344 -48.59375 27.710938 -48.59375 C 23.175781 -48.59375 20.136719 -50.589844 16.25 -50.589844 C 7.875 -50.589844 0.847656 -43.808594 0.847656 -35.4375 C 0.847656 -24.921875 9.320312 -21.929688 19.1875 -18.890625 C 24.121094 -17.34375 28.558594 -14.953125 28.558594 -9.867188 C 28.558594 -6.03125 25.121094 -3.140625 21.28125 -3.140625 C 13.507812 -3.140625 14.402344 -10.367188 15.101562 -15.601562 C 15.351562 -17.492188 14.054688 -18.492188 12.558594 -18.539062 C 9.96875 -18.640625 0.5 -13.707031 0.5 -10.714844 C 0.5 -4.734375 7.574219 0.746094 15.898438 0.746094 Z M 15.898438 0.746094 "/></g></g></g><g fill-opacity="1"><g transform="translate(56.592154, 90.443336)"><g><path d="M 1.246094 -24.921875 C 1.246094 -7.726562 10.265625 0.746094 21.429688 0.746094 C 32.046875 0.746094 38.027344 -8.820312 38.027344 -15.601562 C 38.027344 -17.894531 37.378906 -18.292969 36.78125 -18.292969 C 34.339844 -18.292969 34.089844 -10.914062 25.367188 -10.914062 C 18.441406 -10.914062 11.613281 -17.34375 8.621094 -26.515625 C 8.324219 -27.511719 8.074219 -29.304688 9.667969 -29.304688 C 13.804688 -29.304688 17.195312 -20.285156 24.570312 -20.285156 C 30.703125 -20.285156 33.09375 -25.320312 33.09375 -28.660156 C 33.09375 -30.253906 32.644531 -31.5 31.847656 -31.5 C 31 -31.5 30.503906 -29.554688 28.210938 -29.554688 C 24.320312 -29.554688 19.9375 -33.640625 15.003906 -33.640625 C 10.566406 -33.640625 9.417969 -31.050781 7.925781 -31.050781 C 6.578125 -31.050781 6.976562 -35.785156 6.976562 -36.734375 C 6.976562 -38.578125 7.726562 -42.761719 11.066406 -42.761719 C 17.542969 -42.761719 20.785156 -36.78125 29.65625 -36.78125 C 33.242188 -36.78125 35.636719 -41.019531 36.632812 -43.363281 C 38.027344 -46.601562 38.726562 -50.589844 36.78125 -50.589844 C 35.238281 -50.589844 34.242188 -48.59375 30.800781 -48.59375 C 26.265625 -48.59375 23.226562 -50.589844 19.339844 -50.589844 C 7.078125 -50.589844 1.246094 -37.28125 1.246094 -24.921875 Z M 1.246094 -24.921875 "/></g></g></g><g fill-opacity="1"><g transform="translate(95.616252, 90.443336)"><g><path d="M 0.5 -49.839844 C 1.84375 -48.496094 2.242188 -46.800781 2.242188 -43.960938 L 2.242188 -24.921875 L 2.292969 -14.402344 L 2.292969 -5.882812 C 2.292969 -3.039062 1.894531 -1.34375 0.546875 0 L 14.753906 0 C 17.195312 0 18.292969 -3.039062 18.292969 -5.035156 C 18.292969 -14.652344 4.835938 -16.046875 4.835938 -20.984375 C 4.835938 -21.230469 5.035156 -21.980469 5.730469 -21.980469 C 8.175781 -21.980469 22.179688 -12.808594 22.179688 -6.179688 C 22.179688 -3.6875 21.332031 -2.941406 21.332031 -1.144531 C 21.332031 -0.300781 22.128906 0 22.777344 0 L 33.542969 0 C 35.984375 0 36.832031 -1.34375 36.832031 -4.535156 C 36.832031 -12.410156 26.265625 -16.046875 18.9375 -18.789062 C 13.15625 -20.984375 6.878906 -23.574219 6.878906 -26.265625 C 6.878906 -27.0625 7.226562 -27.859375 8.574219 -27.859375 C 11.414062 -27.859375 13.90625 -19.636719 23.375 -19.636719 C 33.34375 -19.636719 37.332031 -27.710938 37.332031 -35.4375 C 37.332031 -43.511719 32.695312 -49.839844 20.585938 -49.839844 Z M 17.695312 -39.425781 C 24.570312 -39.425781 34.738281 -38.976562 34.738281 -34.488281 C 34.738281 -30.003906 26.613281 -29.554688 19.738281 -29.554688 C 12.859375 -29.554688 4.785156 -30.003906 4.785156 -34.488281 C 4.785156 -38.976562 12.609375 -39.425781 17.695312 -39.425781 Z M 17.695312 -39.425781 "/></g></g></g><g fill-opacity="1"><g transform="translate(134.191803, 90.443336)"><g><path d="M 1.246094 -24.921875 C 1.246094 -7.726562 10.265625 0.746094 21.429688 0.746094 C 32.046875 0.746094 38.027344 -8.820312 38.027344 -15.601562 C 38.027344 -17.894531 37.378906 -18.292969 36.78125 -18.292969 C 34.339844 -18.292969 34.089844 -10.914062 25.367188 -10.914062 C 18.441406 -10.914062 11.613281 -17.34375 8.621094 -26.515625 C 8.324219 -27.511719 8.074219 -29.304688 9.667969 -29.304688 C 13.804688 -29.304688 17.195312 -20.285156 24.570312 -20.285156 C 30.703125 -20.285156 33.09375 -25.320312 33.09375 -28.660156 C 33.09375 -30.253906 32.644531 -31.5 31.847656 -31.5 C 31 -31.5 30.503906 -29.554688 28.210938 -29.554688 C 24.320312 -29.554688 19.9375 -33.640625 15.003906 -33.640625 C 10.566406 -33.640625 9.417969 -31.050781 7.925781 -31.050781 C 6.578125 -31.050781 6.976562 -35.785156 6.976562 -36.734375 C 6.976562 -38.578125 7.726562 -42.761719 11.066406 -42.761719 C 17.542969 -42.761719 20.785156 -36.78125 29.65625 -36.78125 C 33.242188 -36.78125 35.636719 -41.019531 36.632812 -43.363281 C 38.027344 -46.601562 38.726562 -50.589844 36.78125 -50.589844 C 35.238281 -50.589844 34.242188 -48.59375 30.800781 -48.59375 C 26.265625 -48.59375 23.226562 -50.589844 19.339844 -50.589844 C 7.078125 -50.589844 1.246094 -37.28125 1.246094 -24.921875 Z M 1.246094 -24.921875 "/></g></g></g><g fill-opacity="1"><g transform="translate(173.215894, 90.443336)"><g><path d="M 0.5 0 L 17.195312 0 C 15.847656 -1.34375 15.449219 -3.039062 15.449219 -5.882812 L 15.449219 -43.960938 C 15.449219 -46.800781 15.847656 -48.496094 17.195312 -49.839844 L 0.5 -49.839844 C 1.84375 -48.496094 2.242188 -46.800781 2.242188 -43.960938 L 2.242188 -5.882812 C 2.242188 -3.039062 1.84375 -1.34375 0.5 0 Z M 0.5 0 "/></g></g></g><g fill-opacity="1"><g transform="translate(190.908821, 90.443336)"><g><path d="M 0.5 0 L 10.914062 0 C 13.855469 0 16.449219 -1.34375 16.449219 -4.386719 C 16.449219 -11.5625 5.132812 -18.9375 5.132812 -34.886719 C 5.132812 -37.179688 5.332031 -40.320312 6.976562 -40.320312 C 8.773438 -40.320312 10.566406 -34.390625 12.410156 -28.90625 C 13.507812 -25.617188 16.597656 -16.945312 17.894531 -13.007812 C 20.085938 -6.28125 22.03125 0 27.8125 0 L 40.871094 0 C 39.523438 -1.34375 39.125 -3.039062 39.125 -5.882812 L 39.125 -43.960938 C 39.125 -46.800781 39.523438 -48.496094 40.871094 -49.839844 L 30.453125 -49.839844 C 27.511719 -49.839844 24.921875 -48.496094 24.921875 -45.453125 C 24.921875 -38.277344 36.234375 -30.902344 36.234375 -14.953125 C 36.234375 -12.660156 36.035156 -9.519531 34.390625 -9.519531 C 32.597656 -9.519531 30.800781 -15.449219 28.957031 -20.933594 L 24.273438 -34.886719 C 19.785156 -48.246094 18.839844 -49.839844 15.351562 -49.839844 L 0.5 -49.839844 C 1.84375 -48.496094 2.242188 -46.800781 2.242188 -43.960938 L 2.242188 -5.882812 C 2.242188 -3.039062 1.84375 -1.34375 0.5 0 Z M 0.5 0 "/></g></g></g></svg>
    </a>
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
  <svg class="logocover w-full dark:fill-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="292" height="180" zoomAndPan="magnify" viewBox="0 0 252 143.999998" height="192" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><g/></defs><g  fill-opacity="1"><g transform="translate(18.777495, 92.831698)"><g><path d="M 17.757812 0.511719 C 28.015625 0.511719 37.507812 -5.613281 37.507812 -15.566406 C 37.507812 -25.160156 29.597656 -29.957031 18.117188 -30.773438 C 12.300781 -31.179688 2.960938 -30.621094 2.960938 -36.488281 C 2.960938 -42.101562 10.871094 -44.246094 18.320312 -44.246094 C 24.851562 -44.246094 31.640625 -42.511719 34.601562 -40.367188 L 36.691406 -48.125 C 33.527344 -50.675781 26.691406 -51.542969 21.433594 -51.542969 C 6.738281 -51.542969 2.09375 -43.378906 2.09375 -37.101562 C 2.09375 -28.730469 6.328125 -23.933594 19.238281 -21.738281 C 26.640625 -20.464844 36.539062 -20.210938 36.539062 -14.136719 C 36.539062 -7.707031 27.097656 -6.53125 21.535156 -6.53125 C 14.289062 -6.53125 9.542969 -9.082031 4.082031 -12.453125 L 1.019531 -5.359375 C 3.980469 -2.398438 10.820312 0.511719 17.757812 0.511719 Z M 17.757812 0.511719 "/></g></g></g><g fill-opacity="1"><g transform="translate(57.307232, 92.831698)"><g><path d="M 2.042969 -17.148438 C 2.042969 -4.132812 13.371094 0.511719 25.667969 0.511719 C 29.140625 0.511719 31.742188 0 34.445312 -1.277344 L 37.507812 -10.15625 C 34.039062 -7.246094 29.753906 -6.890625 25.464844 -6.890625 C 14.035156 -6.890625 2.960938 -9.238281 2.960938 -16.738281 C 2.960938 -19.390625 4.949219 -20.972656 9.542969 -20.972656 C 16.226562 -20.972656 21.382812 -16.074219 28.9375 -16.332031 C 32.507812 -16.433594 35.722656 -18.832031 35.722656 -22.660156 C 35.722656 -32.8125 9.03125 -29.292969 9.03125 -38.988281 C 9.03125 -42.5625 12.195312 -44.347656 19.648438 -44.347656 C 26.179688 -44.347656 32.96875 -42.613281 35.925781 -40.46875 L 38.019531 -48.125 C 34.855469 -50.675781 26.078125 -51.542969 20.820312 -51.542969 C 6.125 -51.542969 3.265625 -44.601562 3.265625 -41.488281 C 3.265625 -33.9375 10.613281 -32.558594 17.808594 -30.824219 C 23.269531 -29.496094 31.996094 -27.914062 31.996094 -24.902344 C 31.996094 -23.730469 30.925781 -23.269531 29.753906 -23.269531 C 25.007812 -23.269531 21.128906 -26.84375 14.339844 -26.84375 C 7.398438 -26.84375 2.042969 -23.628906 2.042969 -17.148438 Z M 2.042969 -17.148438 "/></g></g></g><g fill-opacity="1"><g transform="translate(96.449364, 92.831698)"><g><path d="M 10.972656 0 L 10.972656 -50.265625 L 21.894531 -50.265625 C 27.914062 -50.265625 30.3125 -46.59375 30.3125 -41.796875 C 30.3125 -28.425781 14.902344 -27.8125 14.902344 -22.863281 C 14.902344 -19.597656 21.433594 -9.492188 25.71875 -3.878906 C 28.375 -0.410156 28.527344 0 31.539062 0 L 39.957031 0 L 39.957031 -0.304688 C 36.285156 -0.304688 20.820312 -22.8125 20.820312 -26.332031 C 20.820312 -29.445312 37.714844 -29.957031 37.714844 -42.253906 C 37.714844 -46.441406 35.007812 -51.03125 29.445312 -51.03125 L 3.574219 -51.03125 L 3.574219 0 Z M 10.972656 0 "/></g></g></g><g fill-opacity="1"><g transform="translate(136.408025, 92.831698)"><g><path d="M 2.042969 -17.148438 C 2.042969 -4.132812 13.371094 0.511719 25.667969 0.511719 C 29.140625 0.511719 31.742188 0 34.445312 -1.277344 L 37.507812 -10.15625 C 34.039062 -7.246094 29.753906 -6.890625 25.464844 -6.890625 C 14.035156 -6.890625 2.960938 -9.238281 2.960938 -16.738281 C 2.960938 -19.390625 4.949219 -20.972656 9.542969 -20.972656 C 16.226562 -20.972656 21.382812 -16.074219 28.9375 -16.332031 C 32.507812 -16.433594 35.722656 -18.832031 35.722656 -22.660156 C 35.722656 -32.8125 9.03125 -29.292969 9.03125 -38.988281 C 9.03125 -42.5625 12.195312 -44.347656 19.648438 -44.347656 C 26.179688 -44.347656 32.96875 -42.613281 35.925781 -40.46875 L 38.019531 -48.125 C 34.855469 -50.675781 26.078125 -51.542969 20.820312 -51.542969 C 6.125 -51.542969 3.265625 -44.601562 3.265625 -41.488281 C 3.265625 -33.9375 10.613281 -32.558594 17.808594 -30.824219 C 23.269531 -29.496094 31.996094 -27.914062 31.996094 -24.902344 C 31.996094 -23.730469 30.925781 -23.269531 29.753906 -23.269531 C 25.007812 -23.269531 21.128906 -26.84375 14.339844 -26.84375 C 7.398438 -26.84375 2.042969 -23.628906 2.042969 -17.148438 Z M 2.042969 -17.148438 "/></g></g></g><g  fill-opacity="1"><g transform="translate(175.550152, 92.831698)"><g><path d="M 3.574219 0 L 10.972656 0 L 10.972656 -51.03125 L 3.574219 -51.03125 Z M 3.574219 0 "/></g></g></g><g fill-opacity="1"><g transform="translate(190.094483, 92.831698)"><g><path d="M 3.574219 0 L 14.1875 0 C 7.707031 -11.636719 4.492188 -25.109375 4.492188 -44.601562 C 4.492188 -44.601562 5.765625 -45.519531 8.625 -40.0625 C 10.105469 -37.203125 13.011719 -31.128906 17.914062 -21.792969 C 24.191406 -9.847656 30.976562 0.511719 37.253906 0.511719 C 37.96875 0.511719 38.988281 0.304688 39.550781 0 L 39.550781 -51.03125 L 28.9375 -51.03125 C 35.417969 -39.398438 38.632812 -25.925781 38.632812 -6.839844 C 38.632812 -6.839844 37.714844 -5.765625 34.957031 -8.726562 C 32.761719 -11.125 29.394531 -16.074219 24.292969 -25.515625 C 14.699219 -43.277344 13.472656 -51.542969 5.867188 -51.542969 C 5.15625 -51.542969 4.132812 -51.339844 3.574219 -51.03125 Z M 3.574219 0 "/></g></g></g></svg>
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

const drawerContent = document.getElementById("header_drawer_content");

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
