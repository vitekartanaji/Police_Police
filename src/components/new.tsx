import React from "react";
import "../components/new.css";
import img1 from "../images/infopuneimages/lost-and-found.svg";
import img2 from '../images/infopuneimages/police-recruitment.svg';
import img3 from '../images/infopuneimages/tenant-information.svg';
import img4 from '../images/infopuneimages/missing-person.svg';
import img5 from '../images/infopuneimages/accident-compensation.svg';
import img6 from '../images/infopuneimages/stolen-unclaimed-vehicle.svg';
import { Row, Col, Container } from "react-bootstrap";

export const New = () => {
  return (
    <div className="row">

        <div>
        <div id="header">पुणेकरांनी सर्वाधिक वापरले</div>
        <div id="sub_header">
          'लॉस्ट अँड फाउंड' पासून ते 'भाडेकरू माहिती' पर्यंत आणि त्यामधील
          प्रत्येक गोष्ट,
          <br />
          आम्ही तुमच्यासाठी आमच्या सर्वाधिक वापरल्या जाणाऱ्या विभागांच्या जलद
          दुवे <br />
          सूचीबद्ध केले आहेत.
        </div>
        </div>
        <div className="flex-container">
            <div>
                <div className="img_bg">
                <a href="#" className="">
                <img src={img1} alt="Bootstrap" width="65" height="67" className="img_a"></img>
                </a>
            </div>
            <div className="img_name"><span>हरवले आणि सापडले</span></div>
            </div>

            <div>
                <div className="img_bg">
                <a href="#" >
                <img src={img2} alt="Bootstrap" width="65" height="67" className="img_a"></img>
                </a>
            </div>
            <div className="img_name"><span>पोलिस भरती</span></div>
            </div>

            <div>
                <div className="img_bg">
                <a href="#" >
                <img src={img3} alt="Bootstrap" width="68" height="70" className="img_a"></img>
                </a>
            </div>
            <div className="img_name"><span>भाडेकरू माहिती</span></div>
            </div>

            <div>
                <div className="img_bg">
                <a href="#" >
                <img src={img4} alt="Bootstrap" width="70" height="75" className="img_a"></img>
                </a>
            </div>
            <div className="img_name"><span>बेपत्ता व्यक्ती</span></div>
            </div>

            <div>
                <div className="img_bg">
                <a href="#" >
                <img src={img5} alt="Bootstrap" width="65" height="67" className="img_a"></img>
                </a>
            </div>
            <div className="img_name"><span>अपघात भरपाई</span></div>
            </div>

            <div>
                <div className="img_bg">
                <a href="#" >
                <img src={img6} alt="Bootstrap" width="65" height="67" className="img_a"></img>
                </a>
            </div>
            <div className="img_name">चोरलेली आणि दावे न केलेली वाहने</div>
            </div>
        </div>
        <br/>
        <br/>
    </div>
  );
}
