import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../../styles/main.css"

import img1 from "../../assests/png/shirt-men.jpeg"
import img2 from "../../assests/png/Puffercoat.jpeg"
import img3 from "../../assests/png/USAflagbadge.jpeg"
import img4 from "../../assests/png/bedcover.jpeg"
import img5 from "../../assests/png/pjset.jpeg"
import { useState } from "react";



const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 768, itemsToShow: 4 },
    { width: 1200, itemsToShow: 6 },
    { width: 1300, itemsToShow: 6 },
    { width: 1500, itemsToShow: 7 },
    { width: 1600, itemsToShow: 8 },
    { width: 1700, itemsToShow: 8 },
    { width: 1800, itemsToShow: 8 },
    { width: 1900, itemsToShow: 8 },
    { width: 2000, itemsToShow: 8 },
  ];
const Slider=()=>{
  const [productData,setProductData]=useState([
    {
      name:"Puffer jacket",
      img:img2,
      seller:"Nouman"
    },
    {
      name:"Bed cover",
      img:img4,
      seller:"Ahmad"
    },
    {
      name:"Pj set",
      img:img5,
      seller:"Ahmad"
    },
    {
      name:"Men T-shirt",
      img:img1,
      seller:"Ali"
    },
    {
      name:"USA flag badge",
      img:img3,
      seller:"Nouman",
      seller:"Umer"
    },
   
   
    
  ])
return(
    <>
         <div  className='sliderArrow' >
        
        <Carousel breakPoints={breakPoints}>
       {
         productData?.map((data,index)=>(
<Item style={index==0?{marginLeft:"0px",padding:"0px"}:{marginLeft:"15px"}}>
<div style={{maxHeight:"210px"}}>
<img src={data?.img} width="100%" height="210px" className='pb-2' max-width="150px" alt="Category 1" style={{maxHeight:"210px",objectFit:"contain",minHeight:"210px"}}/>
</div>
<div class="px-2">
 <p class="mt-3 product_Name">
   {data?.name}
 </p>
 <div class="product_price_list">
   <span class="prduct_Price">USD 17.18</span>
   <span class="prduct_Unit">Per kg</span>
 </div>
 <span class="product_Quantity">5 min quantity</span>
 <div>
   <span className="seller_heading">
     Seller based in:
   </span>
  
   <span className="seller_detail_city">
     Islamabad
   </span>
   
 </div>
 <div>
   <span className="seller_heading">
     Seller :
   </span>
   <span className="seller_detail">
   {data?.seller}
   </span>
 </div>
 <div>
   <span className="seller_heading">
     Store :
   </span>
   <span className="seller_detail">
     N.Cloths
   </span>
 </div>
</div>


</Item>
         ))
       }
       
        
          
</Carousel>
     </div>
    </>
)

}
export default Slider