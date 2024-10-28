import React, { useEffect, useState } from 'react'
import ShowUserData from './ShowUserData';

const InfinityLoading = () => {
    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(() => {
        getData()
    }, [page])

    useEffect(() => {
        window.addEventListener("scroll", handleInfinityScroll)
        return () => window.addEventListener("scroll", handleInfinityScroll)
    }, []);

    const handleInfinityScroll = () => {
        try {
            if (window.innerHeight + document.documentElement.scrollTop + 1 > document.documentElement.scrollHeight) {
                setPage((perv) => perv + 1)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const getData = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/comments?posts?_limit=9&_page=${page}`);
        let data = await res.json();
        setData((perv) => [...perv, ...data])
        console.log(data)
    }
    return (
        <div>
            <ShowUserData data={data} />

        </div>
    )
}

export default InfinityLoading