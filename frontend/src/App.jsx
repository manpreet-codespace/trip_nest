// import logo from './logo.svg';
import './App.css'; 
import Navbar from './components/layout/Navbar/Navbar';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import heroBg1 from "./assets/Overlay+Image.png";
import heroBg2 from "./assets/Container.png";
import heroBg3 from "./assets/3.png";
import { PhoneCall, MapPin,Hotel, Earth, CarFront, SquareChartGantt } from 'lucide-react';
import newYork from "./assets/Mask Group.png";



function App() {

  const heroCarousel=[
    {img:heroBg1, alt:"heroBg1"},
    {img:heroBg2, alt:"heroBg2"},
    {img:heroBg3, alt:"heroBg3"}
  ]
  return (
    <>
      <section className='Hero'>
      <Navbar/>
        <Swiper 
        modules={[Navigation]}
        navigation={true}
        spaceBetween={20}
        slidesPerView={1}
        className="swiper"
        >
          {
            heroCarousel.map((carousel,index)=>(
              <SwiperSlide key={index} className='SwiperSlide'>
                  <img src={carousel.img} alt={carousel.alt} />
              </SwiperSlide>
            ))
          }
        </Swiper>

        <div className='hero-container'>
          <img src={newYork} alt='label - New York' className=''/>
          <h1 className='hero-heading'>Let's Explore Your <br/><span>Family</span> Trip.</h1>
          <div className=''>
            <a href='tel:+990-737 621 432' className='hero-phone-call'>
            <PhoneCall />
            <div className=''>
              <p className='inquiry-tag'>To More Inquiry</p>
              <p>+990-737 621 432</p>
            </div>
            </a>
          </div>

          <div className='search-box'>
            <div className='search-tabs'>
              <button className='search-tab'><MapPin /> Tour</button>
              <button className='search-tab'><Hotel /> Hotel</button>
              <button className='search-tab'><Earth /> Visa</button>
              <button className='search-tab'><SquareChartGantt /> Activities</button>
              <button className='search-tab'><CarFront /> Transport</button>
            </div>
          </div>
        </div>
        


      </section>
    </>
  );
}

export default App;
