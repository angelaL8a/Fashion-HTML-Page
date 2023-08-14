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
      "https://images.pexels.com/photos/7290622/pexels-photo-7290622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Doctors and dermatologists are in agreement that SPF is a non-negotiable in order to protect skin from cancer, premature aging, and issues like hyperpigmentation.",
  },
  {
    title: "Title",
    image:
      "https://images.pexels.com/photos/7290622/pexels-photo-7290622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Doctors and dermatologists are in agreement that SPF is a non-negotiable in order to protect skin from cancer, premature aging, and issues like hyperpigmentation.",
  },
  {
    title: "Title",
    image:
      "https://images.pexels.com/photos/7290622/pexels-photo-7290622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    text: "Doctors and dermatologists are in agreement that SPF is a non-negotiable in order to protect skin from cancer, premature aging, and issues like hyperpigmentation.",
  },
  {
    title: "Title",
    image:
      "https://images.pexels.com/photos/7290622/pexels-photo-7290622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
      "https://assets.vogue.com/photos/64d256c000f098f3cdad4175/4:3/w_640,c_limit/CN00032104.jpg",
    text: "a",
  },
  {
    title: "5 Key Things a Doctor Wants You to Know About SPF",
    image:
      "https://assets.vogue.com/photos/64d256c000f098f3cdad4175/4:3/w_640,c_limit/CN00032104.jpg",
    text: "a",
  },
  {
    title: "5 Key Things a Doctor Wants You to Know About SPF",
    image:
      "https://assets.vogue.com/photos/64d256c000f098f3cdad4175/4:3/w_640,c_limit/CN00032104.jpg",
    text: "a",
  },
  {
    title: "5 Key Things a Doctor Wants You to Know About SPF",
    image:
      "https://assets.vogue.com/photos/64d256c000f098f3cdad4175/4:3/w_640,c_limit/CN00032104.jpg",
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
