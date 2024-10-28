
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { faBars, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
    let [openLinks, setOpenLinks] = useState(false)
    const handleLinks = () => {
        setOpenLinks(!openLinks)
    }
    return (
        <div className='bg-black text-white p-2 flex '>
            <div className='flex justify-start items-center'>
                <FontAwesomeIcon icon={faBars} className='mx-5 text-2xl' onClick={handleLinks} />

            </div>
            {openLinks ? <div className=' absolute top-10 left-0  bg-cyan-500 w-1/4 grid  justify-items-stretch  '>

                <div className=' text-black  '>
                    <ul className=' '>

                        <li className='font-bold p-3 hover:bg-green-500 hover:text-white    '>
                            <Link to='/showmodel'>Modale</Link>
                        </li>
                        <li className='font-bold p-3 hover:bg-green-500 hover:text-white '>
                            <Link to='/'>rating</Link>
                        </li>
                        <li className=' font-bold p-3 hover:bg-green-500 hover:text-white  '>
                            <Link to='/carousel'>Carousel</Link>
                        </li>
                        <li className=' font-bold p-3 hover:bg-green-500 hover:text-white  '>
                            <Link to='/counter'>Counter</Link>
                        </li>
                        <li className=' font-bold p-3 hover:bg-green-500 hover:text-white  '>
                            <Link to='/sorttable'>SortTable</Link>
                        </li>
                        <Link to='/form'>  <li className=' font-bold p-3 hover:bg-green-500 hover:text-white  '>

                            FormValidation
                        </li></Link>
                        <Link to='/shop'>  <li className=' font-bold p-3 hover:bg-green-500 hover:text-white  '>

                            Shopping
                        </li></Link>
                        <Link to='/infinityloading'>  <li className=' font-bold p-3 hover:bg-green-500 hover:text-white  '>

                            InfinityLoading
                        </li></Link>
                    </ul>
                </div>
            </div> : null}

        </div>
    )
}

export default Header