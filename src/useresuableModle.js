import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmarkCircle } from '@fortawesome/free-regular-svg-icons';
import { useState } from "react";

const ReusableModle = (props) => {

    let { isOpen, onClose, children } = props;


    return <>

        {isOpen ? <div className=" fixed inset-0 bg-black bg-opacity-50 z-40"><div className="align-center fixed inset-0 flex items-center justify-center z-50 "><div className="w-5/12 h-64 border-2 shadow-lg  bg-purple-500  absolute z-50  text-white rounded-lg ">
            <div className="relative top-2 left-4"><FontAwesomeIcon icon={faXmarkCircle} className="close" onClick={onClose} /></div>
            {children}

        </div></div> </div> : null}

    </>
}
export default ReusableModle