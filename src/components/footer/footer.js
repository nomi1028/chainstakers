import React from 'react'
import './footer.css'
import footer from "../assests/png/logo.png"
const Footer = () => {
  return (
    <div>
          <footer className="px-5">
        <div className="form py-5">
            <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
            <p>Get all the latest information on Events, Sales and Offers.</p>
            <form action="">
                <div className="mt-3 d-flex">
                    <input type="text" name="e-mail" id="email" placeholder="Your E-mail Address" className="input-form"/>
                    <button id="" className="subscribe-button mx-2">SUBSCRIBE</button>
                </div>
            </form>
        </div>
        <div  className="pt-5 pb-4 px-2">
            <div className="row">
                <div className="col-lg-2 col-md-4 col-6 footer-links">
                    <ul>
                        <h1>CATEGORIES</h1>
                        <li>Agriculture</li>
                        <li>Engineering</li>
                        <li>Fisheries & Seafood</li>
                        <li>Furniture & Handicrafts</li>
                        <li>Gems & Jewellery
                        </li>
                        <li>Leather</li>
                        <li>Meat & Poultry</li>
                        <li>Personal Care & Pharma</li>
                        <li>Sports Wear & Goods</li>
                        <li>Textiles</li>
                    </ul>

                </div>

                <div className="col-lg-2 col-md-4 col-6 footer-links">
                    <ul>
                        <h1>MY ACCOUNT</h1>
                        <li>Login</li>
                        <li>Register</li>
                        <li>Messages</li>
                        <li>Wishlist</li>
                        <li>Account </li>
                    </ul>
                </div>

                <div className="col-lg-2 col-md-4 col-12 m-md-0 m-auto footer-links">
                    <ul>
                        <h1>HELP & CONTACT</h1>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Social Media
                        </li>
                        <li>About Pakistan</li>
                        <li>Useful links
                        </li>
                        <li>FAQs </li>
                        <li>User Guide </li>
                    </ul>
                </div>

                <div className="col-lg-6 col-md-6 col-10 m-md-0 m-auto d-flex flex-column align-items-end logo">
                    <img src={footer} alt="logo" width="150px"/>
                    <p className="mt-3">Got Question? Call us 24/7</p>
                    <h1><a href="">+92-21-111-444-111</a></h1>
                </div>
            </div>
        </div>
        <div className="pt-4 pb-2 footer-end">
            <p>Copyright © 2023 TDAP B2B. All Rights Reserved. Site developed & managed by ECOM PK Pvt. Ltd</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer
