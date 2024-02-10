// gsap.registerPlugin(ScrollTrigger);
// const locoScroll = new LocomotiveScroll({
//    el: document.querySelector("body"),
//    smooth: true,
//    smoothMobile: true,
// });
// locoScroll.on("scroll", ScrollTrigger.update);
// ScrollTrigger.scrollerProxy("body", {
//    scrollTop(value) {
//       return arguments.length
//          ? locoScroll.scrollTo(value, 0, 0)
//          : locoScroll.scroll.instance.scroll.y;
//    },
//    getBoundingClientRect() {
//       return {
//          top: 0,
//          left: 0,
//          width: window.innerWidth,
//          height: window.innerHeight,
//       };
//    },
//    pinType: document.querySelector("body").style.transform
//       ? "transform"
//       : "fixed",
// });
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

// let images = gsap.utils.toArray(".z-out");

// images.forEach((item, index) => {
//    let exptl = gsap.timeline({
//       scrollTrigger: {
//          trigger: item,
//          start: "top 85%",
//          end: "top 5%",
//          scrub: 2,
//          markers: true,
//          scroller: ".data-scroll-container",
//       },
//    });
//    exptl.from(item, {
//       x: 100,
//       opacity: 0,
//       duration: 1,
//    });
// });

var swiper = new Swiper(".mySwiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   keyboard: {
      enabled: true,
   },
   autoHeight: true,
   lazyLoading: true,
});

const toggleBtn = document.querySelector(".menu-icon");
const toggleBtnIcon = document.querySelector(".menu-icon i");
const dropDowm = document.querySelector(".navDropdownMobile");
toggleBtn.onclick = function () {
   dropDowm.classList.toggle("open");
   const isOpen = dropDowm.classList.contains("open");
   toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

var sections = gsap.utils.toArray(".Divfeatures");
sections.forEach((section) => {
   gsap.from(section, {
      scale: 0.85,
      duration: 0.4,
      opacity: 1,
      scrollTrigger: {
         trigger: section,
         start: "top 80%",
         end: "top 10%",
         scrub: true,
      },
   });
});

gsap.from(".rightMain img", {
   scale: 0.8,
   duration: 1,
   scrollTrigger: {
      trigger: ".rightMain img",
      scrub: 2,
      scroller: "body",
      start: "top 90%",
   },
});
gsap.from(".rightMain img", {
   y: 100,
   duration: 1.3,
   delay: 0.3,
});

gsap.from(".circleOne", {
   x: 100,
   duration: 1.3,
   delay: 0.3,
});

gsap.from(".circleTwo", {
   x: -100,
   duration: 1.3,
   delay: 0.3,
});

gsap.from(".mainDot1", {
   scale: 0.7,
   duration: 2.3,
   delay: 0.3,
});
gsap.from(".mainDot2", {
   scale: 0.6,
   duration: 2.3,
   delay: 0.3,
});

gsap.from("h1", {
   y: 40,
   duration: 1.6,
   delay: 0.3,
});

gsap.from(".btnContainerMain", {
   y: 40,
   duration: 1.8,
   delay: 0.3,
});

gsap.from(".stepContainer img, .headingStep, .subheadingStep ", {
   y: 70,
   duration: 1.8,
   delay: 0.3,
   scrollTrigger: {
      trigger: ".stepSection",
      scrub: 2,
      scroller: "body",
      start: "top 90%",
   },
});

gsap.from(".stepContainer img", {
   scale: 0.7,
   duration: 1.8,
   delay: 0.3,
   scrollTrigger: {
      trigger: ".stepSection",
      scrub: 2,
      scroller: "body",
      start: "top 90%",
   },
});

var sections1 = gsap.utils.toArray(".heading1");
sections1.forEach((section) => {
   gsap.from(section, {
      // scale: 0.85,
      y: 70,
      duration: 0.4,
      opacity: 1,
      scrollTrigger: {
         trigger: section,
         start: "top 80%",
         end: "top 10%",
         scrub: true,
      },
   });
});

var sections2 = gsap.utils.toArray(".heading");
sections2.forEach((section) => {
   gsap.from(section, {
      // scale: 0.85,
      y: 70,
      duration: 0.4,
      opacity: 1,
      scrollTrigger: {
         trigger: section,
         start: "top 80%",
         end: "top 10%",
         scrub: true,
      },
   });
});

var sections3 = gsap.utils.toArray(".aboutDiv");
sections3.forEach((section) => {
   gsap.from(section, {
      scale: 0.9,
      y: 70,
      duration: 0.4,
      scrollTrigger: {
         trigger: section,
         start: "top 90%",
         // end: "top 10%",
         scrub: true,
      },
   });
});

var sections4 = gsap.utils.toArray(".aboutDivContainer img");
sections4.forEach((section) => {
   gsap.from(section, {
      scale: 0.9,
      x: 50,
      duration: 0.4,
      scrollTrigger: {
         trigger: section,
         start: "top 90%",
         // end: "top 10%",
         scrub: true,
      },
   });
});

gsap.from(".aboutHeding, .aboutSubHeading", {
   y: 80,
   duration: 1.8,
   delay: 0.3,
   scrollTrigger: {
      trigger: ".about",
      scrub: 2,
      scroller: "body",
      start: "top 80%",
   },
});

gsap.from(".formImage img", {
   scale: 0.7,
   duration: 1.8,
   delay: 0.3,
   scrollTrigger: {
      trigger: "form",
      scrub: 2,
      scroller: "body",
      start: "top 90%",
   },
});
// gsap.from(".footerHeading", {
//    y: 80,
//    duration: 0.3,
//    // delay: 0.3,
//    scrollTrigger: {
//       trigger: ".footerHeading",
//       scrub: 2,
//       scroller: "body",
//       start: "top 99%",
//    },
// });
var sections5 = gsap.utils.toArray(".footerCircle");
sections5.forEach((section) => {
   gsap.from(section, {
      scale: 0.8,
      y: 50,
      // duration: 1,
      scrollTrigger: {
         trigger: "footer",
         scroller: "body",
         // markers: true,
         start: "top 99%",
         end: "top 50%",
         scrub: true,
      },
   });
});
