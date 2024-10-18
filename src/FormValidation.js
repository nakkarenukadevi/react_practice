import React, { useState } from 'react'

const FormValidation = () => {
    let [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    let [error, seterror] = useState('')
    const handleformchange = (e) => {
        setForm((perv) => ({ ...perv, [e.target.name]: e.target.value }))
    }
    const handleform = () => {

        if (form.password.length <= 4) {
            seterror("password length less than 4")
        } else if (form.password != form.confirmPassword) {
            seterror("password and confirmpassword not match")
        }

    }
    return (
        <div className=' w-1/4 mx-auto mt-10'>
            <div className='flex justify-between items-center  '>
                <div className=''>Email</div>
                <div><input type="email" name="email" value={form.email}
                    className='border-2 border-black rounded-md ' onChange={handleformchange} /></div>
            </div>
            <div className='flex justify-between items-center my-2   '>
                <div>password</div>
                <div><input type="text" name='password' value={form.password} className='border-2 border-black rounded-md ' /></div>
            </div>
            <div className=' flex justify-between items-center  '>
                <div>ConfirmPassword</div>
                <div><input type="password" name="confirmPassword" value={form.confirmPassword} className='border-2 border-black rounded-md ' /></div>
            </div>
            <div className='text-red-600 text-center'>{error}</div>
            <div className='flex justify-center '><button className='bg-blue-700 text-white px-4 py-3 rounded-lg mt-2' onClick={handleform}>submit</button></div>
        </div>
    )
}

export default FormValidation