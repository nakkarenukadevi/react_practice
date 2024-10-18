import React, { useState } from 'react'

const Table = ({ data, columnConfiger, handlesort, filterConfig, handlefilterConfig }) => {

    return (
        <>

            <table className='border-2 border-black  p-5 w-full'>
                <thead >
                    <tr className='border-2 border-black ' key="headerRow" onClick={handlesort}>
                        {columnConfiger.map((lable) => {
                            return <><td className=' border-2 border-black text-center' data-src={JSON.stringify(lable)}>{lable.lable}
                            </td ></>
                        })}
                    </tr>
                    <tr key="input">
                        {columnConfiger.map((lable) => {
                            return <> <td className=' mt-2 border-2  border-black ' >
                                <input type="text" value={filterConfig[lable.key]?.value} name={lable.key} onChange={handlefilterConfig}
                                    className='border-2 border-black' data-src={JSON.stringify(lable)} /></td > </>

                        })}
                    </tr>
                </thead>
                <tbody>

                    {data.map((person) => {

                        return <tr key={person.id}>{columnConfiger.map((key, index) => {
                            return <td className='border-2 border-black ' key={index}>{person[key.key]}</td>


                        })}</tr>

                    })}

                </tbody>
            </table>


        </>
    )
}

export default Table