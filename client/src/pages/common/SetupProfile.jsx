import { Link } from 'react-router-dom';
import logo from '../../assets/logo_black.png'
import userIcon from '../../assets/user-solid.svg'


const SetupProfile = () => {

    return (
        <section className="max-width">
            <div className='flex flex-col md:flex-row items-center md:items-start justify-between mt-16'>

                <div className='w-1/5'>
                    <Link to='/'><img className='h-[100px] mb-10 mb:mb-0 ' src={logo} alt="" /></Link>

                    <div className='flex flex-col items-center mt-32'>
                        <div className='bg-gray-200 p-20 rounded-md'>
                            <img src={userIcon} width={100} alt="" />
                        </div>
                        <button className='rounded-btn mt-[-10]' style={{ marginTop: '-20px' }}>Upload Image</button>
                    </div>


                </div>

                <div className='w-[70%]'>
                    <div className='text-left'>
                        <h1 className='text-5xl font-bold text-bl uppercase  '>Setup Your Profile</h1>
                    </div>

                    <form className="flex flex-col mt-20">



                        <input className='input-border px-3 py-4 w-[70%]' type="text" placeholder='Your Bio' />
                        <input className='input-border px-3 py-4 w-[70%]' type="text" placeholder='Profession' />
                        <input className=' input-border px-3 py-4 w-[70%]' type="text" placeholder='Present Address' />
                        <input className=' input-border px-3 py-4 w-[70%]' type="text" placeholder='Permanent Address' />
                        <input className=' input-border px-3 py-4 w-[70%]' type="number" placeholder='+880 (update mobile number)' />
                        <input className=' input-border px-3 py-4 w-[70%]' type="date" placeholder='Date of birth' />

                        <div className='w-full md:w-[70%] py-6'>
                            <p className=''>By selecting update and continue, I agree to bangla bell’s Terms of
                                Service, Payments Terms of Service, and Nondiscrimination Policy and
                                acknowledge the Privacy Policy</p>
                        </div>

                    </form>
                    <button type='submit' className='rounded-btn uppercase'>Update and Continue</button>


                </div>

            </div>
        </section >
    );
};

export default SetupProfile;