const wrapper = document.querySelector(".sliderwrapper")

const menuitem = document.querySelectorAll(".menuitem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 219,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 319,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 519,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct = products[0]

  const currentproductimg = document.querySelector(".productimg");
  const currentproducttitle = document.querySelector(".poducttitle");
  const currentproductprice = document.querySelector(".productprice");
  const currentproductcolors = document.querySelectorAll(".color");
  const currentproductsizes = document.querySelectorAll(".size");
  



menuitem.forEach((item, index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`; 
        
        //change the choosen product
        choosenProduct = products[index]
        
        //change text of current product
        
        currentproducttitle.textContent = choosenProduct.title;
        currentproductprice.textContent = "$" + choosenProduct.price;
        currentproductimg.src = choosenProduct.colors[0].img;

        //assign new colors

        currentproductcolors.forEach((color, index) => {
          color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});  

currentproductcolors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentproductimg.src = choosenProduct.colors[index].img;
  });
});

currentproductsizes.forEach((size,index) =>{
  size.addEventListener("click", ()=> {
    currentproductsizes.forEach((size) => {
      size.style.backgroundColor = "white";
    size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productbutton = document.querySelector(".prodctbutton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productbutton.addEventListener("click" , () => {
  payment.style.display = "flex";
});

close.addEventListener("click",() => {
  payment.style.display = "none";
});
  