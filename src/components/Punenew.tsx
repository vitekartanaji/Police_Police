import React from 'react'
import { Col, Row } from 'react-bootstrap';
import '../components/punenew.css';
import photo from '../images/Images/twitter-logo.png'
import moduleName from '../images/Images/news-update.svg';
export const Punenew = () => {
  return (
    <div className='mt-5'>
        <div>
            <h1 className='text-center'>पुणे पोलिसांकडून नवीनतम</h1>
        </div>
        <div className='mt-2'>
            <p className='text-center one'>आमचा नागरिकांशी स्पष्ट आणि प्रभावी संप्रेषणावर विश्वास आहे<br/>
             आणि म्हणून ते अखंडपणे करण्यासाठी सोशल मीडिया आणि बातम्यांच्या<br/>
              सामर्थ्यावर अवलंबून आहे
              </p>
        </div>
        
        <div className='border border-primary'>
        <Row>
          <Col>
          <Row>
            <Col>
            <img src={photo} width='70px' height='70px' className='m-3'/>
          <span className='text-primary'>@punecitypolice</span>
          <hr/>
          
            </Col>
          </Row>
          <Row>
            <Col>
            <div className='border border-2'>
<h3 className='d-inline me-5'>Tweets from @CPPuneCity</h3>
<button className=' d-inline p-2 bg-dark text-white rounded-5 '>Follow me</button>
            </div>
            <div>CP Pune City Retweeted</div>
            <div >

            </div>
            </Col>
          </Row>
          
          </Col>

          <Col>
          <img src={moduleName} width='70px' height='70px' className='m-3'/>
          <span className='text-primary'>बातम्या अद्यतने</span>
          <hr/>
          <Row>
            <Col>
            </Col>
          </Row>
          </Col>
        </Row>
        </div>
        
    </div>

  )
}
