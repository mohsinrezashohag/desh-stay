import logo from '../../assets/logo_black.png'
import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'
import tripsIllusion from '../../assets/login.svg'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <section className="max-width flex-evenly items-center">
            <div>
                <Link to='/'><img className='h-[100px] mt-16' src={logo} alt="" /></Link>
                <div>
                    <div>
                        <h1 className="text-4xl font-bold uppercase mt-10">Welcome</h1>
                        <form className='flex flex-col' action="">
                            <input type="text" placeholder="Username/Email" className="py-4  my-5 border-b-4  w-[500px]  px-3" />
                            <input type="text" placeholder="Password" className="py-4  my-5 border-b-4 w-[500px]  px-3" />
                        </form>
                        <div className='flex gap-4'>
                            <button className='rounded-btn'>Login</button>
                            <button className='text-bl uppercase font-semibold'>Forgot Password</button>
                        </div>


                        <div>
                            <h1 className='pt-10 pb-4 font-bold'>OR</h1>
                            <div className='flex'>
                                <img className='h-[30px] me-8 rounded-full' src={facebook} alt="" />
                                <img className='h-[30px] me-8 rounded-full' src={google} alt="" />
                            </div>
                            <p className='py-3'>New User?  <Link to='/register'><span className='text-bl cursor-pointer'>Create an account</span></Link></p>

                            <Link to='/register'> <button className='rounded-btn my-3'>Register</button></Link>

                            <div className='py-1'>
                                <p className='underline uppercase text-gray-400'>Privacy Policy</p>
                                <p className='underline uppercase text-gray-400'>Terms & condition</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <img className='w-[600px]' src={tripsIllusion} alt="" />
            </div>
        </section >
    );
};

export default Login;