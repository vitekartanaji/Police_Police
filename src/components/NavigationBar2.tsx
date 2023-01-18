import React from 'react'

const NavigationBar2 = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top margin2 pt-4"  style={{backgroundColor:"#eb9f42"}}>
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">जेष्ठ नागरिक : १०९०</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">चाइल्डलाइन : १०९८</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">महिला हेल्पलाइन : १०९१</a>
        </li>
        <li className="nav-item">
          <a className="nav-link ">व्हाट्सएप : ८९७५२८३१००</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">नियंत्रण कक्ष : १००/११२</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavigationBar2
