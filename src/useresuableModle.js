import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";
const ReusableModle = (props) => {
    let state = props.value
    let [modle, setModle] = useState(state);


    const handleModle = () => {
        setModle(false)
    }
    return <>
        {modle ? <div className="w-5/12 h-64 border-2 shadow-lg bg-purple-500 mx-auto  text-white rounded-lg ">
            <div className="relative top-2 left-4"><FontAwesomeIcon icon={faXmarkCircle} className="close" onClick={handleModle} /></div>
            <h1 className="text-center">welcome</h1>

        </div> : null}

    </>
}
export default ReusableModle