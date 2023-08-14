const movies = [
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
  {
    title: "From the Runway to the Big Screen: 20 Models in Movies",
    image:
      "https://assets.vogue.com/photos/64d3c1e7ea4637be1064a250/4:3/w_640,c_limit/MCDFAAN_EC078.jpg",
    text: "Given the launch of our September issue supermodel cover and the fast approaching fashion month, you can’t blame us for having models on our minds. They’re everywhere: strutting down the runways, zipping from one show to the next on the street, and all over our",
  },
];

const moviesContainer = document.getElementById("tvMovies_main");

movies.forEach((movie, index) => {
  const divMovie = document.createElement("div");
  divMovie.classList.add("tvMovies_card");

  divMovie.innerHTML = `
    <div class="tvMovies_card_img">
      <img
        src="${movie.image}"
        alt="${movie.title}"
      />
    </div>
    <div class="tvMovies_card_content">
      <h4 class="text-2xl mb-3">
        ${movie.title}
      </h4>
      <p class="text-justify">
        ${movie.text}
      </p>
    </div>
  `;

  moviesContainer.appendChild(divMovie);
});
