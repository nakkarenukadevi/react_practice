import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = () => {

    let [rating, setRating] = useState(0);


    const handleRating = (e) => {


        let rating = e.target.closest("svg").id;
        setRating(rating)
    }


    return (
        <div className=' mx-auto my-20 border-2 border-black  w-1/4 h-52'>

            <div className='flex justify-center'>
                <div className=' mt-10' onClick={handleRating}>


                    <FontAwesomeIcon icon={faStar} id={1} className={rating ? "addcolor h-10" : "h-10"} />
                    <FontAwesomeIcon icon={faStar} id={2} className={rating >= 2 ? "addcolor h-10" : "h-10"} />
                    <FontAwesomeIcon icon={faStar} id={3} className={rating >= 3 ? "addcolor h-10" : "h-10"} />
                    <FontAwesomeIcon icon={faStar} id={4} className={rating >= 4 ? "addcolor h-10" : "h-10"} />
                    <FontAwesomeIcon icon={faStar} id={5} className={rating >= 5 ? "addcolor h-10" : "h-10"} />
                </div>
            </div>
            <div className='flex justify-center items-center'>Rating {rating}</div>

        </div>

    )
}

export default StarRating