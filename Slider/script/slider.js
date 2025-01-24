const sliderOutput = document.querySelector(".slides");

let currentImageIndex = 0;

let gallery = [
  {
    overskrift: " Billede 1 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06825.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 2 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06826.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 3 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06828.JPG",
    link:"",
    linkText: "",
  },
  {
    overskrift: " Billede 4 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06829.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 5 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06832.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 6 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06835.JPG",
    link:"",
    linkText: "",
  },
  {
    overskrift: " Billede 7 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06836.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 8 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06838.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 9 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06840.JPG",
    link:"",
    linkText: "",
  },
  {
    overskrift: " Billede 10 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06845.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 11 - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06848.JPG",
    link: "",
    linkText: "",
  },
  {
    overskrift: " Billede 12  - Her er en beskrivelse af dette billede.",
    src: "/Slider/img/DSC06849.JPG",
    link:"",
    linkText: "",
  },
];

gallery.forEach((billede) => {
  sliderOutput.innerHTML += `

        <div class="single-slide">
          <div class="slide-content">
          </div>
     <img src="${billede.src}" alt="billede 1" />
        </div>

   `;

   /* <button><a target="_blank" href=${billede.link}>${billede.linkText}</a></button>  */


});

const slides = document.querySelectorAll(".single-slide");
let slidesLength =
  slides.length - 1; /* index'et på sidste billede i slideren */

function setActiveSlide(index) {
  /* function der bestemmer hvilket billede der vises */

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
}


document.querySelector(".previous").addEventListener("click", function () {
  previous();
});
document.querySelector(".next").addEventListener("click", function () {
  next();
});

addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    console.log("tryk");
    next();
  } else if (event.key === "ArrowLeft") {
    previous();
  }

  setActiveSlide(currentImageIndex);
});


const displayVariabel = document.querySelector(".display");

function displayIndex() {
  displayVariabel.innerHTML = `${currentImageIndex + 1} ud af 12`
}

displayIndex();

function next() {
  if (currentImageIndex >= slidesLength) {
    currentImageIndex = 0;
  } else {
    currentImageIndex++;
  }
  console.log(currentImageIndex);
  setActiveSlide(currentImageIndex);
  displayIndex();
}

function previous() {
  if (currentImageIndex == 0) {
    currentImageIndex = slidesLength;
  } else {
    currentImageIndex--;
  }

  setActiveSlide(currentImageIndex);
  displayIndex();
}

setActiveSlide(currentImageIndex);

setInterval(next, 5000);
