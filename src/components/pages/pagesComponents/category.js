import React, { useEffect, useRef } from 'react';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import catItem1 from '../../assests/png/catItem1.png'
import catItem2 from '../../assests/png/catItem2.png'
import catItem3 from '../../assests/png/catItem3.png'
import catItem4 from '../../assests/png/catItem4.png'

import img1 from "../../assests/png/pexels-max-vakhtbovych-6394704.jpg"
import img2 from "../../assests/png/pexels-skylar-kang-6430745.jpg"
import img3 from "../../assests/png/fashion.jpg"
import img4 from "../../assests/png/denim.jpg"
import img5 from "../../assests/png/knit2.jpg"

import img6 from "../../assests/png/pexels-sarah-chai-7262773.jpg"
import subcategorie1 from "../../assests/png/subcategorie1.jpg"

import quote from "../../assests/png/quote.jpg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from './sliders';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Category = () => {


    return (
        <div class="row custom-res-padding ">
            
            <div className='col-md-3 col-lg-3 col-sm-12 h-auto card_1  mainCat  '>
                        <span className='mainCat_span'>Textile</span>
                        <img src={img1} className='' alt="Image 1" />
                    </div>
                   
          
            <div class="col-lg-3 col-md-3 col-sm-12 cat_responsive_center px-lg-4">
           
                <div className='row gap-lg-0 gap-sm-4 cat__sub'>
                    
                    <div className='col-md-12 col-sm-12 card_2 '>
                        <div className='d-flex flex-column h-100'>
                            <p className=' px-2 mt-2 subCat_p'>Sub Categories</p>
                            <div className='d-flex flex-wrap align-items-center justify-content-center'>
                                <div className='pt-sm-3 px-2 py-0 d-flex align-items-center justify-content-center'>
                                    <div className=''>
                                        <img src={catItem3} width="90%" className='pb-2' max-width="150px" alt="Category 1" />
                                        <p className='px-2'>Bedding</p>
                                    </div>
                                    <div>
                                        <img src={catItem4} width="90%" max-width="150px" alt="Category 2" />
                                        <p className='mt-md-2 px-md-2'>Curtains</p>

                                    </div>
                                </div>
                                <div className='pt-md-3 px-md-2 py-0 d-flex align-items-center justify-content-center'>
                                    <div className=''>
                                        <img src={catItem2} width="90%" className='pb-md-2' max-width="150px" alt="Category 1" />
                                        <p className='mt-md-1 px-3'>pillows</p>
                                    </div>
                                    <div>
                                        <img src={catItem1} width="90%" max-width="150px" alt="Category 2" />
                                        <p className='mt-1 px-3'> Carpet</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="col-lg-6 col-sm-12  cat_responsive_center px-lg-4">
           
           <div className='row gap-lg-0 gap-sm-4 cat__sub'>
               
               <div className='col-md-12 col-sm-12 card_2 '>
                   <div className='h-100'>
                       <p className=' px-2 mt-2 subCat_p'>Recently Added</p>
                       <Slider/>
                   </div>
               </div>
           </div>


       </div>
           
         
        </div>
    )
}

export default Category
