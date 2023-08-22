import React, { useState } from 'react';
import user from "../../assests/png/user-profile.png"
import { FaStar } from 'react-icons/fa';
const Review = () => {
    const [rating, setRating] = useState(0);
    const handleRatingClick = (selectedRating) => {
        setRating(selectedRating);
    };
    return (
        <div className='row'>
            <div className='col-md-12'>
                <div className='reviews'>
                    {[...Array(5)].map((_, index) => {
                        const starValue = index + 1;
                        return (
                            <label key={starValue}>
                                {/* Hide the default radio button */}
                                <input
                                    type="radio"
                                    name="rating"
                                    value={starValue}
                                    onClick={() => handleRatingClick(starValue)}
                                    style={{ display: 'none' }}
                                />
                                <FaStar
                                    className="star-icon "
                                    style={{ cursor: "pointer" }}

                                    color={starValue <= rating ? '#0096ff' : '#e4e5e9'}
                                    size={15}
                                />
                            </label>
                        );
                    })}
                    <p className='mt-2 '>Easily find and Compare prices</p>
                    <div className='mt-3 desc'>I can find any divroduct I want on. I can easily see multiple options, compare prices, and get in touch with the seller.</div>
                    <div className='d-flex gap-3 align-items-center justify-content-center mt-4'>
                        <img src={user} width="20px" />
                        <div className='d-flex flex-column gap-1'>
                            <p className='p-0 m-0'>Ahmed AI Seed</p>
                            <h6 className='proceed'>Procurement manger at Cravia Inc.</h6>
                        </div>
                    </div>
                </div>

            </div>
            <div className='col-md-4'>

            </div>
            <div className='col-md-4'>

            </div>

        </div>
    )
}

export default Review
