import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

function Page2() {

  const pageTwoRef = useRef(null)
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".service", {
        scrollTrigger: {
          trigger: "#page2-heading",
          scroller: "body",
          start: "bottom 85%",
          end: "top 30%",
          scrub: true,
        },
        y: 400,
        scale: 0.5,
        opacity: 0,
        duration: 4,
      });
    }, pageTwoRef)

    document.querySelectorAll(".service").forEach(function (elem) {
      elem.addEventListener("mouseover", function () {
        gsap.to(this, {
          y: -40,
          scale: 1.1,
          backgroundColor: "#f0eded",
          duration: 0.8,
        });
      });
    });
    document.querySelectorAll(".service").forEach(function (elem) {
      elem.addEventListener("mouseout", function () {
        gsap.to(this, {
          y: 0,
          scale: 1,
          backgroundColor: "#e0e0e0",
          duration: 0.8,
        });
      });
    });

    return () => {
      ctx.revert();
    }
  }, [])

  return (
    <div id="page2">
      <div id="page2-heading">
        <h2>Our Services</h2>
        <h3>Visit our nearest workshop for high-quality services</h3>
      </div>
      <div id="page2-services" ref={pageTwoRef}>
        <div className="service" id="service1">
          <img src="https://automechanica.com/uploads/home_page_service_usp/icon/1/car-diagnostic.svg" alt="" />
          <h3>Diagnostics</h3>
        </div>
        <div className="service" id="service2">
          <img src="https://automechanica.com/uploads/home_page_service_usp/icon/2/car-Dent_Paint.svg" alt="" />
          <h3>Dent & Paint</h3>
        </div>
        <div className="service" id="service3">
          <img src="https://automechanica.com/uploads/home_page_service_usp/icon/3/Car-Oil_Lube.svg" alt="" />
          <h3>Oil/Lube/Filter</h3>
        </div>
        <div className="service" id="service4">
          <img src="https://automechanica.com/uploads/home_page_service_usp/icon/4/Car-Brake.svg" alt="" />
          <h3>Brakes</h3>
        </div>
        <div className="service" id="service5">
          <img src="https://automechanica.com/uploads/home_page_service_usp/icon/5/car-suspension.svg" alt="" />
          <h3>Suspension</h3>
        </div>
        <div className="service" id="service6">
          <img src="https://automechanica.com/uploads/home_page_service_usp/icon/6/Car_-_Detailing.svg" alt="" />
          <h3>Detailing</h3>
        </div>
      </div>
    </div>
  )
}

export default Page2