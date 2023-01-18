import React from 'react'
import { Button } from 'react-bootstrap';
import '../components/important.css';
import img1 from '../images/imp/img1.png';
import img2 from '../images/imp/img2.jpeg';

export const Important = () => {
  return (
    <div>
        <div className='main'>
            <h1>विशेष उल्लेख</h1>
            <p className='sub_main'>
            या विभागात तुम्हाला आमच्या प्रमुख उपक्रमांबद्दल तसेच शौर्य आणि बलिदानाच्या<br/>
             काही प्रेरणादायी कथांबद्दल अधिक माहिती मिळेल जिथे आमचे कर्मचारी त्यांच्या <br/>
             कर्तव्याच्या पलीकडे गेले
            </p>
        </div>
        <div className='row'>
            <div className='col-6'>
                <img src={img2} className="img_info " ></img>
            <div className='row'>
                <div className='col'><Button className='m2' >click me</Button></div>
                <h1 className='head'>आमची 'माय सेफ पुणे' प्रणाली</h1>
                <p className='img_subinfo'>
                लाइव्ह ग्राउंड इंटेलिजन्ससाठी दररोज हजारो जिओटॅग केलेल्या प्रतिमांवर प्रक्रिया <br/>
                करणार्‍या आमच्या पहिल्या प्रकारच्या प्रणालीचा परिचय
                </p>
            </div>
            </div>
            <div className='col'>
                <img src={img1} className="img_info"/>
                <div className='col'><Button className='m2' >click me</Button></div>
                <h1 className='head'>त्याग आणि शौर्याच्या कथा</h1>
                <p className='img_subinfo'>
                आमचा विश्वास आहे की धैर्य आणि निःस्वार्थ सेवेच्या सत्य कथा आपल्या सर्वांना एकापेक्षा <br/>
                अधिक मार्गांनी प्रेरित करू शकतात आणि म्हणूनच हायलाइट करणे महत्वाचे आहे
                </p>
            </div>
        </div>
    </div>
  )
}
