var footerElement = document.getElementById("footer_container");
footerElement.innerHTML = `
  <div class="footer_subcribe_container">
  <div class="footer_subcribe">
    <h4 class="uppercase font-bold text-lg text-slate-700">
      Subscribe to our news
    </h4>

    <div class="footer_subcribe_div">
      <input
        class="shadow-md px-4 py-2 border rounded-full outline-none focus:border-[#fc86c7]/40"
        placeholder="yourname@gmail.com"
        type="email"
      />

      <button
        class="bg-[#f7dfe9]/100 px-4 py-2 rounded-full hover:bg-[#fc86c7]/60"
      >
        Subscribe
      </button>
    </div>
  </div>
  </div>

  <div class="footer">
  <div class="footer_top">
    <div>Logo</div>

    <div class="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="footer_icon"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="footer_icon"
      >
        <path
          d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="footer_icon"
      >
        <path
          d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"
        />
        <path d="m10 15 5-3-5-3z" />
      </svg>
    </div>
  </div>

  <div class="footer_links_container">
    <p class="footer_text">
      Explore the vibrant world of fashion with the latest trends,
      exclusive fashion news, and captivating beauty coverage at ****.
      Immerse yourself in the glamorous realm of celebrity style as you
      discover the iconic looks donned by your favorite stars. Stay in the
      loop with comprehensive fashion week updates, where you'll find
      backstage insights, runway highlights, and designer interviews.
    </p>

    <div class="footer_links">
      <div class="flex flex-col">
        <h4 class="font-bold mb-2">MORE FROM ****</h4>
        <a href="#" class="footer_link">Contact Us</a>
        <a href="#" class="footer_link">About ****</a>
        <a href="#" class="footer_link">Terms and Conditions</a>
      </div>

      <div class="flex flex-col">
        <h4 class="font-bold mb-2">SEE MORE STORIES</h4>
        <a href="#" class="footer_link">News</a>
        <a href="#" class="footer_link">Fashion</a>
        <a href="#" class="footer_link">Beauty</a>
        <a href="#" class="footer_link">Culture</a>
        <a href="#" class="footer_link">Lifestyle</a>
      </div>
    </div>
  </div>
  </div>
`;
