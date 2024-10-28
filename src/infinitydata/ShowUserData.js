import React from 'react'

const ShowUserData = ({ data }) => {

    return (
        <div className='flex flex-wrap justify-center items-center gap-10 mt-10 '>
            {data.map((user) => {
                return <div className='card w-60 h-80 border-2 border-gray-400 rounded-lg shadow-lg bg-black text-white '>
                    <div className=' mt-2 text-center    mx-auto'>{user.id}</div>
                    <div className='text-center  leading-loose '>{user.body}</div>
                </div>
            })}

        </div>
    )
}

export default ShowUserData