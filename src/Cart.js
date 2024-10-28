import React, { useContext } from 'react'

import { CartContext } from './App'
const Cart = () => {

    let { CartItems } = useContext(CartContext);

    const renderCartItems = () => {
        let keyvalues = Object.entries(CartItems);
        let total = 0
        return <div >

            {keyvalues.map(([key, value]) => {
                { total = total + value.qty * parseFloat(value.item.price) }
                return <div className='flex justify-evenly items-center w-1/2'>
                    <div> <img src={value.item.image} className='h-40 w-52 mt-5' /></div>
                    <div className='overflow-hidden  w-1/2'>{value.item.title}</div>
                    <div className='mx-10'>Price: ${value.item.price * value.qty}</div>
                    <div>Quntity {value.qty}</div>

                </div>

            })}
            <div className=' text-center mx-20 border-2 m-10 bg-green-600 text-white font-bold w-36 px-6 py-2 '>TotalPrice ${total}</div>

        </div>

    }

    return <>
        {renderCartItems()}

    </>





}

export default Cart