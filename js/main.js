let walk1;
let walk2;
let walk3;
let walk4;
let walk5;
let scrollTop;
let artWrapper;
let artScrollTop;
let invite;
let walkArr = [];
let svgName;

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

  artWrapper = document.querySelector(".artWrapper");
  invite = document.querySelector(".invite");

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
      }
    } else if (artScrollTop < 85) {
      for (let i = 0; i < 5; i++) {
        walkArr[i].style.opacity = 0.66;
        svgName.style.opacity = 0.66;
      }
    } else if (artScrollTop < 90) {
      for (let i = 0; i < 5; i++) {
        walkArr[i].style.opacity = 0.33;
        svgName.style.opacity = 0.33;
      }
    } else if (artScrollTop < 100) {
      for (let i = 0; i < 5; i++) {
        walkArr[i].style.opacity = 0;
        svgName.style.opacity = 0;
      }
    }
    if (artScrollTop < 33) {
      quote1.classList.add("on");
    } else if (artScrollTop < 66) {
      quote2.classList.add("on");
    } else if (artScrollTop < 100) {
      quote3.classList.add("on");
    }
  }

  if (artScrollTop > 90) {
    invite.style.opacity = artScrollTop / 135;
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
