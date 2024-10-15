import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addperson } from './Store/personSlice';
import Table from './Table';

const SortTable = ({ columnConfiger, persondata }) => {

    let { data } = useSelector((state) => state.data)

    let [sdata, setsdata] = useState({
        name: "",
        fathername: "",
        mothername: "",
        city: ""
    })
    let [showdata, setShowdata] = useState([]);

    let dispatch = useDispatch();

    let handleChangeData = (e) => {
        setsdata(prveState => ({ ...prveState, [e.target.name]: e.target.value }))
    }

    const handleSubmit = () => {
        setShowdata([...showdata, sdata])
    }

    const handlesort = (e) => {
        let key = e.target.key;
        let data2 = [...data];
        let x = data2.sort((a, b) => {
            return a[key].localeCompare(b[key]);
        });
        dispatch()
    }

    return (
        <>
            <div className='flex  w-full flex-row p-20'>
                <div className='w-1/4 md:w-1/2'>
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

                    ><button onClick={() => { handleSubmit() }} className=''>Submit</button></div>

                </div>
                <div className='flex basis-3/4 mx-20 md:w-1/2 md:mx-10'> <table className='border-2 border-black  p-5'>
                    <thead>
                        <tr className='border-2 border-black' onClick={handlesort}>
                            {columnConfiger.map((lable) => {
                                return <td className='border-2 border-black p-2' key={lable.key}>{lable.lable}</td>


                            })}
                        </tr>
                    </thead>
                    <tbody>

                        <Table data={showdata} />
                    </tbody>
                </table>
                </div>
            </div>
        </>
    )
}

export default SortTable