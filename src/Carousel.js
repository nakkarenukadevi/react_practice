import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

const Carousel = () => {
    let images = [image1, image2, image3, image4, image5, image6];

    let [count, setcount] = useState(0);

    const handleCarouselPerv = () => {
        if (count == 0) {
            setcount(count)
        } else {
            setcount(count - 1)
        }
    };

    const handleCarouselNext = () => {
        if (count < 5) {
            setcount(count + 1)
        }
    }

    return (
        <div className='w-1/2 border-2 border-black mt-20 mx-auto'>
            <div className='flex justify-evenly items-center'>
                <div><FontAwesomeIcon icon={faArrowAltCircleLeft} className='text-2xl' onClick={handleCarouselPerv} /></div>

                <div><img src={images[count]} className=' h-52' /></div>
                <div> <FontAwesomeIcon icon={faArrowAltCircleRight} className='text-2xl' onClick={handleCarouselNext} /></div>
            </div>

        </div>
    )
}

export default Carousel;