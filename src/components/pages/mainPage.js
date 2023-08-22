import React, { useEffect, useState } from 'react'
import Header from '../header/header'
import Carousel from 'react-bootstrap/Carousel';
import slider1 from "../assests/png/sliderImage1.jpg"
import slider2 from "../assests/png/sliderImage1.jpg"
import slider3 from "../assests/png/sliderImage1.jpg"
import img1 from "../assests/png/pexels-max-vakhtbovych-6394704.jpg"
import img2 from "../assests/png/pexels-skylar-kang-6430745.jpg"
import img3 from "../assests/png/fashion.jpg"
import img4 from "../assests/png/denim.jpg"
import img5 from "../assests/png/knit2.jpg"
import img6 from "../assests/png/pexels-sarah-chai-7262773.jpg"
import quote from "../assests/png/quote.jpg"
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';
import "swiper/css";
import { FreeMode } from "swiper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Category from './pagesComponents/category';
import Review from './pagesComponents/review';
import Footer from '../footer/footer';
import Slider from './pagesComponents/Slider2';
const MainPage = () => {
    const handleSubmit=()=>{
        alert('hello')
    }
    const [isDown, setIsDown] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const handleMouseDown = (e) => {
        setIsDown(true);
        setStartX(e.pageX - e.currentTarget.offsetLeft);
        setScrollLeft(e.currentTarget.scrollLeft);
    };
    const handleMouseLeave = () => {
        setIsDown(false);
    };
    const handleMouseUp = () => {
        setIsDown(false);
    };
    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - e.currentTarget.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scrolling speed
        e.currentTarget.scrollLeft = scrollLeft - walk;
    };


    return (
        <>
            <Header />
            <Carousel >
                <Carousel.Item>

                    <img src={slider1} alt='jjj' />

                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider2} alt='jjj' />


                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider3} alt='jjj' />

                </Carousel.Item>
                <Carousel.Item>

                    <img src={slider3} alt='jjj' />

                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider2} alt='jjj' />


                </Carousel.Item>
                <Carousel.Item>
                    <img src={slider1} alt='jjj' />
                </Carousel.Item>
            </Carousel>
            <div className=' px-5'>
            <div className=' categories py-5'>
                <div className='' >
                    <div
                        className={`gallery ${isDown ? 'active' : ''}`}
                        id="SlideReact"
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                    >
                        <div className="gallery__item">
                            <img src={img1} alt="Image1" className="gallery__img" />
                            <h6 className='title px-3 mb-1'>
                                Home Textile
                            </h6>
                        </div>
                        <div className="gallery__item">
                            <img src={img2} alt="Image2" className="gallery__img" />
                            <h6 className='title px-3 mb-1'>

                               TOWEL
                            </h6>
                        </div>
                        <div className="gallery__item">
                            <img src={img3} alt="Image1" className="gallery__img" />
                            <h6 className='title px-3 mb-1 '>
                              
                                FASHION
                            </h6>
                        </div>
                        <div className="gallery__item">
                            <img src={img4} alt="Image2" className="gallery__img" />
                            <h6 className='title px-3 mb-1'>

                               DENIM
                            </h6>
                        </div>
                        <div className="gallery__item ">
                            <img src={img5} alt="Image1" className="gallery__img" />
                            <h6 className='title px-3 mb-1 px-3 m-0' >
                           
                                KNITWEAR 
                            </h6>
                        </div>
                        <div className="gallery__item ">
                            <img src={img6} alt="Image1" className="gallery__img" />
                            <h6 className='title px-3 mb-1 px-3 m-0' >
                        
                             BAGS
                            </h6>
                        </div>

                    </div>

                </div>
               {[1].map((data,index)=>(
                <div className='mt-5  '>
                <Category />
                <div class="mt-5">
                    <h1 class="mt-3 category_name">Textile</h1>
                <Slider/>
                </div>
                </div>
               )) 
               }
                    
                    <div className='request_quotation   custom-res-padding py-5'>
                        <p>Request For Quotation</p>
                        <div className='row'>
                            <div className='col-md-6 quotations'>
                                <img src={quote} />
                            </div>
                            <div className='col-md-6'>
                                <div className='req_form '>
                                    <p className='req_form_p'>
                                            One Request, Multiple Quotes
                                        </p>
                                    <form onSubmit={handleSubmit}>
                                        <div class="mb-3">
                                         
                                            <input type="text" className='looking_for' placeholder='What are you Lookign for...' />
                                        </div>
                                        <div class="mb-3 d-flex flex-row gap-2">
                                         <div className='w-50'>
                                         <input type="text" className='looking_for' placeholder='Quantity' />

                                         </div>
                                         <div className='w-50'>
                                            <select style={{height:"45px"}} className='w-100'>
                                                <option>
                                               Piece
                                                </option>
                                                <option>
                                                    Urdu
                                                    </option>
                                            </select>
                                         </div>
                                            

                                        </div>
                                               <div className='mb-3 py-2 d-flex align-items-center justify-content-center'>
                                        <button type="submit" className="req_button  w-md-50 w-100">Request for Quotation</button>
                                               </div>                
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                   
                    <div className='review  custom-res-padding py-sm-2'>
                      <p className='py-sm-2 '>What our customers say:</p>
                      <div className='row  review_gaps'>
                     {[1,2,3]?.map((data,index)=>(
                        <div className='col-lg-4'>
                        <Review/>
                        </div>
                     )) }
                     
                     

                      </div>

                    </div>

               
            </div>
            </div>

<Footer/>
        </>


    )
}

export default MainPage
