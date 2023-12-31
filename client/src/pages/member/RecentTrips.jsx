import { Link } from 'react-router-dom';
//components
import SecondHeader from '../../components/common/SecondHeader'
import Footer from '../../components/common/Footer'
// images
import apartment from '../../assets/apartment.jpg'

// icons
import rattingIcon from '../../assets/ratting.svg'
import bedIcon from '../../assets/bed-solid.svg'
import userIcon from '../../assets/user-solid.svg'



const RecentTrips = () => {
    return (
        <>
            <SecondHeader></SecondHeader>
            <div className='max-width'>

                {/* Breadcrumb */}
                <div className="flex mt-6" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg aria-hidden="true" className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                                Home
                            </Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                                <Link to="/your-trips" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Recent trips</Link>
                            </div>
                        </li>
                    </ol>
                </div>




                <div className='pb-32'>
                    <h1 className='text-3xl uppercase font-bold text-bl text-center py-20'>Your Recent Trips</h1>


                    <div>
                        <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">

                            <img className="rounded-md" src={apartment} width={250} alt="" />

                            <div className="flex justify-between gap-x-80" >
                                <div>
                                    <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                    <div className="flex items-center gap-2 mt-2">
                                        <p>5.0</p>
                                        <div className="flex gap-0.5 ">
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                        </div>
                                    </div>

                                    <div className="flex gap-2 underline text-bl mt-3">
                                        <p>Dhaka</p>
                                        <p>Show On map</p>
                                    </div>

                                    <div className="flex gap-6 mt-3">
                                        <div className="flex gap-2 items-center">
                                            <img src={userIcon} width={20} alt="" />
                                            <p>3 <span>Persons</span></p>
                                        </div>
                                        <div className="flex gap-2 items-center ">
                                            <img src={bedIcon} width={25} alt="" />
                                            <p>3 <span>Bedrooms</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-80">
                                    <h1 className="text-4xl font-semibold">$ 500</h1>
                                    <button className="primary-btn mt-10">Show Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                            <img className="rounded-md" src={apartment} width={250} alt="" />
                            <div className="flex justify-between gap-x-80" >
                                <div>
                                    <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                    <div className="flex items-center gap-2 mt-2">
                                        <p>5.0</p>
                                        <div className="flex gap-0.5 ">
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                        </div>
                                    </div>

                                    <div className="flex gap-2 underline text-bl mt-3">
                                        <p>Dhaka</p>
                                        <p>Show On map</p>
                                    </div>

                                    <div className="flex gap-6 mt-3">
                                        <div className="flex gap-2 items-center">
                                            <img src={userIcon} width={20} alt="" />
                                            <p>3 <span>Persons</span></p>
                                        </div>
                                        <div className="flex gap-2 items-center ">
                                            <img src={bedIcon} width={25} alt="" />
                                            <p>3 <span>Bedrooms</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-80">
                                    <h1 className="text-4xl font-semibold">$ 500</h1>
                                    <button className="primary-btn mt-10">Show Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start gap-6 shadow-md rounded-md p-3 mt-6">
                            <img className="rounded-md" src={apartment} width={250} alt="" />
                            <div className="flex justify-between gap-x-80" >
                                <div>
                                    <h1 className="text-2xl font-semibold capitalize">Apartment At Banani</h1>
                                    <div className="flex items-center gap-2 mt-2">
                                        <p>5.0</p>
                                        <div className="flex gap-0.5 ">
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                            <img src={rattingIcon} width={15} alt="" />
                                        </div>
                                    </div>

                                    <div className="flex gap-2 underline text-bl mt-3">
                                        <p>Dhaka</p>
                                        <p>Show On map</p>
                                    </div>

                                    <div className="flex gap-6 mt-3">
                                        <div className="flex gap-2 items-center">
                                            <img src={userIcon} width={20} alt="" />
                                            <p>3 <span>Persons</span></p>
                                        </div>
                                        <div className="flex gap-2 items-center ">
                                            <img src={bedIcon} width={25} alt="" />
                                            <p>3 <span>Bedrooms</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="ps-80">
                                    <h1 className="text-4xl font-semibold">$ 500</h1>
                                    <button className="primary-btn mt-10">Show Details</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    );
};

export default RecentTrips;