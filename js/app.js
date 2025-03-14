const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");


// "code" just means a different style / color. i could list different varients of the same item
const products = [
  {
    id: 1,
    title: "ONE",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./assets/images/Soraaa.png",
      },
      {
        code: "blue",
        img: "./assets/images/Soraaa2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Assassination Classroom Manga",
    price: 30,
    colors: [
      {
        code: "lightgray",
        img: "./assets/images/AC.jpg",
      },
      {
        code: "green",
        img: "./assets/images/AC2.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "Pikachu Plushie",
    price: 1000,
    colors: [
      {
        code: "lightgray",
        img: "./assets/images/pikaplushie.png",
      },
      {
        code: "green",
        img: "./assets/images/pika2.jpg",
      },
    ],
  },
  {
    id: 4,
    title: "FOUR",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./assets/images/search.png",
      },
      {
        code: "lightgray",
        img: "./assets/images/search.png",
      },
    ],
  },
  {
    id: 5,
    title: "FIVE",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./assets/images/search.png",
      },
      {
        code: "black",
        img: "./assets/images/search.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});