import React, { useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

function Page1() {
  const pageOneRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#pageOneTitle", {
        x: 50,
        y: 100,
        opacity: 0,
        duration: 0.5,
      }).from("#pageOneSubtitle", {
        x: 50,
        y: 100,
        opacity: 0,
        duration: 0.5
      }).from("#call", {
        x: 50,
        y: 100,
        opacity: 0,
        duration: 0.5,
      })
    }, pageOneRef)
    const type = new Typed(".auto-type", {
      strings: ["Technicians", "Services", "Quality", "Products", "Environment"],
      typeSpeed: 150,
      backSpedd: 150,
      loop: true
    })

    return () => {
      type.destroy();
      ctx.revert()
    };
  }, []);

  return (

    <div id="page1">
      <nav id="navbar">
        <div id="left-nav"><span>STAR</span>CARS</div>
        <div id="right-nav">
          <a href="#"><span>Home</span><i className="ri-home-5-line"></i></a>
          <a href="#"><span>About us</span><i className="ri-group-fill"></i></a>
          <a href="#"><span>Contact</span><i className="ri-phone-line"></i></a>
          <a href="#"><span>Services</span><i className="ri-service-line"></i></a>
          <Link to="/signup" id="special">
            <div id="green"></div>
            <span>sign in</span>
          </Link>
        </div>
      </nav>
      <div ref={pageOneRef} id="page1-content">
        <h1 id="pageOneTitle">Best <span className="auto-type" >Technicians</span></h1>
        <h5 id="pageOneSubtitle">A descriptive paragraph that tells clients how good you nare and proves that you are the best choice that they've made. This paragraph is also for those who are looking out for a reliable car repair.</h5>
        <button id="call"><i className="ri-phone-fill"></i><span>EMERGENCY CALL 24/7</span></button>
      </div>
    </div>
  )
}

export default Page1