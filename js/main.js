let walk1;
let walk2;
let walk3;
let walk4;
let walk5;
let scrollTop;
let artWrapper;
let artScrollTop;
let invite;
let inviteX;
let walkArr = [];
let svgName;
let sidewalk;
let inviteImg;

window.onload = function () {
  walk1 = document.querySelector(".walk1");
  walk2 = document.querySelector(".walk2");
  walk3 = document.querySelector(".walk3");
  walk4 = document.querySelector(".walk4");
  walk5 = document.querySelector(".walk5");
  walkArr = [walk1, walk2, walk3, walk4, walk5];
  svgName = document.querySelector("svg");
  quote1 = document.querySelector(".quote1");
  quote2 = document.querySelector(".quote2");
  quote3 = document.querySelector(".quote3");
  sidewalk = document.querySelector(".walk");

  artWrapper = document.querySelector(".artWrapper");
  invite = document.querySelector(".invite");
  inviteX = document.querySelector(".inviteX");
  inviteImg = document.querySelector(".inviteImg");

  walk1.classList.add("on");
};

const removeDuplication = (which) => {
  if (which !== 1) {
    walk1.classList.remove("on");
  }
  if (which !== 2) {
    walk2.classList.remove("on");
  }
  if (which !== 3) {
    walk3.classList.remove("on");
  }
  if (which !== 4) {
    walk4.classList.remove("on");
  }
  if (which !== 5) {
    walk5.classList.remove("on");
  }
};

window.addEventListener("scroll", (e) => {
  scrollTop = document.documentElement.scrollTop;
  walkScrollTop = scrollTop % 200;
  artScrollTop = Math.ceil(
    (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
  );

  // walkingman 움직이는 모션 + FedeOut
  if (artScrollTop < 101) {
    if (artScrollTop < 90) {
      inviteX.style.opacity = 0;
    }
    if (walkScrollTop < 40) {
      removeDuplication(1);
      walk1.classList.add("on");
    } else if (walkScrollTop < 80) {
      removeDuplication(2);
      walk2.classList.add("on");
    } else if (walkScrollTop < 120) {
      removeDuplication(3);
      walk3.classList.add("on");
    } else if (walkScrollTop < 160) {
      removeDuplication(4);
      walk4.classList.add("on");
    } else if (walkScrollTop < 200) {
      removeDuplication(5);
      walk5.classList.add("on");
    }
    if (artScrollTop < 80) {
      for (let i = 0; i < 5; i++) {
        walkArr[i].style.opacity = 1;
        svgName.style.opacity = 1;
        sidewalk.style.opacity = 1;
      }
    } else if (artScrollTop < 85) {
      for (let i = 0; i < 5; i++) {
        walkArr[i].style.opacity = 0.66;
        svgName.style.opacity = 0.66;
        sidewalk.style.opacity = 0.66;
      }
    } else if (artScrollTop < 90) {
      for (let i = 0; i < 5; i++) {
        walkArr[i].style.opacity = 0.33;
        svgName.style.opacity = 0.33;
        sidewalk.style.opacity = 0.33;
      }
    } else if (artScrollTop < 100) {
      for (let i = 0; i < 5; i++) {
        walkArr[i].style.opacity = 0;
        svgName.style.opacity = 0;
        sidewalk.style.opacity = 0;
      }

      if (artScrollTop < 92) {
        inviteImg.style.opacity = 0.1;
        inviteX.style.opacity = 0.2;
      } else if (artScrollTop < 94) {
        inviteImg.style.opacity = 0.2;
        inviteX.style.opacity = 0.4;
      } else if (artScrollTop < 96) {
        inviteImg.style.opacity = 0.3;
        inviteX.style.opacity = 0.6;
      } else if (artScrollTop < 98) {
        inviteImg.style.opacity = 0.4;
        inviteX.style.opacity = 0.8;
      } else if (artScrollTop < 100) {
        inviteImg.style.opacity = 0.5;
        inviteX.style.opacity = 1;
      }
    }
    if (artScrollTop < 33) {
      quote1.classList.add("on");
      quote1.style.opacity = artScrollTop / 16.5;
    } else if (artScrollTop < 66) {
      quote2.classList.add("on");
      quote2.style.opacity = Math.abs(artScrollTop - 33) / 16.5;
    } else if (artScrollTop < 100) {
      quote3.classList.add("on");
      quote3.style.opacity = Math.abs(artScrollTop - 66) / 16.5;
    }
  }

  console.log(artScrollTop);

  artWrapper.style.transform = `translate(${100 - artScrollTop * 3}%, 0)`;
});

// SVG Scroll
let path = document.querySelector("path");
let pathLength = path.getTotalLength();

path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDashoffset = pathLength;

window.addEventListener("scroll", () => {
  let scrollPercentage =
    (document.documentElement.scrollTop + document.body.scrollTop) /
    (document.documentElement.scrollHeight -
      document.documentElement.clientHeight);

  let drawLength = pathLength * scrollPercentage;

  path.style.strokeDashoffset = pathLength - drawLength;
});
