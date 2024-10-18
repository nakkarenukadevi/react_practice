import React, { useEffect, useState } from 'react';

import Table from './Table';

const SortTable = ({ columnConfiger, persondata }) => {
    let [filterConfig, setfilterConfig] = useState({})


    let [showdata, setShowdata] = useState(persondata);



    let [sdata, setsdata] = useState({
        id: "",
        name: "",
        fathername: "",
        mothername: "",
        city: ""
    });


    let handleChangeData = (e) => {

        setsdata(prveState => ({ ...prveState, [e.target.name]: e.target.value }));

    }

    const handleSubmit = () => {
        if (sdata.name && sdata.fathername && sdata.mothername && sdata.city !== "") {
            setShowdata([...showdata, sdata])
        }


    }

    const handlesort = (e) => {

        let data2 = [...showdata];
        data2.sort((a, b) => {
            let { key, dataType } = JSON.parse(e.target.dataset.src);

            switch (dataType) {
                case "string":
                    return a[key].localeCompare(b[key]);
                case "number":
                    return a[key] - b[key];

            }
        })

        setShowdata(data2)

    }

    const handlefilterConfig = (e) => {
        let { key, dataType } = JSON.parse(e.target.dataset.src);
        let updatedFilterConfig = { ...filterConfig, [e.target.name]: { value: e.target.value, dataType: dataType } }
        setfilterConfig(updatedFilterConfig);


        let filteredData = showdata.filter((data) => {
            let filterKeyValues = Object.entries(updatedFilterConfig)
            return filterKeyValues.every(([filterKey, filterValue]) => {

                switch (filterValue.dataType) {
                    case "string": {
                        return data[filterKey].includes(filterValue.value);

                    }
                    case "number": {
                        return data[filterKey].includes(filterValue.value)

                    }
                }

            })

        })
        setShowdata(filteredData)
    }


    return (
        <>
            <div className='flex  w-full flex-row p-20'>
                <div className='w-1/4 md:w-1/2  sm:flex-col'>
                    <div className='flex justify-between items-center'>
                        <div>Id:</div>
                        <div>   <input type="text" name="id" placeholder='id' value={sdata.id}
                            onChange={handleChangeData} className='border-2 border-gray-500 rounded-lg my-2 ' /></div>
                    </div>
                    <div className='flex justify-between items-center'>
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
                <div className='flex basis-3/4 mx-20 md:w-1/2 md:mx-10 sm:flex-col'>
                    <Table data={showdata} columnConfiger={columnConfiger} handlesort={handlesort} filterConfig={filterConfig} handlefilterConfig={handlefilterConfig} />
                </div>

            </div>

        </>
    )
}

export default SortTable