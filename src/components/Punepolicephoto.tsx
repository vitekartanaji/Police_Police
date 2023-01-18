import React from 'react'
import img1 from '../images/punepolicepho/ig1.png';
import img2 from '../images/punepolicepho/ig2.png';
import img3 from '../images/punepolicepho/lg3.png';
import img4 from '../images/punepolicepho/lg4.png';
import img5 from '../images/punepolicepho/lg5.png';
import img6 from '../images/punepolicepho/lg6.png';
import '../components/punepolicephoto.css';

export const Punepolicephoto = () => {
  return (
    <div>
        <div className='text-center mt-5'>
            <h1>चित्रांमध्ये पुणे पोलीस</h1>
            <p className='text'>नवीन जगात जिथे आपल्यापैकी बहुतेकांना स्वतःला चित्रांद्वारे अपडेट ठेवणे <br/>
            आवडते, हा विभाग तुम्हाला पुणे पोलिसांशी संबंधित नवीनतम घटनांमधून <br/>
            घेऊन जातो!</p>
        </div>

    <div>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">

    <div className="carousel-item active" data-bs-interval="10000">
      <div className='row'>
        <div className='col-6 text-center'>
          <img src={img1} className="imgH "/>
        </div>

        <div className='col-6 text-center'>
          <img src={img2} className="imgH"/>
        </div>
      </div>
    </div>

    <div className="carousel-item active" data-bs-interval="10000">
      <div className='row'>
        <div className='col-6 text-center'>
          <img src={img3} className="imgH " alt="..."/>
        </div>

        <div className='col-6 text-center'>
          <img src={img4} className="imgH  " alt="..."/>
        </div>
      </div>
    </div>

    <div className="carousel-item active" data-bs-interval="10000">
      <div className='row'>
        <div className='col-6 text-center'>
          <img src={img5} className="imgH " alt="..."/>
        </div>

        <div className='col-6 text-center'>
          <img src={img6} className="imgH " alt="..."/>
        </div>
      </div>
    </div>

  </div>
  </div>
  </div>
  </div>
  )
}
