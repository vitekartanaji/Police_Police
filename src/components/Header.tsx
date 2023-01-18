import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Carousel_1 from "../images/Header/Carousel_00.jpg";
import Carousel_2 from "../images/Header/Carousel_01.jpg";
import Carousel_3 from "../images/Header/Carousel_02.jpg";
import Carousel_4 from "../images/Header/Carousel_03.jpg";
import Carousel_5 from "../images/Header/Carousel_04.jpg";
import NavigationBar from './NavigationBar';

function Header() {
  return (
    <div>     
    <Carousel className='position-relative'>      
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100 h1"
          
          src={Carousel_1}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100 h1"
          src={Carousel_2}
          alt="Second slide"
        />
      
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h1"
          src={Carousel_3}
          alt="Third slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h1"
          src={Carousel_4}
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h1"
          src={Carousel_5}
          alt="Third slide"
        />
      <Button/>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
   
export default Header;