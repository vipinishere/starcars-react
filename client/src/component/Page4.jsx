import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

function Page4() {

  const pageFourRef = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".card", {
        scrollTrigger: {
          trigger: ".card",
          scroller: "body",
          start: "top 90%",
          end: "bottom 50%",
          scrub: true,
        },
        y: -80,
        duration: 2,
      });
    }, pageFourRef)

    document.querySelectorAll("#page4-cards .card").forEach(function (elem) {
      elem.addEventListener("mouseover", function () {
        gsap.to(this, {
          y: -20,
          duration: 0.8,
        });
      });
    });

    document.querySelectorAll("#page4-cards .card").forEach(function (elem) {
      elem.addEventListener("mouseout", function () {
        gsap.to(this, {
          y: 0,
          duration: 0.8,
        });
      });
    });


    return () => {
      ctx.revert()
    }
  }, [])
  return (
    <div id="page4" ref={pageFourRef}>
      <div id="page4-photocontainer">
        <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNhcnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <h2><i className="ri-tools-fill"></i>  How It works<br />
          <span>We Offer Full Service Auto Repaier & Maintenance</span></h2>
        <div id="page4-cards">
          <div id="card1" className="card">
            <h1>01</h1>
            <h4>Choose</h4>
            <h5>Choose Your Service From Our Wide Range Of Offerings</h5>
          </div>
          <div id="card2" className="card">
            <h1>02</h1>
            <h4>Book</h4>
            <h5>Make An Appointment With Us</h5>
          </div>
          <div id="card3" className="card">
            <h1>03</h1>
            <h4>Fair pricing</h4>
            <h5>Always Get a Fair Quote</h5>
          </div>
          <div id="card4" className="card">
            <h1>04</h1>
            <h4>At Your Doorstep</h4>
            <h5>Get a Door Step Pick Up & Drop Facility</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page4