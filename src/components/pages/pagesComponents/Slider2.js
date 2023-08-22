import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "../../styles/main.css"
import cartItem3 from "../../assests/png/cat5.jpg"



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
return(
    <>
         <div  className='sliderArrow' >
        
         <Carousel breakPoints={breakPoints}>
        {
          [1,2,3,4,5,6,7,8,9,10,11].map((data,index)=>(
<Item style={index==0?{marginLeft:"0px",padding:"0px"}:{marginLeft:"15px"}}>
 <div >
 <img src={cartItem3} width="100%" height="210px" className='pb-2' max-width="150px" alt="Category 1" />
 </div>
 <div class="px-2">
  <p class="mt-3 product_Name">
    Product Name
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
     Nouman Azeem
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