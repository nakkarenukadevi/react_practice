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
        let emailvalidata = /^[a-zA-Z0-9_.+\-]+[\x40][a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/
        if (form.email == "") {
            seterror("plese enter your email")
        }
        else if (!emailvalidata.test(form.email)) {
            seterror("your enter wrong email")
        } else if (form.password == '') {
            seterror("plese enter your password")
        }

        else if (form.password !== form.confirmPassword) {
            seterror("password and confiram is not same")
        }
        else if (form.password.length <= 3) {
            seterror("password length less than 6")
        }
        else {
            seterror("your form is submited")
        }

    }
    return (
        <from>
            <div className=' w-1/4 mx-auto mt-10'>
                <div className='flex justify-between items-center  '>
                    <div className=''>Email</div>
                    <div><input type="email" name="email" value={form.email}
                        className='border-2 border-black rounded-md ' onChange={handleformchange} /></div>
                </div>
                <div className='flex justify-between items-center my-2   '>
                    <div>password</div>
                    <div><input type="text" name='password' value={form.password} className='border-2 border-black rounded-md ' onChange={handleformchange} /></div>
                </div>
                <div className=' flex justify-between items-center  '>
                    <div>ConfirmPassword</div>
                    <div><input type="text" name="confirmPassword" value={form.confirmPassword} className='border-2 border-black rounded-md ' onChange={handleformchange} /></div>
                </div>
                <div className='text-red-600 text-center'>{error}</div>
                <div className='flex justify-center '><button className='bg-blue-700 text-white px-4 py-3 rounded-lg mt-2' onClick={handleform}>submit</button></div>
            </div>
        </from>
    )
}

export default FormValidation