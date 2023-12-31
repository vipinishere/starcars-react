import React, { useEffect, useRef } from 'react'
import gsap from "gsap";
import Typed from 'typed.js';

function Page1() {
  const page1TitleRef = useRef(null);
  const page1SubtitleRef = useRef(null);
  const callRef = useRef(null);


  useEffect(() => {
      var t = gsap.timeline();
      t.from(page1TitleRef.current, {
        x: 50,
        y: 100,
        opacity: 1,
        duration: 0.5,
      })
      .from(page1SubtitleRef.current, {
        x: 50,
        y: 100,
        opacity: 1,
        duration: 0.5,
    },  '-=0.25') // Adding a delay relative to the previous animation
      .from(callRef.current, {
        x: 50,
        y: 100,
        opacity: 1,
        duration: 0.5, 
      },  '-=0.25');

      var type = new Typed(".auto-type",{
        strings: ["Technicians","Services","Quality","Products","Environment"],
        typeSpeed: 150,
        backSpedd: 150,
        loop: true
       })

       return () => {
        // Destroy Typed instance during cleanup to stop animation
        type.destroy();
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
              <a href="#" id="special">
                <div id="green"></div>
                <span>sign in</span></a>
            </div>
        </nav>
          <div id="page1-content">
            <h1 ref={page1TitleRef}>Best <span className="auto-type" >Technicians</span></h1>
            <h5 ref={page1SubtitleRef}>A descriptive paragraph that tells clients how good you nare and proves that you are the best choice that they've made. This paragraph is also for those who are looking out for a reliable car repair.</h5>
            <button id="call" ref={callRef}><i className="ri-phone-fill"></i><span>EMERGENCY CALL 24/7</span></button>
          </div>
       </div>
  )
}

export default Page1