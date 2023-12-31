import React from 'react'

function Page2() {
  return (
    <div id="page2">
        <div id="page2-heading">
            <h2>Our Services</h2>
            <h3>Visit our nearest workshop for high-quality services</h3>
        </div>
        <div id="page2-services">
            <div className="service" id="service1">
              <img src="https://automechanica.com/uploads/home_page_service_usp/icon/1/car-diagnostic.svg" alt=""/>
              <h3>Diagnostics</h3>
            </div>
            <div className="service" id="service2">
              <img src="https://automechanica.com/uploads/home_page_service_usp/icon/2/car-Dent_Paint.svg" alt=""/>
              <h3>Dent & Paint</h3>
            </div>
            <div className="service" id="service3">
              <img src="https://automechanica.com/uploads/home_page_service_usp/icon/3/Car-Oil_Lube.svg" alt=""/>
              <h3>Oil/Lube/Filter</h3>
            </div>
            <div className="service" id="service4">
              <img src="https://automechanica.com/uploads/home_page_service_usp/icon/4/Car-Brake.svg" alt=""/>
              <h3>Brakes</h3>
            </div>
            <div className="service" id="service5">
              <img src="https://automechanica.com/uploads/home_page_service_usp/icon/5/car-suspension.svg" alt=""/>
              <h3>Suspension</h3>
            </div>
            <div className="service" id="service6">
              <img src="https://automechanica.com/uploads/home_page_service_usp/icon/6/Car_-_Detailing.svg" alt=""/>
              <h3>Detailing</h3>
            </div>
        </div>
       </div>
  )
}

export default Page2