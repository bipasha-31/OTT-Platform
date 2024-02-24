let movies = [
    {
      name: "PATHAN",
      des:
        "Pathaan is an upcoming Indian Hindi-language spy action-thriller film written and directed by Siddharth Anand and produced by Aditya Chopra.The film stars Shah Rukh Khan, Deepika Padukone and John Abraham",
      image: "images/pathaan_6.jpg"

    },
    {
      name: "How I Met Your Mother",
      des:
        "Ted Mosby sits his teenage son and daughter down to tell them the story of how he met their mother. Marshall announces he's proposing to Lily, prompting Ted to realize that he needs to find love and settle down.",
      image: "images/img.jpeg"
    },
    {
      name: "wanda vision",
      des:
        "Wanda Maximoff and Vision- two super-powered beings living idealized suburban lives-being to suspect that everything it not as it seems",
      image: "images/slider 3.png"
    },
    {
      name: "raya and the last dragon",
      des:
        "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
      image: "images/slider 4.png"
    },
    {
      name: "Wednesday",
      des:
        "When a deliciously wicked prank gets Wednesday expelled,her parents ship her off to Nevermore Academy, the boarding school where they fell in love",
      image: "images/wedn.jpg"
    }
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0;
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
  const videoCards = [...document.querySelectorAll(".video-card")];
  
  videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
      let video = item.children[1];
      video.play();
    });
    item.addEventListener("mouseleave", () => {
      let video = item.children[1];
      video.pause();
    });
  });
  let cardContainers = [...document.querySelectorAll(".card-container")];
  let preBtns = [...document.querySelectorAll(".pre-btn")];
  let nxtBtns = [...document.querySelectorAll(".nxt-btn")];
  
  cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtns[i].addEventListener("click", () => {
      item.scrollLeft += containerWidth - 200;
    });
  
    preBtns[i].addEventListener("click", () => {
      item.scrollLeft -= containerWidth + 200;
    });
  });
  