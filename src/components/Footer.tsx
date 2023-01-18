import React from 'react';
import img1 from '../images/footer/footer-image.png';
import img2 from "../images/infopuneimages/lost-and-found.svg";
import img3 from '../images/infopuneimages/police-recruitment.svg';
import img4 from '../images/infopuneimages/tenant-information.svg';
import img5 from '../images/infopuneimages/missing-person.svg';
import Marquee from 'react-fast-marquee';
import '../components/footer.css';

export const Footer = () => {
  return (
    <div className='container-fluid mt-5'>
        <div>
        <img src={img1} height="330px" width="100%"/>
        </div>
        <div className='bg-success'>
            <Marquee direction='left' speed={50} gradientWidth="50px">
                <span className='img_marq'><a><img src={img2} width="65px" height="70"/></a></span>
                <span className='img_marq'><a><img src={img3} width="65px" height="70"/></a></span>
                <span className='img_marq'><a><img src={img4} width="65px" height="70"/></a></span>
                <span className='img_marq'><a><img src={img5} width="65px" height="70"/></a></span>
            </Marquee>
        </div>
        <div className='row bg-primary'>
            <div className='col'>
            <b><p className='fot_info'>व्हाट्सएप : ८९७५२८३१००</p></b>
            </div>
            <div className='col'>
            <b><p className='fot_info'>महिला हेल्पलाइन : १०९१</p></b>
            </div>
            <div className='col'>
            <b><p className='fot_info'>नियंत्रण कक्ष : १००/११२</p></b>
            </div>
            <div className='col'>
                <b><p className='fot_info'>जेष्ठ नागरिक : १०९०</p></b>
            </div>
            <div className='col'>
            <b><p className='fot_info'>चाइल्डलाइन : १०९८</p></b>
            </div>
            <div className='col'>
            <b><p className='fot_info1'>वरीष्ठ पोलीस निरीक्षक आर्थिक गुन्हे शाखा :०२०-२६२०८२८५</p></b>
            </div>
        </div>
    </div>
  )
}
