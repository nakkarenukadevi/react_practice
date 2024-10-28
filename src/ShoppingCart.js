import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import ShowItems from './ShowItems';


const ShoppingCart = () => {
    let [showData, setShowData] = useState([])
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        let data = await fetch('https://fakestoreapi.com/products');
        let json = await data.json();
        setShowData(json)

    }




    return (
        <ShowItems data={showData} />
    )
}

export default ShoppingCart