  function pageOneAnimation(){
    var t = gsap.timeline();
    t.from("#page1 #page1-content h1",{
      x:50,
      y: 100,
      opacity: 0,
      duration: .5
    }).from("#page1 h5",{
      x:50,
      y: 100,
      opacity: 0,
      duration: .5
    }).from("#page1 #call",{
      x:50,
      y: 100,
      opacity: 0,
      duration: .5
    })
  //    autotyping
     var type = new Typed(".auto-type",{
      strings: ["Technicians","Services","Quality","Products","Environment"],
      typeSpeed: 150,
      backSpedd: 150,
      loop: true
     })
     console.log("hello")
  }
  pageOneAnimation()
  
  function pageTwoAnimation(){
      gsap.from(".service",{
        scrollTrigger:{
        trigger: "#page2-heading",
        scroller: "body",
        start: "bottom 85%",
        end: "top 30%",
        scrub: true,
        },
        y: 400,
        scale: .5,
        opacity: 0,
        duration: 4
      });
  
      document.querySelectorAll(".service").forEach(function(elem){elem.addEventListener("mouseover",function(){
        gsap.to(this,{
          y : -40,
          scale: 1.1,
          backgroundColor: "#f0eded",
          duration: .8
        })
      })
  })
      document.querySelectorAll(".service").forEach(function(elem){elem.addEventListener("mouseout",function(){
        gsap.to(this,{
          y : 0,
          scale: 1,
          backgroundColor: "#e0e0e0",
          duration: .8
        })
      })
     })
  }
  pageTwoAnimation()
  
  function pageFourAnimation(){
    gsap.from("#page4 .card",{
      scrollTrigger: {
          trigger: "#page4 .card",
          scroller: "body",
          start: "top 90%",
          end: "bottom 50%",
          scrub: true
      },
      y:-80,
      duration: 2
     })
       document.querySelectorAll("#page4-cards .card").forEach(function(elem){
      elem.addEventListener("mouseover",function(){
        gsap.to(this,{
          y: -20,
          duration: .8
        })
      })
    })
  
       document.querySelectorAll("#page4-cards .card").forEach(function(elem){
      elem.addEventListener("mouseout",function(){
        gsap.to(this,{
          y: 0,
          duration: .8
        })
      })
    })
  }
  pageFourAnimation()
  
  function pageEightAnimation(){
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 0,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
          }
    });
  }
  pageEightAnimation()