import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from "./App";

const ShowItems = ({ data }) => {

    let { CartItems, handleCatItems } = useContext(CartContext);

    let navigate = useNavigate()

    const updateCartItems = (item) => {

        if (item.id in CartItems) {
            CartItems[item.id].qty++

        } else {
            CartItems[item.id] = {
                qty: 1, item
            }
        }
        handleCatItems(CartItems);
        navigate("/cartItem")
    }
    return (
        <div className=' flex flex-wrap  container mx-auto px-4 '>{data.map((item) => {
            return <div key={item.id} className='w-56 h-72 m-10 p-4 border-2 hover:border-gray-400 hover:shadow-lg  hover:rounded-lg '>
                <div><img src={item.image} className='w-52 h-40' /></div>

                <div className='text-center  mt-8'><button className='bg-blue-600 text-white shadow-lg rounded-lg px-4 py-3 ' onClick={() => { updateCartItems(item) }}>Add</button></div>

            </div>
        })}</div>
    )
}

export default ShowItems