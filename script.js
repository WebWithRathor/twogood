gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

var main = document.querySelector("#main")
var menu = document.querySelector("#menus")
var menuclose = document.querySelector(".close")
var menubar = document.querySelector("#full-menu")
var count = 0
menu.addEventListener("click", function () {
    if (count == 0) {
        menubar.style.top = "0%"
        count = 1
        main.style.opacity = 0.5
        menu.innerHTML = `<i class="ri-close-line"></i>`
        menu.style.color = `white`
        
    }
    else {
        count = 0
        menubar.style.top = "-100%"
        main.style.opacity = 1
        menu.innerHTML = `<i class="ri-menu-fill"></i>`
        menu.style.color = `black`


        
    }
})

var c = document.querySelector(".cursor")

document.addEventListener("mousemove", function (dets) {
  gsap.to(c, {
    top: dets.y + "px",
    left: dets.x + "px"
  })
})
document.querySelector("#page0 video ").addEventListener("mouseenter", function () {
  c.style.backgroundColor = `black`;
  c.style.color = `white`;
  c.style.zIndex = `99`;
  c.style.width = `10vw`
  gsap.to(c, {
    scale: 1,

  })
})
document.querySelector("#page0 video").addEventListener("mouseleave", function () {

  gsap.to(c, {
    scale: 0,
  })
})

document.querySelector("#page3").addEventListener("mouseenter", function () {
  c.style.backgroundColor = `rgba(0, 128, 0, 0.372)`;
  c.style.color = `transparent`;
  c.style.zIndex = `-1`;
  c.style.width = `15vw`
})
document.querySelectorAll(".products").forEach(function (elem) {
  elem.addEventListener("mouseenter", function () {
    gsap.to(c, {
      scale: 1
    })
  })
  elem.addEventListener("mouseleave", function () {

    gsap.to(c, {
      scale: 0
    })
  })
})
var sho = document.querySelectorAll(".shops")
sho.forEach(function (saw) {
  saw.addEventListener("mouseenter", function () {
    gsap.to(saw, {
      height: `32vh`,
    })
  })
  saw.addEventListener("mouseleave", function () {
    gsap.to(saw, {
      height: `initial`,
    })
  })
})

var arr = [
  {text:"THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO."},
  {text:"THE HAMPERS WE ORDERED WERE LOVELY AND THE TEAM ARE WONDERFUL TO LIAISE WITH."},
  {text:"MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL; ELEGANT, MAGICAL AND MEANINGFUL, WITH THE ITEMS WRAPPED IN DELICIOUS-SMELLING TISSUE PAPER. GORGEOUS; WILL BE BACK FOR MORE."},
  {text:"THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO."},
  {text:"THE HAMPERS WE ORDERED WERE LOVELY AND THE TEAM ARE WONDERFUL TO LIAISE WITH."},
  {text:"MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL; ELEGANT, MAGICAL AND MEANINGFUL, WITH THE ITEMS WRAPPED IN DELICIOUS-SMELLING TISSUE PAPER. GORGEOUS; WILL BE BACK FOR MORE."},
  {text:"THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO."},
  {text:"THE HAMPERS WE ORDERED WERE LOVELY AND THE TEAM ARE WONDERFUL TO LIAISE WITH."},
  {text:"MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL; ELEGANT, MAGICAL AND MEANINGFUL, WITH THE ITEMS WRAPPED IN DELICIOUS-SMELLING TISSUE PAPER. GORGEOUS; WILL BE BACK FOR MORE."},
  {text:"THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO."},
  {text:"THE HAMPERS WE ORDERED WERE LOVELY AND THE TEAM ARE WONDERFUL TO LIAISE WITH."},
  {text:"MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL; ELEGANT, MAGICAL AND MEANINGFUL, WITH THE ITEMS WRAPPED IN DELICIOUS-SMELLING TISSUE PAPER. GORGEOUS; WILL BE BACK FOR MORE."},
  {text:"THANK YOU SO MUCH FOR THE BEAUTIFUL CATERING; IT MEANS A LOT WORKING WITH A COMPANY SUCH AS TWO GOOD CO."},
  {text:"THE HAMPERS WE ORDERED WERE LOVELY AND THE TEAM ARE WONDERFUL TO LIAISE WITH."},
  {text:"MY PACKAGE JUST ARRIVED AND THE PRESENTATION IS SO BEAUTIFUL; ELEGANT, MAGICAL AND MEANINGFUL, WITH THE ITEMS WRAPPED IN DELICIOUS-SMELLING TISSUE PAPER. GORGEOUS; WILL BE BACK FOR MORE."}
 ]
var clutter = ``
arr.forEach(function (elem, index) {
  clutter += `<div class="quote" >
  <div class="bullet" id="${index}" ></div>
  <h1>m//00${index+1}</h1>
  <h2>Cartier.</h2>
</div>`;
})
document.querySelector("#quotes").innerHTML = clutter;
document.querySelector("#quotes").addEventListener("click",function(dets){
document.querySelector("#page4>h1").textContent =arr[dets.target.id].text
})

var log =gsap.timeline({
  scrollTrigger:{
    scroller:"#main",
    trigger:"#logo svg:nth-child(1)",
    start:`15% 00%`,
    scrub:1
  }
}
)
log
.to("#logo svg:nth-child(1)",{
  top:`-100%`,
},"a")
.to("#logo svg:nth-child(2)",{
  top:0
},"a")
.to("#nav>h1",{
  y:-200
},"a")
.to("#nav2",{
  backgroundColor:"white"
})


gsap.from(".over h1",{
  y:200,
  stagger:.3
})

gsap.to(".shops",{
  y:170,
  duration:1,
  scrollTrigger:{
    scroller:"#main",
    trigger:".pics",
    start:"top 00%",
    end:"100% 50%",
    scrub:1
  }
})
gsap.from("#product-1 .products",{
  y:170,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#product-1",
    start:"top 40%",
    end:"100% 50%",
  }
})
gsap.from("#product-2 .products",{
  y:170,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"#main",
    trigger:"#product-2",
    start:"top 40%",
    end:"100% 50%",
  }
})
gsap.from("#foot2 svg path",{
  stagger:.5,
  opacity:0,
  duration:1,
  scrollTrigger:{
    scroller:"#main",
    trigger:".asd",
    start:"-20% 0%",
    end:"100% 10%",
    scrub:1
  }
}) 

