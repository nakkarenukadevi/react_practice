import React, { useState } from 'react'

const SortTable = () => {
    let [sdata, setsdata] = useState({
        name: "",
        fathername: "",
        mothername: "",
        city: ""
    })
    let [showdata, setShowdata] = useState([])
    let handleChangeData = (e) => {


        setsdata(prveState => ({ ...prveState, [e.target.name]: e.target.value }))

    }
    const handleSubmit = () => {
        showdata.push(sdata);


    }



    return (
        <>
            <div className='w-1/4 mx-auto my-20'>
                <div className='flex justify-between items-center '>
                    <div>Name:</div>
                    <div>   <input type="text" name="name" placeholder='sname' value={sdata.name}
                        onChange={handleChangeData} className='border-2 border-gray-500 rounded-lg my-2 ' /></div>

                </div>
                <div className='flex justify-between items-center'>
                    <div>fatherName:</div>
                    <div>   <input type="text" name="fathername" placeholder='fathername' value={sdata.fathername}
                        onChange={handleChangeData} className='border-2 border-gray-500 rounded-lg my-2 ' /></div>

                </div>
                <div className='flex justify-between items-center'>
                    <div>MotherName:</div>
                    <div>   <input type="text" name="mothername" placeholder='mothername' value={sdata.mothername}
                        onChange={handleChangeData} className='border-2 border-gray-500 rounded-lg my-2 ' /></div>

                </div>
                <div className='flex justify-between items-center'>
                    <div>City:</div>
                    <div>   <input type="text" name="city" placeholder='city' value={sdata.city}
                        onChange={handleChangeData} className='border-2 border-gray-500 rounded-lg my-2 ' /></div>

                </div>
                <div className='flex justify-center bg-violet-700 text-white rounded-lg text-bold p-3 my-4 active:bg-cyan-500'
                    onClick={handleSubmit}
                ><button onClick={handleSubmit} className=''>Submit</button></div>

            </div>
            <table className='border-2 border-black mx-auto p-5'>
                <thead>
                    <tr className='border-2 border-black' >
                        <td className='border-2 border-black p-2'>Name</td>
                        <td className='border-2 border-black p-2'>FatherName</td>
                        <td className='border-2 border-black p-2'>MotherName</td>
                        <td className='border-2 border-black p-2'>City</td>
                    </tr>
                </thead>
                <tbody>




                    {showdata.map((data, index) => {
                        return <tr key={index}>
                            <td className='border-2 border-black'>{data.name}</td>
                            <td className='border-2 border-black'>{data.fathername}</td>
                            <td className='border-2 border-black'>{data.mothername}</td>
                            <td className='border-2 border-black'>{data.city}</td>
                        </tr>
                    })}
                </tbody >
            </table>
        </>
    )
}

export default SortTable