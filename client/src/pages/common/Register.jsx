import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo_black.png'
import { useRegisterMutation } from '../../rtk/features/user/userApi';
import { useEffect, useState } from 'react';

const Register = () => {
    const [register, { data, isLoading }] = useRegisterMutation()

    const [regInfo, setRegInfo] = useState({
        "firstName": "",
        "lastName": "",
        "email": "",
        "password": "",
        "confirmPassword": "",
        "phnNumber": "",
        "dateOfBirth": "",
        "presentAddress": "",
        "permanentAddress": ""
    })

    const handleRegister = async (e) => {
        e.preventDefault()
        register(regInfo)
    }

    // page redirect after register
    const navigate = useNavigate()
    useEffect(() => {
        if (data?.success && !isLoading) {
            navigate('/login')
        }
    }, [navigate, data, isLoading])

    return (
        <section className="max-width">
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between mt-16'>

                <div className='w-1/5'>
                    <Link to='/'><img className='h-[100px] mb-10 mb:mb-0 ' src={logo} alt="" /></Link>

                </div>

                <div className='w-[70%]'>
                    <div className='text-left'>
                        <h1 className='text-5xl font-bold text-bl uppercase  '>Register</h1>
                        <p className='pt-3'>Already have an account ?  <Link to='/login'><span className='text-bl cursor-pointer'>Login</span></Link></p>
                    </div>

                    <form onSubmit={handleRegister} action="flex flex-col">

                        <div className='flex gap-3 mt-10'>
                            <input onChange={e => setRegInfo({ ...regInfo, firstName: e.target.value })} className='w-[35%] input-border px-3 py-4' type="text" placeholder='First Name' />
                            <input onChange={e => setRegInfo({ ...regInfo, lastName: e.target.value })} className='w-[35%] input-border px-3 py-4' type="text" placeholder='Last Name' />
                        </div>

                        <input onChange={e => setRegInfo({ ...regInfo, email: e.target.value })} className='input-border px-3 py-4 w-[70%]' type="email" placeholder='Email' />
                        <input onChange={e => setRegInfo({ ...regInfo, password: e.target.value })} className='input-border px-3 py-4 w-[70%]' type="password" placeholder='Password' />
                        <input onChange={e => setRegInfo({ ...regInfo, confirmPassword: e.target.value })} className='input-border px-3 py-4 w-[70%]' type="password" placeholder='Confirm Password' />
                        <input onChange={e => setRegInfo({ ...regInfo, phnNumber: e.target.value })} className='input-border px-3 py-4 w-[70%]' type="number" placeholder='+880' />
                        <input onChange={e => setRegInfo({ ...regInfo, dateOfBirth: e.target.value })} className='input-border px-3 py-4 w-[70%]' type="date" placeholder='Date of birth' />
                        <input onChange={e => setRegInfo({ ...regInfo, presentAddress: e.target.value })} className='input-border px-3 py-4 w-[70%]' type="text" placeholder='Present Address' />
                        <input onChange={e => setRegInfo({ ...regInfo, permanentAddress: e.target.value })} className='input-border px-3 py-4 w-[70%]' type="text" placeholder='Permanent Address' />



                        <div className='w-full md:w-[70%] py-6'>
                            <p className=''>By selecting Agree and continue, I agree to bangla bell’s Terms of
                                Service, Payments Terms of Service, and Nondiscrimination Policy and
                                acknowledge the Privacy Policy</p>
                        </div>

                        <button type='submit' className='rounded-btn uppercase'>Agree and Continue</button>
                    </form>

                </div>

            </div>
        </section >
    );
};

export default Register;