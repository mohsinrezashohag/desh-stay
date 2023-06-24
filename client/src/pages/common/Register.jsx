import { Link } from 'react-router-dom';
import logo from '../../assets/logo_black.png'
import { useRegisterMutation } from '../../rtk/features/user/userApi';

const Register = () => {
    const [register, { isLoading, data, isError, error }] = useRegisterMutation()

    return (
        <section className="max-width">
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between mt-16'>

                <div className='w-1/5'>
                    <Link to='/'><img className='h-[100px] mb-10 mb:mb-0 ' src={logo} alt="" /></Link>

                </div>

                <div className='w-[70%]'>
                    <div className='text-left'>
                        <h1 className='text-5xl font-bold text-bl uppercase  '>Register</h1>
                        <p className='py-3'>Already have an account ?  <Link to='/login'><span className='text-bl cursor-pointer'>Login</span></Link></p>
                    </div>


                    <form action="flex flex-col">
                        <div className='flex gap-3 mt-10'>
                            <input className='w-[35%] border-b-4 uppercase px-3 py-4' type="text" placeholder='First Name' />
                            <input className='w-[35%] border-b-4 uppercase px-3 py-4' type="text" placeholder='Last Name' />
                        </div>
                        <input className=' border-b-4 uppercase px-3 py-4 w-[70%]' type="password" placeholder='Password' />
                        <input className=' border-b-4 uppercase px-3 py-4 w-[70%]' type="password" placeholder='Confirm Password' />
                        <input className=' border-b-4 uppercase px-3 py-4 w-[70%]' type="number" placeholder='+880' />
                        <input className=' border-b-4 uppercase px-3 py-4 w-[70%]' type="date" placeholder='Date of birth' />
                        <input className=' border-b-4 uppercase px-3 py-4 w-[70%]' type="text" placeholder='Present Address' />
                        <input className=' border-b-4 uppercase px-3 py-4 w-[70%]' type="text" placeholder='Permanent Address' />



                        <div className='w-full md:w-[70%] py-6'>
                            <p className=''>By selecting Agree and continue, I agree to bangla bell’s Terms of
                                Service, Payments Terms of Service, and Nondiscrimination Policy and
                                acknowledge the Privacy Policy</p>
                        </div>

                        <button className='rounded-btn uppercase'>Agree and Continue</button>
                    </form>

                </div>

            </div>
        </section >
    );
};

export default Register;