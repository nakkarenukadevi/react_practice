import React from 'react'

const Table = ({ data }) => {
    return (
        <>

            {data.map((data, index) => {
                return <tr key={index}>
                    <td className='border-2 border-black '>{data.name}</td>
                    <td className='border-2 border-black'>{data.fathername}</td>
                    <td className='border-2 border-black'>{data.mothername}</td>
                    <td className='border-2 border-black'>{data.city}</td>
                </tr>
            })}

        </>
    )
}

export default Table