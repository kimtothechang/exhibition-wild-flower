// 움직이는 사람 엘리먼트
const walk1 = document.querySelector(".walk1");
const walk2 = document.querySelector(".walk2");
const walk3 = document.querySelector(".walk3");
const walk4 = document.querySelector(".walk4");
const walk5 = document.querySelector(".walk5");
const walkArr = [walk1, walk2, walk3, walk4, walk5];

// 인도 엘리먼트
const sidewalk = document.querySelector(".walk");

// SVG 엘리먼트
const svgName = document.querySelector("svg");

// 전시회 설명 엘리먼트
const quote1 = document.querySelector(".quote1");
const quote2 = document.querySelector(".quote2");
const quote3 = document.querySelector(".quote3");

// 열거된 사진 컨테이너 엘리먼트
const artWrapper = document.querySelector(".artWrapper");

// 초대장 컨테이너 및 배경사진 엘리먼트
const invite = document.querySelector(".invite");
const inviteImg = document.querySelector(".inviteImg");

// 스크롤 안내 문구
const forScroll = document.querySelector(".forScroll");

// forAnimationFrame
let x = 0;
let mx = 0;

// 최초 렌더링 시 사람 렌더링
walk1.classList.add("on");

// 스크롤 할 경우 해당 걸음 모션 제외 제거
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

// 전시회 설명 문구 FadeIn
const fadeInQuotes = () => {
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
};

// 초대장 FadeIn
const fadeInInvite = () => {
  if (artScrollTop < 92) {
    inviteImg.style.opacity = 0.15;
    invite.style.opacity = 0.2;
  } else if (artScrollTop < 94) {
    inviteImg.style.opacity = 0.3;
    invite.style.opacity = 0.4;
  } else if (artScrollTop < 96) {
    inviteImg.style.opacity = 0.4;
    invite.style.opacity = 0.6;
  } else if (artScrollTop < 98) {
    inviteImg.style.opacity = 0.5;
    invite.style.opacity = 0.8;
  } else if (artScrollTop < 100) {
    inviteImg.style.opacity = 0.6;
    invite.style.opacity = 1;
  }
};

// 초대장 제외 FadeOut(80% 이상)
const fadeOutAll = () => {
  if (artScrollTop < 80) {
    for (let i = 0; i < 5; i++) {
      walkArr[i].style.opacity = 1;
      //svgName.style.opacity = 1;
      sidewalk.style.opacity = 1;
    }
  } else if (artScrollTop < 85) {
    for (let i = 0; i < 5; i++) {
      walkArr[i].style.opacity = 0.66;
      //svgName.style.opacity = 0.66;
      sidewalk.style.opacity = 0.66;
    }
  } else if (artScrollTop < 90) {
    for (let i = 0; i < 5; i++) {
      walkArr[i].style.opacity = 0.33;
      //svgName.style.opacity = 0.33;
      sidewalk.style.opacity = 0.33;
    }
  } else if (artScrollTop < 100) {
    for (let i = 0; i < 5; i++) {
      walkArr[i].style.opacity = 0;
      //svgName.style.opacity = 0;
      sidewalk.style.opacity = 0;
    }

    fadeInInvite();
  }
};

// 스크롤 시 이벤트
window.addEventListener("scroll", (e) => {
  x = document.documentElement.scrollTop;
  // 스크롤 값
  scrollTop = document.documentElement.scrollTop;
  // 걷는 모션을 위한 스크롤값(0~399)
  walkScrollTop = scrollTop % 400;
  // 스크롤 값 백분율 전환 (0~100%)
  artScrollTop = Math.ceil(
    (scrollTop / (document.body.scrollHeight - window.outerHeight)) * 100
  );

  // walkingman 움직이는 모션 + FedeOut
  if (artScrollTop < 101) {
    // 스크롤 5 이하 시 스크롤 안내 문구 제거
    if (artScrollTop < 5) {
      forScroll.style.opacity = (10 - 2 * artScrollTop) / 10;
    } else {
      forScroll.style.opacity = 0;
    }
    // 스크롤 90 이하 시 초대장 opacity 0
    if (artScrollTop < 90) {
      invite.style.opacity = 0;
    }
    // walkScrollTop 5등 분 후 걷는 모션 조절
    if (walkScrollTop < 80) {
      removeDuplication(1);
      walk1.classList.add("on");
    } else if (walkScrollTop < 160) {
      removeDuplication(2);
      walk2.classList.add("on");
    } else if (walkScrollTop < 240) {
      removeDuplication(3);
      walk3.classList.add("on");
    } else if (walkScrollTop < 320) {
      removeDuplication(4);
      walk4.classList.add("on");
    } else if (walkScrollTop < 400) {
      removeDuplication(5);
      walk5.classList.add("on");
    }

    fadeOutAll();
    fadeInQuotes();
  }

  // 사진 이동
  //   artWrapper.style.transform = `translate(${
  //     window.outerWidth - artScrollTop * 20
  //   }px, 0)`;
  loop();
});

function loop() {
  if (window.outerWidth < 550) {
    mx += (x / 4 - mx) * 0.05;
    artWrapper.style.transform = `translate(${window.outerWidth - mx}px, 0)`;
  } else {
    mx += (x / 4 - mx) * 0.05;
    artWrapper.style.transform = `translate(${
      window.outerWidth - mx * 2.1
    }px, 0)`;
  }

  window.requestAnimationFrame(loop);
}

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
