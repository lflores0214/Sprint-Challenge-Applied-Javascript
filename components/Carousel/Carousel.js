/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const carouselContainer = document.querySelector(".carousel-container");
function Carousel() {
  const carousel = document.createElement("div"),
    leftBtn = document.createElement("div"),
    img1 = document.createElement("img"),
    img2 = document.createElement("img"),
    img3 = document.createElement("img"),
    img4 = document.createElement("img"),
    rightBtn = document.createElement("div");

  carousel.classList.add("carousel");
  leftBtn.classList.add("left-button");
  rightBtn.classList.add("right-button");

  leftBtn.textContent = "<";
  rightBtn.textContent = ">";

  const carouselWidth = carousel.offsetWidth;
  const img1Style = img1.currentStyle;
  const img1MarginRight = Number(img1Style.amrginRight.match(/\d+/g)[0]);

  const img2Style = img2.currentStyle;
  const img2MarginRight = Number(img2Style.amrginRight.match(/\d+/g)[0]);

  const img3Style = img3.currentStyle;
  const img3MarginRight = Number(img3Style.amrginRight.match(/\d+/g)[0]);

  const img4Style = img4.currentStyle;
  const img4MarginRight = Number(img4Style.amrginRight.match(/\d+/g)[0]);

  const imgCount = 4;
  let offSet = 0;
  const maxX = -((imgCount / 4) * carouselWidth+
                (img1MarginRight * (imgCount / 4))-
                carouselWidth - img1MarginRight);

  leftBtn.addEventListener("click", () => {
    if (offset !== 0) {
      offset += carouselWidth + cardMarginRight;
      carousel.style.transform = `translatex(${offset}px)`;
    }
  });
  rightBtn.addEventListener("click", () => {
    if (offset !== maxX) {
      offset -= carouselWidth + img1MarginRight;
      carousel.style.transform = `translatex(${offset}px)`;
    }
  });

  img1.src = "./assets/carousel/mountains.jpeg";
  img2.src = "/assets/carousel/computer.jpeg";
  img3.src = "./assets/carousel/trees.jpeg";
  img4.src = "./assets/carousel/turntable.jpeg";

  return carousel;
}
carouselContainer.appendChild(Carousel());
